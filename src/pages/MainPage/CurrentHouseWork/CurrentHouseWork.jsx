import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  width: 100%;
  min-height: 100vh;
`

const PageContainer = styled(ContainerCenter)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    gap: 10px;
    position: relative;
`

// 기본 버튼 디자인
const BasicButton = styled.button`
width: ${props => props.width || '20%'};
height: ${props => props.height || '5vh'};
border: none;
background-color: orange;
border-radius: 10px;
color: white;
font-family: 'RIDIBatang';
font-size: 10px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export default function Component() {

    const navigate = useNavigate();

    const Write = () => {
        navigate('/writehousework');
    };

    const Divide = () => {
        navigate('/dividehousework');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                여기는 집안일 현황 페이지
                <BasicButton onClick={Write} width='30%'>집안일 입력하기</BasicButton>
                <BasicButton onClick={Divide} width='30%'>집안일 분배하기</BasicButton>
                <BasicButton width='30%'>집안일 수정하기</BasicButton>
            </PageContainer>
        </ContainerCenter>
    );
};