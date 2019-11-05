import axios from "axios";

export const VALIDATE_LOGIN = "auth:validateLogin";
export const VERIFY_LOGIN = "auth:verifyLogin";

export const validateLoginAsync = payload => ({
    type: VALIDATE_LOGIN,

    payload: payload
});

export const validateLogin = payload => {
    return (dispatch, getState) => {
        axios.post("/api/users", { user: payload.pseudo }).then(fetchedData => {
            const { auth } = getState();
            console.log("state: ", auth);
            console.log("data: ", fetchedData);
            dispatch(validateLoginAsync(fetchedData));
        });
    };
};
