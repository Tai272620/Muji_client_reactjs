import axios from "axios";

export default {
    findCart: async (userId) => {
        return await axios.get(
            `${process.env.REACT_APP_SERVER_HOST_API}/purchase/${userId}`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
    },
    deleteProductFromCart: async (product_id) => {
        return await axios.delete(
            `${process.env.REACT_APP_SERVER_HOST_API}/purchase/${product_id}`
        )
    },
    addToCart: async (userId, data) => {
        return await axios.post(
            `${process.env.REACT_APP_SERVER_HOST_API}/purchase/${userId}`,
            data,
            {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            },
        );
    },
    updateCart: async (user_id, data) => {
        return await axios.patch(
            `${process.env.REACT_APP_SERVER_HOST_API}/purchase/${user_id}`,
            data,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        )
    },
};
