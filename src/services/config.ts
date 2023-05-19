import axios from "axios"
import * as SecureStore from "expo-secure-store"
export const BASE_URL = "http://localhost:1337/"
// export const BASE_URL = "https://production-blossom-app.onrender.com/"

const TIME_OUT = 30000
export const BLOSSOM_TOKEN_NAME = "blossom_user_token"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value)
  } catch (error) {
    console.log("error in saveToken", error)
    throw error
  }
}

axiosInstance.interceptors.request.use(async (req) => {
  try {
    const access_token = await SecureStore.getItemAsync(BLOSSOM_TOKEN_NAME)
    req.headers.Authorization = access_token
    return req
  } catch (error) {
    return req
  }
})

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data)

export default axiosInstance
