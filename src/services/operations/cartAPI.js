import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector"
import { cartEndpoints } from "../apis"


export const addToCart = async (game, token, dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", cartEndpoints.ADD_CART_API, { game }, {
            Authorization: `${token}`,
        })

        console.log(response);

        toast.success(response.data.message)

    } catch (error) {
        console.log(error)
    }
    toast.dismiss(toastId)
}

export const removeFromCart = async (token) => {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", cartEndpoints.REMOVE_CART_API, {}, {
            Authorization: `${token}`
        })
        console.log(response);

        toast.success(response.data.message)
    } catch (error) {
        console.log(error)
    }
    toast.dismiss(toastId)
}

export const clearCart = async (token) => {
    try {
        const response = await apiConnector("POST", cartEndpoints.RESET_CART_API, {}, {
            Authorization: `${token}`
        })
        console.log(response)

    } catch (error) {
        console.log(error)
    }
}

export const getGames = async (token) => {
    try {
        const response = await apiConnector("GET", cartEndpoints.GET_CART_API, {}, {
            Authorization: `${token}`
        })
        console.log(response)
        return response.data.games

    } catch (error) {
        console.log(error)
    }
}

export const getTotalGames = async (token) => {
    try {
        const response = await apiConnector("GET", cartEndpoints.GET_TOTAL_GAMES_API, {}, {
            Authorization: `${token}`
        })
        console.log(response)
        return response.data.total
        
    } catch (error) {
        console.log(error)
    }

} 