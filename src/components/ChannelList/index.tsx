import React, { useState } from 'react';

import {
	Category,
	Container,
	ContentCategory,
	IconCategory,
	Title,
	TitleCategory,
	TitleContainer,
	Symbol,
} from './styles';

const ChannelList = () => {
	const [expandedCategoryText, setExpandedCategoryText] = useState<boolean>(false);
	const [expandedCategoryVoice, setExpandedCategoryVoice] = useState<boolean>(false);

	const handleCategoryText = () => setExpandedCategoryText(!expandedCategoryText);
	const handleCategoryVoice = () => setExpandedCategoryVoice(!expandedCategoryVoice);

	return (
		<Container>
			<Category onClick={handleCategoryText}>
				<IconCategory expanded={expandedCategoryText} htmlColor="#8e9297" />
				<TitleCategory>CANAIS DE TEXTO</TitleCategory>
			</Category>
			<ContentCategory>
				<TitleContainer>
					<Symbol>#</Symbol>
					<Title>geral</Title>
				</TitleContainer>
			</ContentCategory>

			<Category onClick={handleCategoryVoice}>
				<IconCategory expanded={expandedCategoryVoice} htmlColor="#8e9297" />
				<TitleCategory>CANAIS DE VOZ</TitleCategory>
			</Category>
		</Container>
	);
};

export default ChannelList;
