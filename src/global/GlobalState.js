import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const GlobalState = (props) => {
    const [users, setUsers] = useState([])
    const [classes, setClasses] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [newRender, setNewRender] = useState(false)


    const setters = {
        setUsers,
        setClasses,
        setLoading,
        setCurrentUser,
        setAdmin,
        setNewRender
    }

    const states = {
        users,
        classes,
        loading,
        currentUser,
        admin,
        newRender

    }

    return (
    <GlobalStateContext.Provider value={{ setters, states }} >
        {props.children}
    </GlobalStateContext.Provider>
    )
};

export default GlobalState;
