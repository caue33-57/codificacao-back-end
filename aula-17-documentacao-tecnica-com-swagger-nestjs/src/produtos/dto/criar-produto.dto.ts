import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutosDto{
    
    //!nome do produto
    @ApiProperty({
example:'cafe Grao de ouro 500g',
description:'Nome comercial do produto cadastrado.'
    })
    
    nome:string;
    
    //!preco do produto
@ApiProperty({
example:9.99,
description: 'preco unirtario do produto'
    })
    
    //!genero do produto
@ApiProperty({
example:'alimentos',
description: 'Categoria do produto'
    })
    
    categoria:string;
}