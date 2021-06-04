import axios from "axios";
import {_apiBase, API_KEY} from "../constants";

export const authInstance = axios.create({
    withCredentials: true,
    baseURL: _apiBase
});

export const baseInstance = axios.create({
    withCredentials: true,
    baseURL: _apiBase,
    headers: {
        "API-KEY": API_KEY
    }
});

