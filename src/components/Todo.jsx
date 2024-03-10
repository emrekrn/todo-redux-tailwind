import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
export default function Todo() {
	return (
		<div className='mb-2 flex h-12 items-center justify-between rounded-md border border-neutral-500 px-2.5'>
			<div className='h-12 overflow-hidden'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis
				dicta dolore dolores ea id impedit incidunt ipsa laudantium, minima
				nobis non obcaecati odit optio pariatur perspiciatis provident, quia
				quibusdam quo soluta voluptas voluptatem voluptatibus voluptatum!
				Accusantium magni ratione totam. Cupiditate delectus dolor impedit,
				inventore ipsa modi molestiae nemo numquam!
			</div>
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
