import { Text } from '@chakra-ui/react'
import React, { memo } from 'react'
import { CircularCard } from '../../theme'
import { simplifyDate } from '../../utils/dates'

const ColumnHeader = ({ date, day }) => {
    return (
        <>
            <Text fontWeight={"bold"} fontSize="xl"> {simplifyDate(date)} </Text>
            <CircularCard
                color={"brand.100"}
            >
                <Text color={"white"} fontSize="xl">{day}</Text>
            </CircularCard>
        </>

    )
}

export default  memo(ColumnHeader)