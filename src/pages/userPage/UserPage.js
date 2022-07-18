import React, { useEffect } from 'react'
import Header from '../../components/headerUser/HeaderUser'
import UserInfo from '../../components/userInfo/UserInfo'
import { MainContainer, CentralContainer, SideContainer } from './styled'
import { useHistory } from "react-router-dom";
import ClosedPlansInfo from '../../components/closedPlansInfo/ClosedPlansInfo';
import CheckinsDone from '../../components/checkinsDone/CheckinsDone';
import AvailableClasses from "./components/availableClasses/AvailableClasses"
import { useProtectedPageStudent } from '../../hooks/useProtectedPageStudent'
import { useRequestData } from '../../hooks/useRequestData';

const UserPage = () => {
    // useProtectedPageStudent()
    const history = useHistory()
    const [contract, getContract] = useRequestData({}, `/contracts/user`)
    const [yogaClasses, getyogaClasses] = useRequestData([], "/calendar?today=true")

    useEffect(() => {
        getContract()
        getyogaClasses()
    }, [])
    console.log("contrato", contract.currentContract)
    return (
        <div>
            <Header history={history} />
            <MainContainer>

                <SideContainer>
                    <AvailableClasses
                        yogaClasses={yogaClasses}
                        contractId={contract.id}
                        checkins={contract?.currentContract?.checkins}
                    />
                </SideContainer>

                <CentralContainer>
                    {
                        contract.id &&
                        <UserInfo
                            id={contract.id}
                            name={contract.name}
                            plan={contract?.currentContract?.plan}
                            planStarted={contract?.currentContract?.started}
                            planEnds={contract?.currentContract?.ends}
                            availableClasses={contract?.currentContract?.availableClasses}
                        />
                    }

                    <ClosedPlansInfo
                        closedContracts={contract.closedContracts}
                    />
                </CentralContainer>

                <SideContainer>
                    {<CheckinsDone checkins={contract?.currentContract?.checkins} />}
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default UserPage
