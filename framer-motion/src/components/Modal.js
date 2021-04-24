import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const modalVariant = {
    hidden: {
        y: '-50vh',
        opacity: 0,
    },
    visible: {
        y: 300,
        opacity: 1,
        transition: {
            delay: 0.25,
            duration: 0.5,
            type: 'spring',
            mass: 0.4,
            damping: 10
        }
    },
};

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className='backdrop' variants={backdropVariant} initial='hidden' animate='visible' exit='hidden'>
                    <motion.div className='modal' variants={modalVariant}>
                        <p>
                            Want to order another{' '}
                            <span role='img' aria-label='pizza'>
                                🍕
                            </span>
                            ?
                        </p>
                        <Link to='/'>
                            <button>Start again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
