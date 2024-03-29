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

    return (
        <ContainerCenter>
            <PageContainer>
                로그인 후 보이는 마이 페이지
            </PageContainer>
        </ContainerCenter>
    );
};