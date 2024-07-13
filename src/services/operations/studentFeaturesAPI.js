import toast from "react-hot-toast"
import { apiConnector } from '../apiConnector'
import { studentEndpoints } from '../apis'
import { clearCart } from "./cartAPI"
import { setCartItems } from "../../Slices/profileSlice"


const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script")
        script.src = src

        script.onload = () => {
            resolve(true)
        }

        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export const buyGame = async (token, games,total, user_details, navigate, dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            toast.error("Failed to load Razorpay SDK")
            return
        }

        const orderResponse = await apiConnector("POST", studentEndpoints.GAME_PAYMENT_API,{games,total}, {
            Authorization: `${token}`
        })

        console.log(orderResponse)

        if (!orderResponse.data.success)
            throw new Error(orderResponse.data.message)

        const options = {
            key: process.env.RAZORPAY_KEY,
            currency: orderResponse.data.data.currency,
            amount: `${orderResponse.data.data.amount}`,
            order_id: orderResponse.data.data.id,
            name: "PlayHaven",
            description: "Thank you for Purchasing the Game.",
            image: '/logo.png',
            prefill: {
                name: `${user_details.firstName} ${user_details.lastName}`,
                email: user_details.email,
            },
            handler: function (response) {
                sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
                verifyPayment({ ...response,games }, token, navigate, dispatch)
            },
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        paymentObject.on("payment.failed", function (response) {
            toast.error("Payment Failed.")
            console.log(response.error)
        })
    }

    catch (error) {
        console.log(error)
        toast.error("Payment Failed")
    }
    toast.dismiss(toastId)
}

const sendPaymentSuccessEmail = async (response, amount, token) => {
    try {
        console.log(response.razorpay_payment_id)
        await apiConnector("POST", studentEndpoints.SEND_PAYMENT_SUCCESS_EMAIL_API, {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount
        }, {
            Authorization: `${token}`
        })
    } catch (error) {
        console.log(error)

    }
}

const verifyPayment = async (bodyData, token, navigate, dispatch) => {
    const toastId = toast.loading("Verifying Payment...");
    try {
        const response = await apiConnector("POST", studentEndpoints.GAME_VERIFY_API, bodyData, {
            Authorization: `${token}`
        })
        console.log(response)

        if (!response.data.success)
            throw new Error(response.data.message)

        toast.success("Payment Successfull")
        navigate("/")
        clearCart(token)
        dispatch(setCartItems(0))
    }
    catch (error) {
        console.log(error)
        toast.error("Payment Failed")
    }
    toast.dismiss(toastId)
}