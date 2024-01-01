import { instanceWithToken } from "./productApi";

export const getCategoriesMain = async () => {
    try {
        const res = await instanceWithToken.get("categories/")
        return res
    } catch (error) {
        throw error
    }
}

export const getCategoryIdMain = async (id) => {
    try {
        const res = await instanceWithToken.get(`categories/${id}/`)
        return res
    } catch (error) {
        throw error
    }
}

export const getProductCategory = async (searchText) => {
    try {
        const res = instanceWithToken.get(`${searchText}/products/`)
        return res
    } catch (error) {
        throw error
    }
}

export const getProductForOrder = async (id) => {
    try {
        const res = instanceWithToken.get(`products/${id}/`)
        return res
    } catch (error) {
        throw error
    }
}

export const customerOrder = async (obj) => {
    try {
        const res = instanceWithToken.post("customer-order/", obj)
        return res
    } catch (error) {
        throw error
    }
}