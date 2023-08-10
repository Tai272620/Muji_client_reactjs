import axios from "axios";

export default {
    findProductById: async (id) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products/` + id)
    },
    findAllProducts: async () => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products`)
    },
    findByCategory: async (category_id) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/categories/` + category_id)
    },
    search: async function (searchString) {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products?search=${searchString}`)
    }
}