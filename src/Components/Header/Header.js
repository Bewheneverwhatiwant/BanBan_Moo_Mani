import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../Container/StyledImg';
import CustomColumn from '../Container/CustomColumn';
import CustomCenter from '../Container/CustomCenter';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;

    background-color: orange;
    color: white;
    gap: 10px;
`;

const Title = styled.h1`
font-size: 15px;
font-family: 'RIDIBatang';
color: white;
text-align: center;
`;

const Detail = styled.a`
font-size: 10px;
font-family: 'RIDIBatang';
color: white;
text-align: center;
`;

const CustomColumn2 = styled.div`
width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.gap || '30px'};
`;

export default function Header() {

    const navigate = useNavigate();

    const Back = () => {
        navigate('/');
    }

    return (
        <HeaderContainer onClick={Back}>
            <Title>반반무마니</Title>
        </HeaderContainer>
    );
};