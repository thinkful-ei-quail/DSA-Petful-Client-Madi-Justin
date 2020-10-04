import React from 'react';

const AppContext = React.createContext({
    pets: {},
    adopters: [],
})

export default AppContext;