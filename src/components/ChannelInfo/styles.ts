import { TextField, TextFieldProps } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
	grid-area: CI;
	background-color: #36393f;
	box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 0px 0px;
	z-index: 2;
	padding: 0px 16px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Symbol = styled.div`
	padding-right: 8px;
	color: #72767d;
	font-size: 30px;
	font-weight: inherit;
`;

export const Title = styled.div`
	font-weight: bold;
	font-size: 16px;
	font-family: Roboto;
	color: #fff;
`;

export const ActionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const InputSearch = styled(TextField)<TextFieldProps>`
	box-shadow: none;
	background-color: #202225;
	align-self: center;
	border-radius: 4px;

	& .MuiInputBase-input {
		color: #b9bbbe;
		font-size: 14px;
		padding: 6px 0 7px 9px;
	}

	& .MuiInput-underline:before {
		content: none;
	}
	& .MuiInput-underline:after {
		content: none;
	}
`;
