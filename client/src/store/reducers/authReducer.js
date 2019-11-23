import {VALIDATE_LOGIN, ERROR_LOGIN, VERIFYING_LOGIN} from "../const/constants";

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
                isLogged: true,
                isLoading: false
            };
        case ERROR_LOGIN:
            return {
                ...state,
                isLogged: false,
                isLoading: false,
                hasError: action.payload
            };
        case VERIFYING_LOGIN:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};

export default authReducer;
