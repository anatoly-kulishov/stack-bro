import React from 'react';
import styles from './Login.module.scss';

type ILogin = {
    signIn: Function
}

const Login: React.FC<ILogin> = ({signIn}) => {
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const profile = {
            email: form['email'].value,
            password: form['password'].value
        }
        signIn(profile)
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>StackBro</h1>
            <form onSubmit={submitHandler} className={styles.form}>
                <p className="form-row">
                    <label htmlFor="email">Email</label>
                    <input className={`form-control`}
                           type="email"
                           name="email"
                           id="email"
                           placeholder="Your email"/>
                </p>
                <p className="form-row">
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
                            className="btn btn--block btn--green">Sign in
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Login;