import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { OutletContext } from '../ForOutlet';
import StyledImg from '../../Components/Container/StyledImg';
import CustomCenter from '../../Components/Container/CustomCenter';
import MyBanner from './MyBanner';
import FamilyBanner from './FamilyBanner';

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

const MidColumn = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
gap: 5px;
padding-left: 10%;
`;

export default function Component() {

  const navigate = useNavigate();

  const Current = () => {
    navigate('/currenthousework');
  };

  const Rank = () => {
    navigate('/rankpage');
  }

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

        <MyBanner />

        <FamilyBanner />

        <BasicButton onClick={Current} width='30%'>집안일 현황 보기</BasicButton>
        <BasicButton onClick={Rank} width='30%'>우리 가족의 랭크는?</BasicButton>
      </PageContainer>
    </ContainerCenter>
  );
};