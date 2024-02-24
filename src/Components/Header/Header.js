import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../Container/StyledImg';
import CustomColumn from '../Container/CustomColumn';
import CustomCenter from '../Container/CustomCenter';

const HeaderContainer = styled.header`
position: fixed;
top: 0;
width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 70%;
    padding: 10px;

    background-color: transparent;
    color: white;

    border-bottom: 2px solid transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 그라데이션 그림자 효과 */

    transition: border-color 0.3s ease; /* 부드러운 효과를 위한 트랜지션 설정 */
`;

const HeaderButton = styled.button`
background-color: transparent;
font-size: 10px;
font-family: 'RIDIBatang';
color: orange;
text-align: center;
justify-content: center;
border: none;
`;

export default function Header() {

    const navigate = useNavigate();

    const Back = () => {
        navigate('/');
    }

    const SignIn = () => {
        navigate('/login');
    }

    const MyPage = () => {
        navigate('/mypage');
    }

    return (
        <HeaderContainer>
            <StyledImg src={'logo.png'} width='30px' height='30px' onClick={Back} />
            <HeaderButton onClick={SignIn}>LOGIN</HeaderButton>
        </HeaderContainer>
    );
};