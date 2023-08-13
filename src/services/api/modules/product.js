import axios from "axios";

export default {
    findProductById: async (id) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products/` + id)
    },
    findAllProducts: async () => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products`)
    },
    findByCategoryId: async (category_id) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products/categories/` + category_id)
    },
    search: async function (searchString) {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products?search=${searchString}`)
    },
    update: async function (productId, formData) {
        return await axios.patch(
            `${process.env.REACT_APP_SERVER_HOST_API}/products/${productId}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
        );
    },
}