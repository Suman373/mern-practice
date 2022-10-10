import React,{useState} from 'react'
import useStyles from './RegisterStyle';
import {Link} from 'react-router-dom';

const Register = () => {
    //styling class obj
    const classes = useStyles();

    // states
    const [userName , setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPwd, setUserPwd] = useState('');

    // handling register form submit
    const handleUserReg=(e)=>{
        e.preventDefault();
        alert(`user details : ${userName},${userEmail}`);
    }

    return (
        <div className={classes.registerWrapper}>
            <section className={classes.registerFormContainer}>
                <h2>Set up your plogify account</h2>
                <p>You have been invited to register and start sharing pictures with others</p>
                <form onSubmit={handleUserReg} >
                    <label
                    htmlFor='name'>
                        Name 
                        <input type="text" 
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}/>
                    </label>
                    
                    <label
                    htmlFor='email'>
                        Email  
                        <input type="email" 
                        value={userEmail}
                        onChange={(e)=> setUserEmail(e.target.value)} />
                    </label>

                    <label
                    htmlFor='password'>
                        Password 
                        <input type="password" 
                        value={userPwd} 
                        onChange={(e)=> setUserPwd(e.target.value)} />
                    </label>

                    <button
                    type="submit">
                        Continue
                    </button>

                    <p>Already have an account ? <Link to="/login">Login</Link></p>

                </form>
            </section>
            <div className={classes.registerFormImage}>

                <section>

                </section>

            </div>
        </div>
    )
}

export default Register;
