import type { APIRoute } from "astro";

export const get: APIRoute = ({params, request}) => {
    return {
        body: JSON.stringify({
            message: "GET Method!"
        })
    }
}

export const post: APIRoute = ({params, request}) => {
    return {
        body: JSON.stringify({
            message: "POST Method!"
        })
    }
}

export const del: APIRoute = ({params, request}) => {
    return {
        body: JSON.stringify({
            message: "DELETE Method!"
        })
    }
}

export const all: APIRoute = ({params, request}) => {
    return {
        body: JSON.stringify({
            message: `This was a ${request.method}`
        })
    }
}