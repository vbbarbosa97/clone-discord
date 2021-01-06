import styled from 'styled-components';

export const Container = styled.div`
	grid-area: CD;
	background-color: #36393f;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 4px 4px 24px 16px;
`;

export const Messages = styled.div`
	display: flex;
	flex-direction: column;
	height: 80vh;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-thumb {
		background-color: #202225;
		border-radius: 4px;
	}
	::-webkit-scrollbar-track {
		background-color: #2e3338;
		border-radius: 4px;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	background-color: #40444b;
	border-radius: 8px;
	margin-right: 12px;
`;

export const Input = styled.input`
	width: 100%;
	height: 100%;
	background-color: #40444b;
	border-radius: 8px;
	padding: 0 10px 0 5px;
	color: #fff;
	font-size: 16px;
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 50%;
	margin-top: 16px;
`;

export const Avatar = styled.div`
	width: 45px;
	height: 40px;
	background-color: #7289da;
	border-radius: 50%;
	position: relative;
	margin-right: 8px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		cursor: pointer;
	}

	> img {
		width: 30px;
		height: 30px;
	}
`;

export const UserData = styled.div`
	margin-left: 8px;

	display: flex;
	flex-direction: column;
	width: 90%;

	> span {
		color: #b9bbbe;
		font-size: 14px;
		margin-top: 10px;
	}
`;

export const TitleMessage = styled.div`
	> strong {
		color: #fff;
		font-size: 15px;
	}

	> span {
		font-size: 12px;
		color: #6b6f76;
		margin-left: 8px;
	}
`;
