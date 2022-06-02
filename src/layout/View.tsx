import styled from 'styled-components';
import { device } from '../constants/device'

const View = styled.div`
    flex: 1;
    iframe {
        display: block;
        border: 0;
        height: 100%;
        width: 100%
    }
    display: none;
    @media ${device.tablet} {
        
        display: block;
    }
`;

export default View;

