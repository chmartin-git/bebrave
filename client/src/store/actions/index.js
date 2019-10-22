export const VALIDATE_LOGIN = "auth:validateLogin";
export const VERIFY_LOGIN = "auth:verifyLogin";

export const validateLoginAsync = (payload) => ({
    type: VALIDATE_LOGIN,
    payload: payload
});

export const validateLogin = (payload) => (
    (dispatch, getState) => {
        // query data from mysql server here using async call
        const asyncEx = new Promise((resolve, reject) => {
            fetch("/lien/vers/api").then(res => res.json()).then( res => resolve(res));
        });

        asyncEx.then((fetchedData) => {
            dispatch(validateLoginAsync(fetchedData));
        })
    }
);
