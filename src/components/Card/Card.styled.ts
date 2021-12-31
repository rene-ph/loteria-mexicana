import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints'

export const CardHolderImage = styled.img`
    height: 200px;
    width: auto;
    cursor: pointer;
    @media screen and  ${breakpoints.xs} {
        height: 50px;
    }
`;

export const TokenHolderImage = styled.img `
    position: absolute;
    height: 80px;
    top: 55px;
    left: 22px;
    cursor: pointer;
`

export const WrapperCard = styled.div `
    display: inline-block;
    position: relative;
    top: 0;
    left: 0;
`