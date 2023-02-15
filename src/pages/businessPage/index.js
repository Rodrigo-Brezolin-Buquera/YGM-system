import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { Background } from "../../theme";
import {Local}  from "./Local";
import {Plans} from "./Plans";

const BusinessPage = () => {
    const navigate = useNavigate();
   
    return (
        <>
            <HeaderAdmin navigate={navigate} />
            <Background>
                <Local/>
                <Plans/>
            </Background>
        </>
    )
}

export default BusinessPage