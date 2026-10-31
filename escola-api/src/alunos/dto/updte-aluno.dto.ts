import { IsString, IsNotEmpty, IsInt, Min, IsArray, ArrayMinSize, } from "class-validator";






export class UpdateAlunoDto {
    @IsString()
    @IsNotEmpty({
        message: 'O nome e obrigatorio e nao pode estar vazio!'
    })
    nome: string;

    @IsInt({
        message:' A idade deve ser um numero inteiro'
    })
    @Min(0,{
        message: 'a idade nao pode ser negativa.'
    })
    idade: number;
    @IsString()
    @IsNotEmpty({
        message: 'A matricula e obrigatoria'   
    })
    matricula: string;

    @IsString({each: true, message: 'cada curso deve ser um texto'})
    @IsArray()
    @ArrayMinSize(1,{
        message: ' o aluno deve estar matriculado em pelo menos um curso'
    })
    cursos: string[];

}