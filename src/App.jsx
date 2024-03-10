import Navbar from './components/Navbar.jsx';
import TodoField from './components/TodoField.jsx';

function App() {
	return (
		<div className='flex h-screen w-screen flex-col bg-gray-300'>
			<Navbar />
			<TodoField />
		</div>
	);
}

export default App;
