import React from 'react';

const AppContext = React.createContext({
    pets: [],
    adopters: [],
    getPets: () => {},
    getAdopters: () => {},
    removePet: () => {},
    removeAdopter: () => {}
})

export default AppContext;