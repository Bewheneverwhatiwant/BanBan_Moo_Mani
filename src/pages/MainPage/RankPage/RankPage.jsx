import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StyledImg from '../../../Components/Container/StyledImg';
import CustomCenter from '../../../Components/Container/CustomCenter';

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

const Rank = styled.div`
border: 1px solid orange;
border-radius: 20px;

display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 10px;

width: 100%;
height: 4vh;

  color: #FFCE86;
  font-family: 'RIDIBatang';
`;

const BigColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
gap: 20px;
`;

const MidColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
gap: 10px;
`;

const BigRaw = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
width: 80%;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
align-itrns: center;
justify-content: flex-start;
gap: 5px;
padding-left: 10%;
width: 90%;
`;

const Title = styled.h1`
font-family: 'RIDIBatang';
font-size: 20px;
color: #949494;
`;

const Update = styled.a`
font-family: 'RIDIBatang';
font-size: 10px;
color: #FFCE86;
`;

const Number = styled.h1`
font-family: 'RIDIBatang';
font-size: 20px;
color: #FFCE86;
`;

const Detail = styled.a`
font-family: 'RIDIBatang';
font-size: 15px;
color: black;
`;

const CircleStyledImg = styled.img`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    border-radius: 50px;
`;

export default function Component() {

    const navigate = useNavigate();

    return (
        <ContainerCenter>
            <PageContainer>
                <BigColumn>
                    <MidColumn>
                        <Row>
                            <StyledImg src={'icon_fire.png'} width='25px' height='25px' />
                            <CustomCenter>
                                <Title>House Ranking</Title>
                            </CustomCenter>
                            <StyledImg src={'icon_fire.png'} width='25px' height='25px' />
                        </Row>
                        <Row>
                            <Update>마지막 업데이트 시간:</Update>
                            <Update>23:00</Update>
                        </Row>
                    </MidColumn>

                    <MidColumn>
                        <BigRaw>
                            <CustomCenter>
                                <Number>1</Number>
                            </CustomCenter>
                            <Rank>
                                <CircleStyledImg src={'icon_family.png'} width='30px' height='30px' />
                                <Detail>지원이 아빠</Detail>
                            </Rank>
                        </BigRaw>

                        <BigRaw>
                            <CustomCenter>
                                <Number>2</Number>
                            </CustomCenter>
                            <Rank>
                                <CircleStyledImg src={'icon_family.png'} width='30px' height='30px' />
                                <Detail>나영이 아빠</Detail>
                            </Rank>
                        </BigRaw>
                    </MidColumn>
                </BigColumn>
            </PageContainer>
        </ContainerCenter>
    );
};