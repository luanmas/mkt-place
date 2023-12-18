import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';

export default class ProductsController {
    public async store({request , response} : HttpContextContract) {
        const body = request.body();

        const product = await Product.create(body);
        response.status(201);

        return {
            message: "Seu produto foi criado com sucesso!",
            data: product
        }
        
    }

    public async index() {
        const products = await Product.all();

        return {
            data: products
        }
    }

    public async show({params} : HttpContextContract) {
        const product = await Product.findOrFail(params.id);

        return {
            data: product
        }
    }
    
    public async destroy({params} : HttpContextContract) {
        const product = await Product.findOrFail(params.id);

        await product.delete();

        return {
            message: "Produto excluído com sucesso!",
            data: product
        }
    }

    public async update({params, request} : HttpContextContract) {
        const body = request.body(); // mudanças vindas da requisição
        const product = await Product.findOrFail(params.id); // informações atuais do produto

        product.product_name = body.product_name;
        product.product_description = body.product_description;
        product.product_price = body.product_price;

        await product.save();

        return {
            message: "Produto atualizado com sucesso!",
            data: product
        }
    }
}
