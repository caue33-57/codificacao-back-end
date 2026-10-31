import { Controller,
         Get, 
         Post, 
         Body, 
         Patch, 
         Param, 
         Delete} from '@nestjs/common';
import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/updte-aluno.dto.js';
import { create } from 'domain';



@Controller('alunos')
export class AlunosController {
   constructor(private readonly alunosService: AlunosService){}

   @Post()
    create(@Body()createAlunoDto: CreateAlunoDto){
        return this.alunosService.create(createAlunoDto);
    }

    @Get()
    findAll(){
        return this.alunosService.findAll();
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