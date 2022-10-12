import React from 'react';
import { AppProvider } from './context';
import { MainRoutes } from './routes/MainRoutes';
import './styles/global.css';

const App = () => {
	return (
		<AppProvider>
			<MainRoutes />
		</AppProvider>
	);
}

export default App;
