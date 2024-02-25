import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomCenter from '../../Components/Container/CustomCenter';
import StyledImg from '../../Components/Container/StyledImg';

const Row = styled.div`
display: flex;
flex-direction: row;
align-itrns: center;
justify-content: flex-start;
gap: 10px;
width: 90%;
padding-left: 10%;
`;

const Title = styled.h1`
font-family: 'RIDIBatang';
font-size: 20px;
color: #949494;
`;

const Detail = styled.a`
font-family: 'RIDIBatang';
font-size: 13px;
color: #949494;
`;

const Banner = styled.div`
width: 90%;
min-height: 30vh;
padding: 10px;
gap: 10px;
border-radius: 20px;

display: flex;
flex-direction: column;
align-item: center;
justify-content: flex-start;

background-color: #E0CE8D;
`;

const SemiTitle = styled.a`
font-family: 'RIDIBatang';
font-size: 20px;
color: white;
`;

const MidColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
gap: 5px;
padding-left: 10%;
`;

const CircleStyledImg = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    border-radius: 50px;
`;

const MyTaskRow = styled.div`
display: flex;
flex-direction: row;
align-itrns: center;
justify-content: flex-start;
gap: 10px;
width: 100%;
`;

const TaskColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
min-height: 25vh;
gap: 10px;
`;

const Alarm = styled.a`
font-family: 'RIDIBatang';
font-size: 10px;
color: white;
`;

const TaskPlusButton = styled.button`
width: ${props => props.width || '20%'};
height: ${props => props.height || '5vh'};
border: none;
background-color: transparent;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
`;

export default function Component() {

    const navigate = useNavigate();

    const Write = () => {
        navigate('/writehousework');
    };

    return (
        <Banner>
            <MyTaskRow>
                <CircleStyledImg src={'icon_family_2.png'} width='30px' height='30px' />
                <CustomCenter>
                    <SemiTitle>오늘 가족의 집안일</SemiTitle>
                </CustomCenter>
            </MyTaskRow>

            <TaskColumn>
                <StyledImg src={'icon_warn.png'} width='30px' height='30px' />
                <Alarm>아직 초대된 가족이 없어요.</Alarm>
                <TaskPlusButton onClick={Write} width='40%'>
                    <StyledImg src={'icon_add.png'} width='20px' height='20px' />
                    가족 초대하러 가기
                </TaskPlusButton>
            </TaskColumn>
        </Banner>
    );
};