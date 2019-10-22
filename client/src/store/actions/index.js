import axios from 'axios';

export const VALIDATE_LOGIN = "auth:validateLogin";
export const VERIFY_LOGIN = "auth:verifyLogin";

export const validateLoginAsync = (payload) => ({
    type: VALIDATE_LOGIN,
    payload: payload
});

export const validateLogin = (payload) => (
    (dispatch, getState) => {
        // query data from mysql server here using async call
        console.log(payload);
        axios.post('/api/users', {user: payload.pseudo}).then((fetchedData) => {
            const {auth} = getState();
            console.log("state: ", auth);
            console.log("data: ", fetchedData);
            dispatch(validateLoginAsync(fetchedData));
        })
    }
);
