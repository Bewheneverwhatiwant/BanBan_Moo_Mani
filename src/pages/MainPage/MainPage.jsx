import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { OutletContext } from '../ForOutlet';
import StyledImg from '../../Components/Container/StyledImg';
import CustomCenter from '../../Components/Container/CustomCenter';

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
    justify-content: flex-start;
    top: 6vh;
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

background-color: #FFCE86;
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

  const Current = () => {
    navigate('/currenthousework');
  };

  const Rank = () => {
    navigate('/rankpage');
  }

  const Write = () => {
    navigate('/writehousework');
  };

  const setBackSetting = useContext(OutletContext);

  setBackSetting(true);

  return (
    <ContainerCenter>
      <PageContainer>
        <MidColumn>
          <Detail>치킨도, 집안일도</Detail>
          <Row>
            <CustomCenter>
              <Title>우리 가족은 반반무마니</Title>
            </CustomCenter>
            <StyledImg src={'icon_chicken.png'} width='50px' height='50px' />
          </Row>
        </MidColumn>
        <Banner>
          <MyTaskRow>
            <CircleStyledImg src={'icon_family.png'} width='30px' height='30px' />
            <CustomCenter>
              <SemiTitle>오늘 나의 집안일</SemiTitle>
            </CustomCenter>
          </MyTaskRow>

          <TaskColumn>
            <StyledImg src={'icon_warn.png'} width='30px' height='30px' />
            <Alarm>아직 등록된 집안일이 없어요.</Alarm>
            <TaskPlusButton onClick={Write} width='40%'>
              <StyledImg src={'icon_add.png'} width='20px' height='20px' />
              집안일 입력하기
            </TaskPlusButton>
          </TaskColumn>
        </Banner>
        <BasicButton onClick={Current} width='30%'>집안일 현황 보기</BasicButton>
        <BasicButton onClick={Rank} width='30%'>우리 가족의 랭크는?</BasicButton>
      </PageContainer>
    </ContainerCenter>
  );
};