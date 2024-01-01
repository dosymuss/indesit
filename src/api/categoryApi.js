import { instanceWithToken } from "./productApi";

export const getCategories = async () => {
    try {
        const res = await instanceWithToken.get("owner/categories/")
        return res
    } catch (error) {
        throw error
    }
}

export const getCategoryById = async(id)=>{
    try {
        const res = await instanceWithToken.get(`owner/categories/${id}/`)
        return res
    } catch (error) {
        throw error
    }
}

export const deleteCategoryApi = async (id) => {
    try {
        const res = await instanceWithToken.delete(`owner/categories/${id}/`)
        return res
    } catch (error) {
        throw error
    }
}

export const postCategory = async (obj) => {
    try {
        const res = await instanceWithToken.post("owner/categories/", obj)
        return res
    } catch (error) {
        throw error
    }
}


export const changeCategoryApi = async (id, text) => {
    try {
        const res = await instanceWithToken.put(`owner/categories/${id}/
        `, {
            title: text
        })
        return res
    } catch (error) {
        throw error
    }
}