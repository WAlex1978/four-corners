import styled from 'styled-components';

export const Background = styled.div`
    background-color: rgb(228, 231, 238);
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: -1;
`

export const Text = styled.div`
    font-size: ${props => props.size ? props.size : "1.2rem"};
    font-family: 'Lato', sans-serif;
    color: ${props => props.color ? props.color : "black"};
    text-align: ${props => props.align ? props.align : null};
    margin: ${props => props.margin ? props.margin : null};
    margin-bottom: ${props => props.bottom ? props.bottom: null};
    text-shadow: ${props => props.shadow ? props.shadow : null};
`
export const Section = styled.div`
    margin-top: 20px;
`

export const Wrapper = styled.div`
    width: ${props => props.width ? props.width: "70%"};
    display: ${props => props.flex ? "flex" : null};
    margin: auto;

    @media (max-width: 768px) {
        width: 95%;
    }
`

export const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "row"};
    align-items: ${props => props.align ? props.align : "center"};
    justify-content: ${props => props.justify ? props.justify : "center"};

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Card = styled.div`
    background-color: #fff;
    border: 1px solid rgb(214, 222, 229);
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5px;
    margin-right: 5px;
    width: ${props => props.width ? props.width : null};
    overflow: hidden;

    @media (max-width: 768px) {
        margin: 5px;
        width: 100%;
        display: ${props => props.hide ? "none" : null};
    }
`

export const Image = styled.div`
    background-image: url('https://res.cloudinary.com/dmuuoo1bl/image/upload/v1555841951/avatars/default.png');
    background-position: center;
    background-size: cover;
    height: 260px;
    width: 260px;
    margin: auto;
`