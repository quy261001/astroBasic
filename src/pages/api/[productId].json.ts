import type { APIRoute } from "astro";

const getProduct = (product: number) => {
    const products = ["agua", "Leche", "Queso"]
    return products[product]
}

export const get: APIRoute = ({params, request}) => {
    const productId = params.productId
    const product = getProduct(productId);

    if(!product) {
        return new Response(null, {
            status: 400,
            statusText: "Not found"
        })
    }

    return new Response(JSON.stringify(product), {
        status: 200,
        statusText: 'OK',
        headers: {
            'content-Type': "application/json"
        }
    })
}
