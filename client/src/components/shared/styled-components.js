import styled from 'styled-components';

export const Text = styled.div`
    font-size: ${props => props.size ? props.size : "1.2rem"};
    font-family: 'Lato', sans-serif;
    color: ${props => props.color ? props.color : "black"};
    text-align: ${props => props.align ? props.align : null};
    margin: ${props => props.margin ? props.margin : null};
    text-shadow: ${props => props.shadow ? props.shadow : null};
`
export const Section = styled.div`
    margin-top: 20px;
`

export const Wrapper = styled.div`
    width: ${props => props.width ? props.width: "70%"};
    margin: auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`