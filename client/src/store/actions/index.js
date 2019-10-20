export const VALIDATE_LOGIN = "auth:validateLogin";
export const VERIFY_LOGIN = "auth:verifyLogin";

export const validateLogin = (payload) => ({
    type: VALIDATE_LOGIN,
    payload: payload
});

export const verifyLogin = ({username, password}) => (dispatch => {
    // put some async task here
    /*
    * TODO : - replace timeout function by database query */
    setTimeout(() => {
        validateLogin();
    })
});
