import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
    animateOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.4,
            },
            y: {
                yoyo: Infinity,
                duration: 0.2,
                ease: 'easeOut',
            },
        },
    },
};

const Loader = () => {
    return (
        <>
            <motion.div className='loader' variants={loaderVariants} animate='animateOne'></motion.div>
        </>
    );
};

export default Loader;
