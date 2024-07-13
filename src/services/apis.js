const BASE_URL = "https://play-haven-backend.adityanama.online/api/v1"

export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}


export const studentEndpoints = {
    GAME_PAYMENT_API: BASE_URL + "/payment/capturePayment",
    GAME_VERIFY_API: BASE_URL + "/payment/verifySignature",
    SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

export const cartEndpoints = {
    ADD_CART_API : BASE_URL + "/cart/addtocart",
    REMOVE_CART_API : BASE_URL + "/cart/removefromcart",
    RESET_CART_API : BASE_URL + "/cart/resetcart",
    GET_CART_API : BASE_URL + "/cart/getgames",
    GET_TOTAL_GAMES_API : BASE_URL + "/cart/gettotalgames"
}

export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}