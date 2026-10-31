import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AlunoDocument = HydratedDocument<Aluno>;

@Schema()
export class Aluno {
    @Prop({ 
        required: true })
    nome: string;

    @Prop({ 
        required: true })
    idade: number;

    @Prop({ 
        required: true,
        unique:true
    })
    matricula: string;

    @Prop([String])
    cursos: string[];
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);