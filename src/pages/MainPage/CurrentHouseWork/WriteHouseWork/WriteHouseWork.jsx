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

const HouseWork = styled.input`
border: 1px solid orange;
border-radius: 20px;

display:flex;
flex-direction: row;
align-items: center;
justify-content: center;

width: 80%;
height: 5vh;
padding-left: 10px;

&::placeholder {
  color: #FFCE86;
  font-family: 'RIDIBatang';
}
`;

export default function Component() {

    const navigate = useNavigate();

    return (
        <ContainerCenter>
            <PageContainer>
                집안일 입력 페이지
                <HouseWork placeholder='집안일을 입력해주세요.' />
                <BasicButton>+</BasicButton>
            </PageContainer>
        </ContainerCenter>
    );
};