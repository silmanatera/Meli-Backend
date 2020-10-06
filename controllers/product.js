// import Axios from "axios";
import { ProductService } from '../services/product.service';

export class ProductController {

    static async productDetail(req, res) {
        const id = req.params.id;
        let product = await ProductService.getProductDetails(id);

        if (!product) {
            return res.status(200).json({
                ok: false,
                msg: `no se encontraron resultados para ${ id }`,
                response: []
            })
        }

        console.log(product)
        res.status(200).json({
            ok: true,
            msg: `Resultados encontrad(o)s para "${ id }"`,
            response: product
        })
    };

    static async productQuery(req, res) {

        const search = req.query.q;
        let items = await ProductService.getProductList(search);

        if (!items) {
            return res.status(500).json({
                ok: false,
                msg: 'Problemas en el Servidor. Comuniquese con soporte tecnico',
                response: []
            })
        }
        if (items.items.length == 0) {
            return res.status(200).json({
                ok: true,
                msg: `no se encontraron resultados para ${ search }`,
                response: []
            })
        }

        res.status(200).json({
            ok: true,
            msg: `Resultados encontrad(o)s para "${ search }"`,
            response: items
        })
    }
}