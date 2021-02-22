import React from 'react'

import styles from './style.module.css'

import {motion} from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = ({selectedImage, setSelectedImage}) => {

    const handleClick = (e) => {
        setSelectedImage(null);
    }

    return(
        <motion.div className={styles.modal} 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            >
            <FontAwesomeIcon icon={faTimes} className={styles.exitIcon}  style={  {paddingRight: "12px"}} onClick={handleClick}/>
            <motion.img src={selectedImage} alt="enlarged-pic"
                initial={{y: "-100vh"}}
                animate={{y: 0}}
                transition={{delay: 0.2}}
            />
        </motion.div>
    );
}

export default Modal;