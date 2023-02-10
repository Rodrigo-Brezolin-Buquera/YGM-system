import {Text} from "@chakra-ui/react";
import React from "react";
import { CheckinCardCont } from "./styled";

const CheckinCard = ({checkin}) => {
   
    return (
        <CheckinCardCont>
            <Text as="b" > {checkin.date}</Text>    
        </CheckinCardCont>
    );
};

export default CheckinCard;
