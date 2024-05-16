import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import RadixDialogDemo from './RadixDialogDemo';
import ReactQueryDemo from './ReactQueryDemo';
import ShadDialogDemo from './ShadDialogDemo';
import StateManagementDemo from './StateManagementDemo';

import './App.css';

// Create a client
const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div className="flex justify-center gap-3 p-3">
					<RadixDialogDemo />
					<ShadDialogDemo />
				</div>
				<StateManagementDemo />
				<ReactQueryDemo />
			</QueryClientProvider>
		</>
	);
}

export default App;
