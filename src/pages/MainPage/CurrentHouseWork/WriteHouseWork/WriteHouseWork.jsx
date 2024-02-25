import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../../Components/Container/CustomRow';
import CustomCenter from '../../../../Components/Container/CustomCenter';
import StyledImg from '../../../../Components/Container/StyledImg';

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

const AddButton = styled.button`
width: ${props => props.width || '20%'};
height: ${props => props.height || '5vh'};
border: none;
background-color: transparent;

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

width: 100%;
height: 5vh;
padding-left: 10px;

&::placeholder {
  color: #FFCE86;
  font-family: 'RIDIBatang';
}
`;

const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 10px;
width: 100%;
`;

const Title_Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 10px;
width: 100%;
padding-left: 10%;
`;

const Title = styled.h1`
font-family: 'RIDIBatang';
font-size: 20px;
color: #949494;
`;

const BigColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
gap: ${(props) => props.gap || '20px'};
`;

export default function Component() {

    const navigate = useNavigate();
    const [houseworkList, setHouseworkList] = useState(['']); // 집안일 목록 관리 상태

    const handleHouseworkChange = (index, value) => {
        const newList = [...houseworkList];
        newList[index] = value;
        setHouseworkList(newList);
    };

    const handleAddRow = () => {
        setHouseworkList([...houseworkList, '']);
    };

    const handleRemoveRow = (index) => {
        const newList = [...houseworkList];
        newList.splice(index, 1);
        setHouseworkList(newList);
    };

    const handleComplete = () => {
        // TODO: 완료 버튼 클릭 시 동작 추가
        console.log('Housework List:', houseworkList);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <BigColumn>
                    <Title_Row>
                        <Title>집안일을 입력해요</Title>
                        <StyledImg src={'icon_egg.png'} width='30px' height='30px' />
                    </Title_Row>

                    {houseworkList.map((housework, index) => (
                        <BigColumn gap='5px' key={index}>
                            <Row>
                                <HouseWork
                                    placeholder='집안일을 입력해주세요.'
                                    value={housework}
                                    onChange={(e) => handleHouseworkChange(index, e.target.value)}
                                />
                                <CustomCenter>
                                    <BasicButton width='50px' height='30px' onClick={handleComplete}>
                                        완료
                                    </BasicButton>
                                </CustomCenter>
                            </Row>
                            {index === houseworkList.length - 1 && (
                                <AddButton width='50px' height='30px' onClick={handleAddRow}>
                                    <StyledImg src={'icon_add.png'} width='30px' height='30px' />
                                </AddButton>
                            )}
                        </BigColumn>
                    ))}
                </BigColumn>
            </PageContainer>
        </ContainerCenter>
    );
}