import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { AlunosService } from "./alunos/alunos.service.js";
import { faker } from '@faker-js/faker/locale/pt_BR';

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const alunosService = app.get(AlunosService);

    console.log('🌱 Iniciando a Geração de Faker Alunos...');

    const cursosDisponiveis = [
        'Programador Full-Stack',
        'Panificação',
        'Eletricista Predial',
        'Excel Básico',
        'Power BI Básico',
        'Apresentações Criativas no Canva',
        'Corte e Costura',
        'Técnico em Biotecnoloiga',
        'Técnico em Informática',
        'Técnico em Desenvolvimento de Jogos Digitais',
        'Técnico em Manutenção e Suporte em Informática'
    ];

    for( let i = 0; i < 150; i++){
        const cursosAleatorios = faker.helpers. arrayElements(cursosDisponiveis,{min: 1, max: 3});
        const alunoFaker = {
            nome: faker.person.fullName(),
            idade: faker.number.int({
                min:16,
                max:65,
            }),
            matricula: faker.string.numeric(5),
            cursos: cursosAleatorios,
            ativo:true,
        }
        try{
            await alunosService.create(alunoFaker);
        } catch(error){
            console.log(`Pular: Erro ao Criar Matrícula para ${alunoFaker.nome}! - Matrícula Duplicada`);
        }
    }
    console.log('✅ Banco de Dados Populado com Sucesso!');
    console.log('Feliz Natal🎅');

    await app.close();
}
bootstrap();