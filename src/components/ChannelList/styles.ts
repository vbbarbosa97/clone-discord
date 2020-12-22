import styled from 'styled-components';
import { ArrowForwardIos } from '@material-ui/icons';
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

export const ContentCategory = styled.div``;
