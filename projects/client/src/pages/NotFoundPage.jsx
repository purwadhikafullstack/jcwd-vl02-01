import React from 'react';
import { TbError404 } from "react-icons/tb";
import HeadComponent from '../components/HeadComponent';

const NotFoundPage = () => {

    return (
        <div>
            <HeadComponent title={'Page Not Found!'} description={'Page Not Found!'} type={'website'}/>
            <div className='min-h-screen flex items-center'>
                <div className='mx-auto'>
                    <TbError404 className='text-[250px] text-hijauBtn mx-auto' />
                    <p className='text-hijauBtn text-bold text-[16px] text-center'>WE ARE SORRY, THE PAGE YOU REQUESTED</p>
                    <p className='text-hijauBtn text-bold text-[16px] text-center'>WAS NOT FOUND</p>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;