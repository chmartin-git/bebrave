import axios from "axios";

export const VALIDATE_LOGIN = "auth:validateLogin";
export const ERROR_LOGIN = "auth:errorLogin";
export const VERIFY_LOGIN = "auth:verifyLogin";

export const validateLoginAsync = payload => ({
    type: VALIDATE_LOGIN,
    payload: payload
});

export const validateLogin = payload => {
    return (dispatch, getState) => {
        console.log(payload);
        axios({
            method: "post",
            url: "/auth/login",
            data: {
                pseudo: payload.pseudo,
                password: payload.password
            }
        }).then( responseData => {

            if (responseData.status !== 200){
                //create a dispatch event for bad connection
                const message = responseData.data.message;
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
