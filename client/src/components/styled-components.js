import styled from 'styled-components';

export const Text = styled.div`
    font-size: ${props => props.size ? props.size : "1.2rem"};
    font-family: 'Lato', sans-serif;
`