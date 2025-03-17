"use client";

import { useForm } from "react-hook-form";
import styles from "./register.module.css";

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data: any) => {
        console.log("Register Data:", data);
    }
  
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>Register</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name")}
                        type="text"
                        placeholder="Full Name"
                        className={styles.inputField}
                    />
                    
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
                    
                    <button type="submit" className={styles.registerButton}>
                        Register
                    </button>
                </form>
                
                <p className={styles.links}>
                    Already have an account? <a href="/auth/login">Login</a>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage;