import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage} from 'multer';
import { v4 as uuidv4} from 'uuid';
import { extname } from "path";


@Controller('imagem')
export class ImagemController {
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file',{
            storage:diskStorage({
                destination: '/uploads',
                filename: (req, file, callback) =>{
                    const nomeArquivo = `${uuidv4()}${extname(file.originalname)}`;
                    callback(null, nomeArquivo);
                },
            }),
            limits:{
                fileSize: 2 * 1024 * 1024
            },
            fileFilter:(req, file, callback) =>{
                if(!file.mimetype.match(/\/(jgp|jpeg|png|gif|webp)$/)){
                    return callback(
                        new BadRequestException('Apenas arquivos jpg, jpeg, png, gif e webp são suportados!'),
                        false,
                    );
                    callback(null, true);
                }
            }
        }),
    )
    uploadFile(@UploadedFile()file: Express.Multer.File){
        if(!file){
            throw new BadRequestException('Nehum arquivo enviado.');
        }
        return{
            filename:file.filename,
            size:file.size,
            url:`http://localhost:3000/api/uploads/${file.filename}`
        };
    }
}