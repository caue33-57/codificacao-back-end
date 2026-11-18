import { Prop, 
         Schema, 
         SchemaFactory } from '@nestjs/mongoose';
 import { HydratedDocument } from 'mongoose';

 export type AlunoDoc = HydratedDocument<Aluno>;

 @Schema({
  timestamps: true,
 })
 export class Aluno {
    @Prop({ 
      type: String,
      required: true
     })
    nome!: string;


    @Prop({ 
      type: Number,
      required: true     
    })
    idade!: number;

    @Prop({ 
      type: String,
      required: true,
      unique:true
 })  
    matricula!: string;

   @Prop({
    type: [String],
    required: true,
   })
    cursos!: string[];

    
    @Prop({ 
      type: Boolean,
      default: true,
    })
    ativo!: boolean;
    
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);