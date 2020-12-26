import React, { useState } from 'react';

import {
	Category,
	Container,
	ContentCategoryChannelText,
	IconCategory,
	Title,
	TitleCategory,
	TitleContainer,
	Symbol,
	IconCreateInvitation,
	IconSound,
	ContentCategoryChannelVoice,
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
			{expandedCategoryText && (
				<ContentCategoryChannelText>
					<TitleContainer>
						<Symbol>#</Symbol>
						<Title>geral</Title>
					</TitleContainer>
					<IconCreateInvitation />
				</ContentCategoryChannelText>
			)}

			<Category onClick={handleCategoryVoice} style={{ marginTop: 16 }}>
				<IconCategory expanded={expandedCategoryVoice} htmlColor="#8e9297" />
				<TitleCategory>CANAIS DE VOZ</TitleCategory>
			</Category>

			{expandedCategoryVoice && (
				<ContentCategoryChannelVoice>
					<TitleContainer>
						<IconSound />
						<Title style={{color: '#72767d'}}>Geral</Title>
					</TitleContainer>
					<IconCreateInvitation />
				</ContentCategoryChannelVoice>
			)}
		</Container>
	);
};

export default ChannelList;
