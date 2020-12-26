import styled from 'styled-components';
import { ArrowForwardIos, PersonAdd } from '@material-ui/icons';
import { IconProps } from '@material-ui/core';

interface IconCategoryProps extends IconProps {
	expanded: boolean;
}

export const Container = styled.div`
	grid-area: CL;
	background-color: #2f3136;
	padding: 20px 5px;
`;

export const Category = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	&:hover {
		cursor: pointer;
		h2 {
			color: #fff;
		}
		svg {
			color: #fff;
		}
	}
`;

export const IconCategory = styled(ArrowForwardIos)<IconCategoryProps>`
	transform: ${({ expanded }) => (expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
	margin-right: 8px;
	&.MuiSvgIcon-root {
		width: 8px;
	}
`;

export const TitleCategory = styled.h2`
	font-size: 12px;
	font-weight: bold;
	color: #8e9297;
`;

export const ContentCategory = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Symbol = styled.div`
	padding-right: 8px;
	color: #72767d;
	font-size: 20px;
	font-weight: inherit;
`;

export const Title = styled.div`
	font-weight: bold;
	font-size: 14px;
	font-family: Roboto;
	color: #fff;
`;

// export const Icon
