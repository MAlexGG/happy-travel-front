'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react"
import styles from './page.module.css';
import { AuthService } from "@/services/authService";
import { useAuthContext } from "@/context/authContext";

const initialLogin = {
    email: '',
    password: ''
  };

export default function Page(){
    const [loginData, setLoginData] = useState(initialLogin);
    const [error, setError] = useState("");

    const router = useRouter();
    const api = AuthService();
    const { login } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(resp => {
            api.postLogin(loginData).then(res => {
                const tokens = res.data.token;
                login(tokens);
                alert(res.data.msg);
                router.push("/auth") 
            }).catch(error => {
                setError(error.response.data.message)
            })    
        });
    }

    const handleInput = (e) => {
        e.persist();
        setLoginData({
          ...loginData,
          [e.target.name]: e.target.value
        });
      };


    return (
        <div className={styles.ctPage}>
            <form onSubmit={handleSubmit} className={styles.formLogin}>
                <h3 className={styles.txtTitle}>Acceso de usuario</h3>
                <hr />
                <label htmlFor="email" className={styles.lbLogin}>
                    E-mail
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                    value={loginData.email} 
                    onChange={handleInput}
                    className={styles.inptLogin}/>
                </label>

                <label htmlFor="password" className={styles.lbLogin}>
                    Password
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password..."
                    value={loginData.password} 
                    onChange={handleInput}
                    className={styles.inptLogin}/>
                </label>

                <span className={styles.sLogin}>{error}</span>

                <div className={styles.ctButtons}>
                    <button type="submit" className={`${styles.btLogin} ${styles.btAccept}`}>Aceptar</button>
                    <button type="reset" className={`${styles.btLogin} ${styles.btCancel}`}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}