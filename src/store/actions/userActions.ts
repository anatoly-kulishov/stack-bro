import axios from "axios";
import {_apiBase} from "../../constants";
import {USER_REQUEST} from "../types";

export function fetchUserData(id: number) {
    console.log(`selectUser(${id})`);
    return async (dispatch: any) => {
        try {
            axios.get(`${_apiBase}/joblinkusers/${id}`)
                .then((response) => {
                    const userData = response.data;


                    dispatch({
                        type: USER_REQUEST,
                        payload: userData
                    })
                })
                .catch((error) => console.log(error));
        } catch (e) {
            console.error(e)
        }
    }
}