import toast from "react-hot-toast"
import { setLoading, setUser } from "../../Slices/profileSlice";
import { profileEndpoints } from "../apis";
import { logout } from "./authAPI";
import { apiConnector } from "../apiConnector";


export const getUserDetails = (token, navigate) => {
    return async (dispatch) => {
        dispatch(setLoading(true));

        try {
            const response = await apiConnector("GET", profileEndpoints.GET_USER_DETAILS_API, null, {
                Authorization: `${token}`,
            })

            console.log(response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            dispatch(setUser(response.data.userDetails));

        } catch (error) {
            dispatch(logout(navigate))
            console.log(error)
        }
        dispatch(setLoading(false))
    }
}