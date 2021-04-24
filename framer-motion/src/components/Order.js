import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

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
            mass: 0.4,
            type: 'spring',
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.4,
        },
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        },
    },
};

const opacityVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const Order = ({ pizza, setShowModal }) => {
    useEffect(() => {
        setTimeout(() => setShowModal(true), 5000);
    }, [setShowModal]);

    return (
        <motion.div className='container order' variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
            <h2>Thank you for your order :)</h2>
            <motion.p variants={opacityVariants}>You ordered a {pizza.base} pizza with:</motion.p>
            <motion.div variants={opacityVariants}>
                {pizza.toppings.map(topping => (
                    <div key={topping}>{topping}</div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Order;
