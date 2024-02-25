import { styled } from 'styled-components';

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

width: 100%;
height: 8vh;
background-color: #D9D9D9;
color: white;
gap: 10px;
`;

const Title = styled.h1`
font-size: 15px;
font-family: 'RIDIBatang';
color: white;
`;

const Detail = styled.a`
font-size: 10px;
font-family: 'RIDIBatang';
color: white;
`;

export default function Component() {
    return (
        <FooterContainer>
            <Detail>모든 가정에 행복이 가득하기를</Detail>
        </FooterContainer>
    );
};