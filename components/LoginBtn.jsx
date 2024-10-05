import { Button } from 'flowbite-react';
import React from 'react';

const LoginBtn = ({handleLoginModal}) => {
    return (
        <div>
            <Button onClick={()=> handleLoginModal()} className='bg-acent hover:bg-hover-acent'>Login</Button>
        </div>
    );
};

export default LoginBtn;