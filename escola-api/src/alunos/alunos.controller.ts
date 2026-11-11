import { Controller,
         Get, 
         Post, 
         Body, 
         Patch, 
         Param, 
         Delete,
        Query,
    DefaultValuePipe,
ParseArrayPipe,
ParseIntPipe,} from '@nestjs/common';
import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/updte-aluno.dto.js';
import { create } from 'domain';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';



@Controller('alunos')
export class AlunosController {
   constructor(private readonly alunosService: AlunosService){}

   @Post()
    create(@Body()createAlunoDto: CreateAlunoDto){
        return this.alunosService.create(createAlunoDto);
    }

    @Get()
    // findAll(){
    //     return this.alunosService.findAll();
    // }
         @Get()
         @ApiOperation({
            summary:'Listar alunos com paginacao'
         })
        @ApiResponse({
            status: 200,
            description:'lista de alunos retornada com sucesso',

        })
        @ApiResponse({
            status:500,
            description:'erro interno no servidor',

         }) 
         @ApiQuery({
            name:'page',
            required:false,
            type:Number,
            description:'Numero da pagina (padrao:1)',
         })
         findPage(@Query('page', new DefaultValuePipe(1),ParseIntPipe) page: number,
         @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number){
            return this.alunosService.findPage(page, limit);
         }

        
    

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.alunosService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAlunoDto : UpdateAlunoDto){
        return this.alunosService.update(id, updateAlunoDto);
    }

    @Delete(":id")
    remove(@Param('id') id: string){
        return this.alunosService.remove(id);
    }
}