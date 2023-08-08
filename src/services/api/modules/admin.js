import axios from "axios";

export default {
    create: async (newProduct) => {
        return await axios.post(
            `${process.env.REACT_APP_SERVER_HOST_API}/products`, newProduct,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        )
            .then(res => res)
            .catch(err => err)
    },
}