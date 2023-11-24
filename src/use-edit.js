import { useState } from "react";

export default function useEdit() {
    const [isEditing, setIsEditing] = useState(false);
    const [editedType, setEditedType] = useState(null);
    const [editedId, setEditedId] = useState(null);

    const showEditingPanel = (type, id) => {
        console.log('id: ', id);
        setIsEditing(true);
        setEditedType(type);
        setEditedId(id)
    }

    const hideEditingPanel = () => {
        setIsEditing(false);
        setEditedType(null);
        setEditedId(null);
    }

    return {
        isEditing,
        editedType,
        editedId,
        showEditingPanel,
        hideEditingPanel
    }

}