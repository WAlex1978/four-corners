import styled from 'styled-components';

const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height: 400px;
    margin-top: 20px;
`

export default Image;