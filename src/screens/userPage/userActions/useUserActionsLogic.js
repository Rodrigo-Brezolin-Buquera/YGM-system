import {  useState } from "react"

export const useUserActionsLogic = () => {
    const [view, setView] = useState("classes")

    const handleView = () => {
        view === "classes" ? setView("actions") : setView("classes")
    }

    return {view, handleView}
}

