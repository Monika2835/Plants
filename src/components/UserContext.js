import React, {createContext, useState} from 'react';

export const UserContext = createContext(); 

export const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        login: false,
        userId: -1,
        email: "",
    });

    return (
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

