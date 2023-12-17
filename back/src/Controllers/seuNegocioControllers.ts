import { z } from "zod";
import { Request , Response } from "express";

let db_test : any = [];

const productSchema = z.object({
    name_product: z.string().min(3 , {message : "O nome do produto tem que ter ao menos 3 caracteres"}),
    price_product: z.coerce.number().min(1 , {message : "O preço do produto não pode estar vázio"}),
    desc_product: z.string().optional(),
})

type Product = z.infer<typeof productSchema> 

export async function createProduct (req: Request , res: Response) {
    let name_product = req.body.name_product;
    let price_product = req.body.price_product;
    let desc_product = req.body.desc_product;
    let product : Product = {
        name_product,
        price_product,
        desc_product
    }    

    db_test.push(product);
    res.send(product);
    console.log(db_test);
}

export async function getAllProducts (req: Request , res: Response) {
    res.send(db_test);
}