import { Html } from '@react-three/drei';
import React from 'react';
import { FiLoader } from 'react-icons/fi';

const Loader = () => {
	return (
		<Html>
			<div className='absolute top-0 left-0 w-full h-full flex-center'>
				<div className='w-[10vw] h-[10-vh] rounded-full'>
					<FiLoader className='animate-spin text-lg text-white duration-200' />
				</div>
			</div>
		</Html>
	);
};

export default Loader;
