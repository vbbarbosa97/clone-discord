import {
	MenuList,
	MenuListProps,
	Popper,
	PopperProps,
	Typography,
	TypographyProps,
} from '@material-ui/core';
import styled from 'styled-components';

interface ItemProps {
	iconColor?: string;
	nameColor?: string;
}

export const Container = styled.div`
	grid-area: SN;
	background-color: #292b2f;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 11px 0 16px;

	box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 0px 0px;
	z-index: 2;
`;

export const Title = styled(Typography)<TypographyProps>`
	font-family: Roboto;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
`;

export const Menu = styled(MenuList)<MenuListProps>`
	background-color: #18191c;
	border-radius: 4px;
	width: 220px;
`;

export const Item = styled.div<ItemProps>`
	display: flex;
	flex: 1;
	justify-content: space-between;
	padding: 6px 6px;
	margin: 0px 12px;
	border-radius: 4px;

	div {
		color: ${({ nameColor }) => nameColor};
	}

	svg {
		color: ${({ iconColor }) => iconColor};
	}

	&:hover {
		cursor: pointer;
		background-color: #7289da;

		div {
			color: #fff;
		}

		svg {
			color: #fff;
		}
	}
`;

export const NameItem = styled.div`
	font-size: 14px;
`;

export const Separator = styled.div`
	border-bottom: 1px solid #36393f;
	align-self: center;
	margin: 4px 12px;
`;

export const MenuContainer = styled(Popper)<PopperProps>`
	margin: 10px 155px 0px 0px;
`;
