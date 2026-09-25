import { Module } from "@nestjs/common";
import { ImagemController } from "./imagem.controller.js";

@Module({
    controllers: [ImagemController],
})

export class ImagemModule {}