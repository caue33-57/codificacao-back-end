import { Injectable, 
         NotFoundException,
         ConflictException,
         InternalServerErrorException,
         Inject
         } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/updte-aluno.dto.js";
import { Aluno,AlunoDoc } from "../schemas/aluno.schame.js";
import { MongoServerError } from "mongodb";
import { ConfigService } from "@nestjs/config";
import { variaveisDeAmbiente } from "../config/env.config.js";
import type { ConfigType } from "@nestjs/config";
import databaseConfig from "../config/database.config.js";

@Injectable()
export class AlunosService {
    constructor(@InjectModel(Aluno.name) private alunoModel: Model<AlunoDoc>,
             private readonly configServices: ConfigService<variaveisDeAmbiente, true>,
            @Inject(databaseConfig.KEY)private dbconfig: ConfigType<typeof databaseConfig>) {
                console.log(`Conectado em: ${this.dbconfig.uri}`);
                console.log(`Pool Maximo: ${this.dbconfig.maxPoolSize}`);
            }
configuracaesDeAmbiente(){
    const nodeEnv: string = this.configServices.get('NODE_ENV',{
        infer:true,
    })
    const port = this.configServices.get('PORT',{
        infer:true,
    })
    const databaseUri = this.configServices.get('DATABASE_URI',{
        infer:true,
    })
    const jwtSecret = this.configServices.get('JWT_SECRET',{
        infer:true,
    })
}

    async create(createAlunoDto: CreateAlunoDto): Promise<Aluno>{
        try{
         const createAluno = new this.alunoModel(createAlunoDto);
        return await createAluno.save();
        } catch (error: unknown) {
            if (
                error instanceof MongoServerError 
                && 
                error.code === 11000
            ){
                throw new ConflictException('Já existe um aluno cadastrado com essa matricula');
            }
            throw new InternalServerErrorException('Erro ao Processar o  cadastro do aluno');
        }
       
    }

    // async findAll(): Promise <Aluno[]>{
    //     return this.alunoModel.find().exec();
    // }

    //! Método para buscar os alunos com paginação
    async findPagefilter(
        page: number, 
        limit: number, 
        nome?: string, 
        curso?: string,
        orderBy?: string,
        orderDirection?: "asc" | "desc",
    ){
        const skip = (page - 1) * limit;
        const filter: any = {ativo: true}; // Adiciona o filtro para buscar apenas alunos ativos
        const sort: any = {};

        if(nome){
            filter.nome = {
                $regex: new RegExp(nome, 'i'),
            };
        }

        if(curso){
            filter.cursos = curso;
        }
         
         if(orderBy){
            sort[orderBy] = orderDirection === 'desc' ? -1 : 1;            
         }

        const [data, total] = await Promise.all([
            this.alunoModel.find(filter).sort(sort).skip(skip).limit(limit).exec(),
            this.alunoModel.countDocuments(filter).exec(),
        ]);
        return {
            data,
            meta:{
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    
    async findOne(id: string): Promise <Aluno>{
    //    const aluno = await this.alunoModel.findById(id).exec();
    const aluno = await this.alunoModel.findOne({ _id: id, ativo: true }).exec();
       if(!aluno){
        throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);
       }
       return aluno;
    }

    async update(id: string, updateAlunoDto: UpdateAlunoDto):Promise<Aluno>{
        const alunoAtualizado = await this.alunoModel.findByIdAndUpdate(id, updateAlunoDto,{
            new: true }).exec();
            if(!alunoAtualizado){
                throw new NotFoundException(`Aluno com ID ${id} não encontrado.`);
            }
            return alunoAtualizado;
    }
    async remove(id: string): Promise<Aluno>{
        const alunoRemovido = await this.alunoModel.findByIdAndUpdate(id, { ativo: false }, { new: true }).exec();
        if(!alunoRemovido){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado.`)
        }
        return alunoRemovido;
    } //!DELETE

    async restore(id: string): Promise<Aluno>{
        const alunoRestaurado = await this.alunoModel.findByIdAndUpdate(id, { ativo: true }, { new: true }).exec();
        if(!alunoRestaurado){
            throw new NotFoundException(`Aluno não encontrado pelo ID ${id}`);
        }
        return alunoRestaurado;
    }
}