import React from 'react';
import styles from './Box.module.css';

const Box = props => {
    const { color } = props.data;  

    return (
        <div className={styles.myContainerDiv}>
            ----------- This is from ./components/Box -----------
            <div> Color: {color}</div>
            {/* <div>New Color: {newColor}</div> */}

        </div>
    )
}
export default Box;