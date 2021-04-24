import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div className='home container' transition={{ delay: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2>Welcome to Pizza Joint</h2>
            <Link to='/base'>
                <motion.button
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1, textShadow: '0 0 4px rgba(255, 255, 255, 0.75)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.75)' }}
                >
                    Create Your Pizza
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
