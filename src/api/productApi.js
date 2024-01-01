import axios from "axios"

let tokens = JSON.parse(localStorage.getItem("tokens"));
console.log(tokens)


export const instanceWithToken = axios.create({
    baseURL: "http://206.189.103.20:8000/",
    headers: {
        Authorization: `Bearer ${tokens?tokens.access:{}}`
    }
})


export const postProduct = async (obj) => {
    try {
        console.log(obj)
        const res = await instanceWithToken.post("owner/products/", obj)
        console.log(res)
        return res

    } catch (error) {
        throw error
    }
}

export const getAllProducts = async () => {
    try {
        const res = await instanceWithToken.get("owner/products/")
        return res
    } catch (error) {
        throw error
    }
}
export const getProductById = async (id) => {
    try {
        const res = await instanceWithToken.get(`owner/products/${id}/`)
        return res
    } catch (error) {
        throw error
    }
}

export const deleteProductApi = async (id) => {
    try {
        const res = await instanceWithToken.delete(`owner/products/${id}/`)
        return res
    } catch (error) {
        throw error
    }
}

export const putProductApi = async (id, obj) => {
    try {
        const res = await instanceWithToken.put(`owner/products/${id}/`, obj)
        return res
    } catch (error) {
        throw error
    }
}

export const searchProduct = async (text) => {
    try {
        const res = await instanceWithToken.get(`search/?search=${text}`)
        return res
    } catch (error) {
        throw error
    }
}