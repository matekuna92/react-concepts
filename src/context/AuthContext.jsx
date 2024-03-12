import { createContext, useReducer } from "react";

const initialState = { user: null, isLoggedIn: false };

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload, isLoggedIn: true };
        case 'LOGOUT':
            return { user: null, isLoggedIn: false };
        default:
            return initialState;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    console.log("AuthContext state: ", state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}