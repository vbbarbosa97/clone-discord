import styled from 'styled-components';

interface UserProps {
	userOnline: boolean;
}

export const Container = styled.div`
	grid-area: UL;
	background-color: #2f3136;
	/* padding: 0px 16px; */
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const TitleCategory = styled.h2`
	font-size: 12px;
	font-weight: bold;
	color: #8e9297;
	margin-top: 26px;
	margin-left: 16px;
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: row;
	padding: 6px 8px;
	margin: 4px 8px;
	border-radius: 4px;

	&:hover {
		cursor: pointer;
		background-color: rgba(79, 84, 92, 0.32);
	}
`;

export const Avatar = styled.div<UserProps>`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	position: relative;
	opacity: ${({ userOnline }) => (userOnline ? '1' : '0.3')};
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

		width: ${({ userOnline }) => (userOnline ? '2px' : '0px')};
		height: ${({ userOnline }) => (userOnline ? '10px' : '0px')};
		padding: 0px 4px;

		position: ${({ userOnline }) => (userOnline ? 'absolute' : 'fixed')};
		bottom: -4px;
		right: -4px;

		border-radius: 50%;
		border: 3px solid #292b2f;

		content: '';
	}
`;

export const UserData = styled.div<UserProps>`
	margin-left: 12px;
	display: flex;
	align-items: center;
	> strong {
		color: #8c9095;
		font-size: 15px;
		opacity: ${({ userOnline }) => (userOnline ? '1' : '0.3')};
	}
`;
