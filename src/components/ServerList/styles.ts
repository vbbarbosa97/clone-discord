import styled from 'styled-components';

export const Container = styled.div`
	grid-area: SL;
	display: flex;
	flex-direction: column;
	background-color: var(--tertiary);
	padding: 11px 0px;
	max-height: 100vh;
	overflow-y: scroll;

	::-webkit-scrollbar {
		display: none;
	}
`;

export const Separator = styled.div`
	width: 32px;
	border-bottom: 2px solid #36393f;
	margin-bottom: 8px;
	align-self: center;
`;
