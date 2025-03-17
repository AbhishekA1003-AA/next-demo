"use client";

import { useForm } from "react-hook-form";
import styles from "./forgot-password.module.css";

const ForgotPasswordPage = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data: any) => {
        console.log("Forgot Password Data:", data);
    }
  
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Forgot Password</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="Enter your email"
                        className={styles.inputField}
                    />
                    
                    <button type="submit" className={styles.resetButton}>
                        Reset Password
                    </button>
                </form>
                
                <p className={styles.links}>
                    Back to <a href="/auth/login">Login</a>
                </p>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;