import React from 'react';
import ChannelInfo from '../ChannelInfo';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import { Grid } from './styles';

const Layout = () => {
	return (
		<Grid>
			<ServerList />
			<ServerName />
			<ChannelInfo />
		</Grid>
	);
};

export default Layout;
