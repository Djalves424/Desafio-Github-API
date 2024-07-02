import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findByProfile(username: string) {
    return axios.get(`${BASE_URL}/users/${username}`);
}