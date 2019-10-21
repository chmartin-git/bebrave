export const VALIDATE_LOGIN = "auth:validateLogin";
export const VERIFY_LOGIN = "auth:verifyLogin";

export const validateLogin = (payload) => ({
    type: VALIDATE_LOGIN,
    payload: payload
});
