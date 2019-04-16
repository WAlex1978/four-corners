import styled from 'styled-components';

export const Text = styled.div`
    font-size: ${props => props.size ? props.size : "1.2rem"};
    font-family: 'Lato', sans-serif;
    color: ${props => props.color ? props.color : "black"};
    text-align: ${props => props.align ? props.align : null};
    margin: ${props => props.margin ? props.margin : null};
    text-shadow: ${props => props.shadow ? props.shadow : null};
`

export const Wrapper = styled.div`
    width: ${props => props.width ? props.width: "75%"};
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`