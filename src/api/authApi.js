import {axiosInstance} from "./axiosInstance";

export const AuthAPI = {
    getAuth() {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}