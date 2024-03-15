import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DeleteModal from './ui/DeleteModal.jsx';
import EditModal from './ui/EditModal.jsx';
import { changeStatus } from '../features/todo/todoSlice.js';
import { useDispatch } from 'react-redux';
export default function Todo({ id, todoText, status }) {
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditmodal, setShowEditModal] = useState(false);

	const dispatch = useDispatch();

	const handleShowDeleteModal = () => {
		setShowDeleteModal((prev) => !prev);
	};

	const handleShowEditModal = () => {
		setShowEditModal((prev) => !prev);
	};

	const handleStatusChange = () => {
		dispatch(changeStatus(id));
	};

	return (
		<div className='mb-2 flex h-12 items-center justify-between rounded-md border border-neutral-500 pr-2.5'>
			{showDeleteModal && (
				<DeleteModal
					todoId={id}
					handleShowDeleteModal={handleShowDeleteModal}
				/>
			)}
			{showEditmodal && (
				<EditModal
					todoId={id}
					todoText={todoText}
					handleShowEditModal={handleShowEditModal}
				/>
			)}
			<div
				className='w-full cursor-pointer pl-2.5'
				onClick={handleStatusChange}
			>
				<div
					className={`h-12 overflow-hidden ${status === 'not started' ? '' : 'line-through'}`}
				>
					{todoText}
				</div>
			</div>

			<div className='flex gap-2'>
				<button
					className='ml-auto aspect-square h-10 rounded border-2 border-gray-800 duration-100 ease-linear hover:bg-gray-800 hover:text-white'
					onClick={handleShowEditModal}
				>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				<button
					className='ml-auto aspect-square h-10 rounded border-2 border-red-800 duration-100 ease-linear hover:bg-red-800 hover:text-white'
					onClick={handleShowDeleteModal}
				>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</div>
		</div>
	);
}
