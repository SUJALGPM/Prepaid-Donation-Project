import React from 'react';
import Typewriter from 'typewriter-effect';

const typewriter1 = ({ text }) => {
    return (
        <Typewriter
            options={{
                autoStart: true,
                delay: 50,
                loop: true,
                devMode:false,
                strings: [text]
            }} />
    )
}
export default typewriter1;