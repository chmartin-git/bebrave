import {VALIDATE_LOGIN} from "../actions";

const initState = {
    isLogged: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case VALIDATE_LOGIN:
            return {
                ...state,
                isLogged: true
            };
        default:
            return state;
    }
};

export default authReducer;
