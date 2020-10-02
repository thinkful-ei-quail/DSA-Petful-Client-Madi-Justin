import React from 'react';

const AppContext = React.createContext({
    pets: [],
    getPets: () => {},
    getAdopters: () => {},
    removePet: () => {},
    removeAdopter: () => {}
    // removeStudent: () => {},
    // addStudent: () => {},
    // randomizeHouse: () => {},
    // getStudents: () => {}
})

export default AppContext;