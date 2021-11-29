import React from 'react'
import { Text,  View } from 'react-native'
import styled from "styled-components/native";

const CenteredView = styled.View`
    display: flex;
    align-items: center;
    margin-top: 32px;
`


export const StartScreen = () => {

    return (
        <CenteredView>
            <Text>This is the StartScreen</Text>
        </CenteredView>

    )
}
