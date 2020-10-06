import Axios from "axios";
import { ProductInterface } from '../interface/product';


export class ProductService {

    /**
     * Get list products
     * @param {string} query
     */
    static async getProductList(query) {
        const total = 4;
        try {

            const itemsResult = await Axios.get(process.env.baseURL + '/sites/MLA/search?q=' + query + '&limit=' + total)
                .then(response => response.data.results)
                .catch(error => {
                    throw new Error(`Error: ${ error }`);
                });

            return await ProductInterface.transformResponse(itemsResult)

        } catch (error) {
            console.log('ERROR : ' + error)
        }

    }

    /**
     * Request item
     * @param {srting}  id
     */
    static async getDetails(id) {
        return await Axios.get(process.env.baseURL + '/items/' + id)
    }

    /**
     * Request description
     * @param {srting}  id 
     */
    static async getDescription(id) {
        return await Axios.get(process.env.baseURL + '/items/' + id + '/description')
    }

    /**
     * Get product Details
     * @param {srting}  id 
     */
    static async getProductDetails(id) {
        try {
            const itemsResult = Promise.all([await ProductService.getDetails(id), await ProductService.getDescription(id)])
                .then(function(results) {
                    const itemDetail = results[0].data;
                    const itemDescription = results[1].data;
                    return ProductInterface.transformDetailResponse(itemDetail, itemDescription);
                }).catch(error => {
                    throw new Error(`Error: ${ error }`);
                });

            return itemsResult;

        } catch (error) {
            console.log('ERROR : ' + error)
        }

    }
}