import { createContext } from "react";


export const EditContext = createContext({
    editing: false,
    editedType: null,
    editedId: null,
    showEditingPanel: () => {},
    hideEditingPanel: () => {}
})

export const EditProvider = EditContext.Provider;