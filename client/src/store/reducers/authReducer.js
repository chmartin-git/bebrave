import {VALIDATE_LOGIN} from "../actions";

const initState = {
    isLogged: false
};

const authReducer = (state = initState, action) => {
    console.log(action.type);
    switch (action.type) {
        case VALIDATE_LOGIN:
            console.log(action.payload);
            return {
                ...state,
                isLogged: true
            };
        default:
            return state;
    }
};

export default authReducer;
