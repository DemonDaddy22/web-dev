import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '50vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
        },
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        },
    },
};

const nextBtnVariants = {
    hidden: {
        x: '-50vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className='base container' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li
                            key={base}
                            onClick={() => addBase(base)}
                            whileHover={{ scale: 1.2, originX: 0, color: '#F4A460' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    );
                })}
            </ul>

            {/* variants propagate the animations down the DOM tree, so if we have same key names, we can avoid writing them again */}
            {pizza.base && (
                <motion.div className='next' variants={nextBtnVariants}>
                    <Link to='/toppings'>
                        <motion.button
                            transition={{ duration: 0.2 }}
                            whileHover={{
                                scale: 1.1,
                                textShadow: '0 0 4px rgba(255, 255, 255, 0.75)',
                                boxShadow: '0 0 8px rgba(255, 255, 255, 0.75)',
                            }}
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Base;
