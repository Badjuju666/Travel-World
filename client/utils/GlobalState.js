import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        cart: [],
        tickets: [],
        cartOpen: false,
        cities: []
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