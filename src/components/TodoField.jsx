import Todo from './Todo.jsx';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TodoField() {
	return (
		<div className='m-auto h-96 w-7/12 self-center rounded-2xl bg-gray-200 p-4'>
			<div className='mb-4 flex'>
				<button className='ml-auto aspect-square h-10 rounded border-2 border-emerald-600 duration-100 ease-linear hover:bg-emerald-600 hover:text-white'>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
			<div className='h-5/6 overflow-scroll'>
				<Todo />
				<Todo />
				<Todo />
				<Todo />
				<Todo />
				<Todo />
				<Todo />
				<Todo />
				<Todo />
			</div>
		</div>
	);
}
