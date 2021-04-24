import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
    visible: {
        x: [0, -20, 20, -10, 10, 0],
        transition: {
            delay: 2,
            duration: 0.5,
        },
    },
    hover: {
        scale: 1.1,
        textShadow: '0 0 4px rgba(255, 255, 255, 0.75)',
        boxShadow: '0 0 8px rgba(255, 255, 255, 0.75)',
        transition: {
            duration: 0.2,
        },
    },
};

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
        },
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        },
    },
};

const Home = () => {
    return (
        <motion.div className='home container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
            <h2 exit={{ opacity: 0, y: '-25vw' }}>Welcome to Pizza Joint</h2>
            <Link to='/base'>
                <motion.button variants={buttonVariants} animate='visible' whileHover='hover'>
                    Create Your Pizza
                </motion.button>
            </Link>
            <Loader />
        </motion.div>
    );
};

export default Home;
