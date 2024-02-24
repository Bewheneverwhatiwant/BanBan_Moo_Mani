import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../Components/Container/CustomRow';
import CustomColumn from '../../../Components/Container/CustomColumn';
import StyledImg from '../../../Components/Container/StyledImg';

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
height: ${props => props.height || '3vh'};
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

const Find = styled.button`
width: 30%;
border: none;
background-color: transparent;
color: #FFCE86;
font-family: 'RIDIBatang';
font-size: 12px;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: underline;
`;

const LogIn = styled.input`
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

const Detail = styled.a`
color: #949494;
font-family: 'RIDIBatang';
font-size: 10px;
`;

const Row = styled.div`
width: 100%;
align-items: center;
justify-content: center;
  display: flex;
  flex-direction: row;
  gap: ${props => props.gap || '30px'};
`;

const Column = styled.div`
width: 100%;
align-items: center;
justify-content: center;
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap || '30px'};
`;

export default function Component() {

    const navigate = useNavigate();

    const SignUp = () => {
        navigate('/signup');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <Column gap='50px'>

                    <StyledImg src='icon_chicken.png' width='30%' height='15vh' />

                    <Column gap='13px'>

                        <Column gap='13px'>
                            <LogIn placeholder="아이디를 입력하세요." />
                            <LogIn placeholder="비밀번호를 입력하세요." />

                            <Row gap='10px'>
                                <Find>아이디 찾기</Find>
                                <Find>비밀번호 찾기</Find>
                            </Row>
                        </Column>

                        <Row>
                            <Detail>아직 계정이 없으신가요?</Detail>
                            <BasicButton onClick={SignUp}>회원가입</BasicButton>
                        </Row>
                    </Column>
                </Column>
            </PageContainer>
        </ContainerCenter>
    );
};