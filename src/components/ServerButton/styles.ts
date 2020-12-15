import styled from 'styled-components';

interface ButtonProps {
	isServer: boolean;
	selected: boolean;
}

interface ColumnProps {
	selected: boolean;
	hoverColumnActive: boolean;
}

export const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ContainerButton = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	//não permite o botão ser exprimido
	flex-shrink: 0;

	width: 50px;
	height: 50px;

	margin-bottom: 8px;
	border-radius: ${({ selected }) => (selected ? '30%' : '50%')};

	color: #fff;
	background-color: ${({ selected, isServer }) =>
		selected ? (isServer ? '#7289da' : '#43b581') : '#36393f'};
	font-family: Roboto;
	font-size: 16px;
	font-weight: bold;

	transition: 0.3s;

	&:hover {
		cursor: pointer;
		background-color: ${({ isServer }) => (isServer ? '#7289da' : '#43b581')};
		border-radius: 30%;
	}

	img {
		width: 34px;
		height: 30px;
	}
`;

export const Column = styled.div<ColumnProps>`
	width: 8px;
	height: ${({ hoverColumnActive }) => (hoverColumnActive ? '20px' : '50px')};
	background-color: ${({ selected, hoverColumnActive }) =>
		selected || hoverColumnActive ? '#fff' : ''};
	border-radius: 0px 4px 4px 0px;
	margin: 0px 0px 0px -4px;
	align-self: ${({ hoverColumnActive }) => (hoverColumnActive ? 'center' : 'flex-start')};
	transition: 0.8s;
`;
