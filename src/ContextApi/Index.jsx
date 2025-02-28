import { createContext } from "react";

// **1) Creating context 
// We will use the name of the context whenever we want data via contextApi
export const BoiContext = createContext()




// 2) Passing data to provider(store) by wrapping
export const BioProvider = ({children}) => {

    // Data in our store
    const myName = "Anand Kumar"
    const myAge = 27
    console.log("Children :", children);
    
    // // For single data
    // return <BoiContext.Provider value={myName}>
    //     {children}
    // </BoiContext.Provider>

    // For Multiple data
    return <BoiContext.Provider value={{myName, myAge}}>
        {children}
    </BoiContext.Provider>

}