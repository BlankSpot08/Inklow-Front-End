import axios from "axios";

export default function makeGetUser({ token }) {
    const headers = { Authorization: `Bearer ${token}` }

    return async function getUser() {
        return axios.post('user', null, {
            headers
        })
    }
}