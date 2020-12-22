import React, { useState } from 'react';

import { Category, Container, IconCategory, TitleCategory } from './styles';

const ChannelList = () => {
	const [expanded, setExpanded] = useState<boolean>(false);

	const handleCategory = () => setExpanded(!expanded);

	return (
		<Container>
			<Category onClick={handleCategory}>
				<IconCategory expanded={expanded} htmlColor="#8e9297" />
				<TitleCategory>CANAIS DE TEXTO</TitleCategory>
			</Category>
		</Container>
	);
};

export default ChannelList;
