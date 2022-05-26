import React, { useEffect } from 'react'
import Header from '../../components/headerUser/HeaderUser'
import UserInfo from '../../components/userInfo/UserInfo'
import { MainContainer, CentralContainer, SideContainer } from './styled'
import { useHistory } from "react-router-dom";
import ClosedPlansInfo from '../../components/closedPlansInfo/ClosedPlansInfo';
import CheckinsDone from '../../components/checkinsDone/CheckinsDone';
import AvailableClasses from '../../components/availableClasses/AvailableClasses';
import { useProtectedPageStudent } from '../../hooks/useProtectedPageStudent'


const UserPage = () => {
    useProtectedPageStudent()
    const history = useHistory()
   

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <Header history={history} />
            <MainContainer>

                <SideContainer>
                    <AvailableClasses />
                </SideContainer>

                <CentralContainer>
                    {/* {user && user.plans && user.plans.length &&
                        <UserInfo
                            id={user.id}
                            name={user.name}
                            type={user.plans[0].type}
                            frequency={user.plans[0].frequency}
                            planStarted={user.plans[0].planStarted}
                            planEnds={user.plans[0].planEnds}
                            totalClasses={user.plans[0].totalClasses}
                            avaliableClasses={user.plans[0].avaliableClasses}
                        />} */}

                    <ClosedPlansInfo 
                    //user={user} 
                    />
                </CentralContainer>

                <SideContainer>
                    {/* {user && user.plans && user.plans.length && <CheckinsDone user={user} />} */}
                </SideContainer>
            </MainContainer>
        </div>
    )
}

export default UserPage
