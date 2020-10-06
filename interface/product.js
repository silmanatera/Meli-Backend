import { AuthorInterface } from './author';

export class ProductInterface {
    /**
     * Function to transform item list result
     * @param {object} itemsResult
     */
    static async transformResponse(itemsResult) {
        const categories = [];
        const items = [];

        itemsResult.forEach(element => {
            categories.indexOf(element.category_id) === -1 ?
                categories.push(element.category_id) :
                null;

            const price = ProductInterface.getPrice(element);
            items.push({
                id: element.id,
                title: element.title,
                price,
                picture: element.thumbnail,
                condition: element.condition,
                free_shipping: element.shipping.free_shipping,
                address: element.address.state_name
            })

        });

        return {
            author: AuthorInterface.transformResponse(),
            categories,
            items
        }

    }

    /**
     * Function to transform item detail result
     * @param {object} detail
     * @param {object} description
     */
    static async transformDetailResponse(detail, description) {
        // const items = [];
        const price = ProductInterface.getPrice(detail);

        const items = {
            id: detail.id,
            title: detail.title,
            price,
            picture: detail.pictures[0].url,
            condition: detail.condition,
            free_shipping: detail.shipping.free_shipping,
            sold_quantity: detail.sold_quantity,
            description: description.plain_text
        };

        return {
            author: AuthorInterface.transformResponse(),
            items
        }

    }

    /**
     * Function to transform the price
     * @param {object} item
     */
    static getPrice(item) {
        const { price, currency_id } = item;

        const integerPart = Math.floor(price);
        const decimalPart = parseInt((price % 1).toFixed(2).substring(2))

        return {
            currency: currency_id,
            amount: integerPart,
            decimals: decimalPart
        }
    }

}