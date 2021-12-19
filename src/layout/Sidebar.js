import styled from 'styled-components';
import { device } from '../constants/device';

const Sidebar = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: rgba(60, 60, 67, 0.03);
	border-right: solid 1px rgba(0, 0, 0, 0.1);
	height: 100vh;
	width: 100%;
	box-sizing: border-box;
	@media ${device.tablet} {
		max-width: 400px;
	}
`;

export default Sidebar;