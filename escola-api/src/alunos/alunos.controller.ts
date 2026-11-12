import { Controller, Get, Post, Body, Patch, Param, Delete, Query, DefaultValuePipe, ParseIntPipe } from "@nestjs/common";
    import { AlunosService } from "./alunos.service.js";
    import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
   import { UpdateAlunoDto } from "./dto/updte-aluno.dto.js";
    import { ApiTags, ApiResponse, ApiOperation, ApiQuery } from "@nestjs/swagger"; 

@ApiTags('alunos')
@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunosService: AlunosService) {}

    @Post()
    @ApiOperation({
        summary: 'criar a matricula do aluno',
    })
    @ApiResponse({
        status: 201,
        description: 'Aluno criado com sucesso',
    })
    @ApiResponse({
        status: 400,
        description: 'Requisição inválida ou dados de entrada incorretos/mal formatados',
    })
    create(@Body()createAlunoDto: CreateAlunoDto){
        return this.alunosService.create(createAlunoDto);
    }

    // @Get()
    // @ApiOperation({
    //     summary: 'Listar todos os alunos',
    // })
    // @ApiResponse({
    //     status:200,
    //     description: 'Lista de alunos retornada com sucesso',
    // })
    // @ApiResponse({
    //     status: 404,
    //     description: 'Nenhum aluno encontrado',
    // })
    // findAll(){
    //     return this.alunosService.findAll();
    // }

    @Get()
    @ApiOperation({
        summary: 'Listar alunos com paginação, filtros opcionais e ordenacao',
    })
    @ApiResponse({
        status: 200,
        description: 'Lista de alunos retornada com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Nenhum aluno encontrado'
    })
    @ApiResponse({
        status: 500,
        description: 'Erro interno do Servidor'
    })
    @ApiQuery({
        name: 'page',
        required: false,
        type: Number,
        description: 'Número da página (padrão: 1)'
    })
    @ApiQuery({
        name: 'limit',
        required: false,
        type: Number,
        description: 'Número de itens por página (padrão: 10)',
    })
    @ApiQuery({
        name:'nome',
        required: false,
        type: String,
        description: 'Filtrar alunos pelo nome (Ex: Jamilly)'
    })
    @ApiQuery({
        name:'curso',
        required: false,
        type: String,
        description: 'Filtrar alunos pelo curso (Ex: Engenharia civil)'
    })
    @ApiQuery({
        name: 'orderBy',
        required:false,
        type: String,
        description:'Campos(ex: nome, idade, matricula e curso)'
    })

    @ApiQuery({
        name: 'orderDirection',
        required:false,
        enum:[
            'asc',
            'desc',
        ],
        description:'(asc) para Crescente e (desc) para decrescente'
    })
    findPage(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number, 
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('nome') nome?: string,
        @Query('curso') curso?: string,
        @Query('orderBy') orderBy?: string,
        @Query ('orderDirection') orderDirection?: 'asc' | 'desc', 
        ){
        return this.alunosService.findPagefilter(page, limit, nome, curso);
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Obter detalhes de um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Detalhes do aluno retornados com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado',
    })
    findOne(@Param('id') id: string){
        return this.alunosService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Atualizar informações de um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Informações do aluno atualizadas com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado',
    })
    update(@Param('id') id: string, @Body() updateAlunoDto : UpdateAlunoDto){
        return this.alunosService.update(id, updateAlunoDto);
    }

    @Delete(":id")
    @ApiOperation({
        summary: 'Remover um aluno específico',
    })
    @ApiResponse({
        status: 200,
        description: 'Aluno removido com sucesso',
    })
    @ApiResponse({
        status: 404,
        description: 'Aluno não encontrado',
    })
    remove(@Param('id') id: string){
        return this.alunosService.remove(id);
    }
}