import AxiosClient from "./axiosClient";

const AuthAPI = {
    signup(data) {
        const url = `/signup`;
        return AxiosClient.post(url, data, {
            headers: { "Content-Type": "application/json; charset=utf-8" }
        })
    },
    signin(data) {
        const url = `/signin`;
        return AxiosClient.post(url, data, {
            headers: { "Content-Type": "application/json; charset=utf-8" }
        })
    },
    signout() {
        const url = `/signout`;
        return AxiosClient.get(url)
    }
}
export default AuthAPI;