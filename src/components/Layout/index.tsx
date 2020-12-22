import React from 'react';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import UserInfo from '../UserInfo';
import { Grid } from './styles';

const Layout = () => {
	return (
		<Grid>
			<ServerList />
			<ServerName />
			<ChannelInfo />
			<ChannelList />
			<UserInfo />
		</Grid>
	);
};

export default Layout;
