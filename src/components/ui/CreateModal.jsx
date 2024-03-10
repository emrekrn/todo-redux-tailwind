export default function CreateModal() {
	return (
		<div className='absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-300 bg-opacity-60'>
			<div className='flex h-1/5 w-2/5 flex-col items-center justify-between rounded-xl bg-gray-200 p-4'>
				<h2 className='text-2xl font-bold'>Create ToDo</h2>
				<div className='w-full'>
					<textarea className='mt-2 h-28 w-full rounded-2xl p-2' />
					<div className='my-2 flex h-12'>
						<button className='w-full rounded-l-3xl border-2 border-r-0 border-red-800 border-r-black duration-100 ease-linear hover:bg-red-800 hover:text-white'>
							Close
						</button>
						<button className='w-full rounded-r-3xl border-2 border-l-0 border-green-700 border-l-black duration-100 ease-linear hover:bg-green-700 hover:text-white'>
							Create
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
