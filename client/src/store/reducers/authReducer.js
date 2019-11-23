import {VALIDATE_LOGIN, ERROR_LOGIN} from "../const/constants";

const initState = {
    isLoading: false,
    hasError: undefined,
    isLogged: false
};

const authReducer = (state = initState, action) => {
    console.log(action.type);
    switch (action.type) {
        case VALIDATE_LOGIN:
            return {
                ...state,
                isLogged: true
            };
        case ERROR_LOGIN:
            return {
                ...state,
                isLogged: false,
                hasError: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
