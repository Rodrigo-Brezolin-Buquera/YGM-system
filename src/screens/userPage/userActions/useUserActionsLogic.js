import { useEffect, useState } from "react"

export const useUserActionsLogic = (contract) => {
      const [view, setView] = useState("classes")
      const [renderContract, setRenderContract] = useState({})

      useEffect(()=>{
        setRenderContract(contract)
      }, [contract] )

    const handleView = () => {
        view === "classes" ? setView("actions") : setView("classes")
    }

return {view, handleView, renderContract}
}

