import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints'

export const CardWrapperAnnounced = styled.img`
height: 200px;
width: auto;
cursor: pointer;
    @media screen and  ${breakpoints.xs} {
        height: 50px;
    }
`;