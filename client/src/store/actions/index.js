import axios from "axios";
import {VALIDATE_LOGIN, ERROR_LOGIN, VERIFYING_LOGIN} from "../const/constants";


export const validateLoginAsync = payload => ({
    type: VALIDATE_LOGIN,
    payload: payload
});

export const verifyLoginAsync = payload => ({
    type: VERIFYING_LOGIN,
    payload: payload
});

export const errorLogin = payload => ({
    type: ERROR_LOGIN,
    payload: payload
});

export const validateLogin = payload => {
    return (dispatch, getState) => {
        dispatch(verifyLoginAsync(payload));
        axios({
            method: "post",
            url: "/auth/login",
            data: {
                pseudo: payload.pseudo,
                password: payload.password
            }
        }).then( responseData => {
            if (responseData.status !== 200){
                const message = responseData.data.message;
                dispatch(errorLogin({message}));
            }
            else {
                const token = responseData.headers["auth-token"];
                localStorage.setItem('token', token);
            }
            dispatch(validateLoginAsync(responseData.data.message));
        }).catch(err => {
            console.log({err});
        });
    };
};
