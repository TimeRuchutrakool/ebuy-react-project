import { createContext, useReducer } from "react"


export const ModalContext = createContext()

const initialState ={
    form : undefined,
}
function reducer(state , action){
    switch (action.type) {
        case "close":
            return {...state, form: undefined}
        default:
          throw new Error("Unknown action")
    }
}

export function ModalContextProvider({children}){
    const [formModal, dispatch]=useReducer(reducer,initialState)
    return (
        <ModalContext.Provider
        value={{formModal,dispatch}}
        >
            {children}
        </ModalContext.Provider>
    )
}