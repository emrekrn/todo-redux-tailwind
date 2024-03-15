export default function DeleteModal({
	todoId,
	handleShowDeleteModal,
	handleDelete,
}) {
	return (
		<div className='absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-300 bg-opacity-60'>
			<div className='flex h-1/5 w-2/5 flex-col items-center justify-between rounded-xl bg-gray-200 p-4'>
				<h2 className='text-2xl font-bold'>Delete ToDo</h2>
				<p className='text-xl'>You're going to delete a Todo. Are you sure?</p>
				<div className='w-full'>
					<div className='my-2 flex h-12'>
						<button
							className='w-full rounded-l-3xl border-2 border-r-0 border-gray-800 border-r-black duration-100 ease-linear hover:bg-gray-800 hover:text-white'
							onClick={handleShowDeleteModal}
						>
							No, Keep It.
						</button>
						<button
							className='w-full rounded-r-3xl border-2 border-l-0 border-red-800 border-l-black duration-100 ease-linear hover:bg-red-800 hover:text-white'
							onClick={() => handleDelete(todoId)}
						>
							Yes, Delete!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
