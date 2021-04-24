import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
    visible: {
        x: [0, -20, 20, -10, 10, 0],
        transition: {
            delay: 2,
            duration: 0.5
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

const Home = () => {
    return (
        <motion.div className='home container' transition={{ delay: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>Welcome to Pizza Joint</h2>
            <Link to='/base'>
                <motion.button variants={buttonVariants} animate='visible' whileHover='hover'>
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
