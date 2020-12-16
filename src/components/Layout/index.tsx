import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import { Grid } from './styles';

// minuto 40:10
const Layout = () => {
	return (
		<Grid>
			<ServerList />
			<ServerName />
		</Grid>
	);
};

export default Layout;
