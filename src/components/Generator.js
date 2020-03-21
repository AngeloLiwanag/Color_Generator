import React from 'react';
import styles from './Generator.module.css';

const Generator = ({generator, onColorHandler, onSubmitHandler}) => {
    return(
        <div className={styles.myContainerDiv}>
            <form onSubmit={onSubmitHandler}>
                <label>Color</label>
                <input type="text" name="color" value={generator.color} onChange={onColorHandler}></input>
                <button>Add</button>
            </form>
        </div>
    )
}
export default Generator;