import React from 'react';
import styles from './Login.module.scss';
import {useDispatch} from "react-redux";
import {signIn} from "../../store/actions/authActions";

const Login: React.FC = () => {
    const dispatch = useDispatch()

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const form = event.currentTarget;
        const profile = {
            // form['email'].value
            email: 'ja@gmail.com',
            // form['password'].value
            password: 'password'
        }
        console.log(profile);
        dispatch(signIn(profile))
    }

    return (
        <section className={styles.login}>
            <h1 className={styles.title}>Sign In</h1>
            <form onSubmit={submitHandler}>
                <p>
                    <label htmlFor="email">Login</label>
                    <input className={`form-control`}
                           type="email"
                           name="email"
                           id="email"
                           placeholder="Your email"/>
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input className={`form-control`}
                           type="password"
                           name="password"
                           id="password"
                           placeholder="Your password"
                           autoComplete="on"/>
                </p>
                <div>
                    <button type="submit"
                            className="btn btn--block btn--green">Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Login;