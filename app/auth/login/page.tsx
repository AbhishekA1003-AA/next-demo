"use client";

import { useForm } from "react-hook-form";
import styles from "./login.module.css";

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data: any) => {
        console.log("Login Data:", data);
    };
  
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Login</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Email"
                        className={styles.inputField}
                    />
                    
                    <input
                        {...register("password")}
                        type="password"
                        placeholder="Password"
                        className={styles.inputField}
                    />
                    
                    <button type="submit" className={styles.loginButton}>
                        Login
                    </button>
                </form>
                
                <p className={styles.links}>
                    <a href="/auth/forgot-password">Forgot password?</a> | 
                    <a href="/auth/register"> Register</a>
                </p>
            </div>
        </div>
    )
}

export default LoginPage;