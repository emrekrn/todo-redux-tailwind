import Todo from './Todo.jsx';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import todosData from '../utils/TodosState.js';
import CreateModal from './ui/CreateModal.jsx';
import uniqid from 'uniqid';

export default function TodoField() {
	const [todos, setTodos] = useState(todosData);
	const [showCreateModal, setShowCreateModal] = useState(false);

	const handleShowModal = () => {
		setShowCreateModal((prev) => !prev);
	};

	const handleCreateTodo = (todoText) => {
		setTodos((prev) => [
			...prev,
			{
				id: uniqid(),
				todoText,
				status: 'not started',
			},
		]);
		handleShowModal();
	};

	const handleDelete = (id) => {
		console.log(id);
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const todoElements = todos.map((todo) => (
		<Todo
			key={todo.id}
			id={todo.id}
			todoText={todo.todoText}
			status={todo.status}
			handleDelete={handleDelete}
		/>
	));

	return (
		<div className='m-auto h-96 w-7/12 self-center rounded-2xl bg-gray-200 p-4'>
			{showCreateModal && (
				<CreateModal
					handleShowModal={handleShowModal}
					handleCreateTodo={handleCreateTodo}
				/>
			)}
			<div className='mb-3 flex border-b border-b-gray-500 pb-2'>
				<button
					className='ml-auto aspect-square h-10 rounded border-2 border-emerald-600 duration-100 ease-linear hover:bg-emerald-600 hover:text-white'
					onClick={handleShowModal}
				>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
			<div className='h-5/6 overflow-scroll'>{todoElements}</div>
		</div>
	);
}
