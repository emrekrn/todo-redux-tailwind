import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Todo() {
	return (
		<div className='mb-2 flex h-12 items-center justify-between rounded-md border border-neutral-500 px-2.5'>
			<div></div>
			<div className='flex gap-2'>
				<button className='ml-auto aspect-square h-10 rounded border-2 border-gray-800 duration-100 ease-linear hover:bg-gray-800 hover:text-white'>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				<button className='ml-auto aspect-square h-10 rounded border-2 border-red-800 duration-100 ease-linear hover:bg-red-800 hover:text-white'>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</div>
		</div>
	);
}
