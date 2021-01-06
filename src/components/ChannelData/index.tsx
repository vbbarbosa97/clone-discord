import React from 'react';
import { IconButton } from '@material-ui/core';
import { Container, Messages, InputWrapper, Input } from './styles';
import { AddCircle } from '@material-ui/icons';
import { Message } from './Message';

const ChannelData = () => {
	return (
		<Container>
			<Messages>
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
			</Messages>
			<InputWrapper>
				<IconButton>
					<AddCircle htmlColor="#b9bbbe" />
				</IconButton>
				<Input placeholder="Conversar em #geral" />
			</InputWrapper>
		</Container>
	);
};

export default ChannelData;
