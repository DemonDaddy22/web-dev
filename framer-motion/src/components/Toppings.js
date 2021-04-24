import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '-50vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
        },
    },
};

const Toppings = ({ addTopping, pizza }) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'tomatoes', 'pineapple', 'extra cheese'];

    return (
        <motion.div className='toppings container' variants={containerVariants} initial='hidden' animate='visible'>
            <h3>Step 2: Choose Toppings</h3>
            <ul>
                {toppings.map(topping => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <motion.li
                            key={topping}
                            onClick={() => addTopping(topping)}
                            whileHover={{ scale: 1.2, originX: 0, color: '#F4A460' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{topping}</span>
                        </motion.li>
                    );
                })}
            </ul>

            <Link to='/order'>
                <motion.button
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1, textShadow: '0 0 4px rgba(255, 255, 255, 0.75)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.75)' }}
                >
                    Order
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Toppings;
