import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        cart: [],
        purchases: [],
        cartOpen: false,
        city: []
    });

    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

export const AuthContext = React.createContext({
    isAdmin: false,
    token: null,
    setLoggedIn: () => {},
    setIsAdmin: () => {},
});

export const useAuth = () => {
    return React.useContext(AuthContext);
};