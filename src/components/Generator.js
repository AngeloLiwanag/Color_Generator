import React, { useState } from 'react';
import styles from './Generator.module.css';
import Box from './Box';


const Generator = props => {
    const[inputs, setInputs] = useState({
        color: "",
        submit: false
    });
    
    const onChangeHandler = event =>{
        console.log("From onClickHandler");
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
            submit: true,
        });
    }
    
    const onSubmitHandler = event => {
        console.log("From onSubmitHandler");
        event.preventDefault();
        console.log(inputs.color);
    }

    return (
        <div className={styles.myContainerDiv}>
            ----------- This is from ./components/Generator -----------
            <br/>
            <form onSubmit={onSubmitHandler}>
                <label>Color</label>
                <input type="text" name="color" onChange={onChangeHandler}></input>
                <button>Add</button>
            </form>
            <Box data={inputs}/>
            {/* <div className={styles.myBox}></div> */}
        </div>
    );
}
export default Generator;