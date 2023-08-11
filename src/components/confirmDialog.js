import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


const confirmDialog = async (text, handler) => {

    confirmAlert({
        title: text,
        buttons: [
            {
                label: "Sim",
                onClick: () => handler(),
                style: {
                    backgroundColor: "gold",
                    color: "black",
                    fontSize: "1.5em",
                    marginLeft: "70%"
                },
            }
        ]
    })

}

export default confirmDialog;