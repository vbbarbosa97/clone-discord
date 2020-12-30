import styled from 'styled-components';
import { IconProps } from '@material-ui/core';
import { Mic, MicOff, Settings, Headset } from '@material-ui/icons';

export const Container = styled.div`
	grid-area: UI;
	background-color: #292b2f;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 8px;
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Avatar = styled.div`
	width: 32px;
	height: 32px;
	background-color: #7289da;
	border-radius: 50%;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}

	> img {
		width: 24px;
		height: 20px;
	}

	&::after {
		background-color: #43b581;
		
		width: 2px;
		height: 10px;
		padding: 0px 4px;

		position: absolute;
		bottom: -4px;
		right: -4px;

		border-radius: 50%;
		border: 3px solid #292b2f;

		content: '';
	}
`;

export const UserData = styled.div`
	margin-left: 8px;
	display: flex;
	flex-direction: column;

	> strong {
		color: #fff;
		font-size: 13px;
	}

	> span {
		color: #b9bbbe;
		font-size: 13px;
	}
`;

export const Icons = styled.div`
	display: flex;
	flex-direction: row;
`;

export const MicIcon = styled(Mic)<IconProps>`
	color: #b9bbbe;
`;

export const MicIconOff = styled(MicOff)<IconProps>`
	color: #b9bbbe;
`;

export const HeadphoneIcon = styled(Headset)<IconProps>`
	color: #b9bbbe;
	margin-left: 6px;
`;

export const SettingsIcon = styled(Settings)<IconProps>`
	color: #b9bbbe;
	margin-left: 6px;
`;
