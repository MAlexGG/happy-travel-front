'use client'

import axios from "axios";
import React, { useState } from "react"
import styles from './page.module.css';
import { AuthService } from "@/services/authService";
import Navbar from "../components/navbar/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const initialSignin = {
    name: '',
    email: '',
    password: ''
  };

export default function Page(){
    const [signinData, setSigninData] = useState(initialSignin);
    const [error, setError] = useState("");

    const router = useRouter();
    const api = AuthService();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(resp => {
            api.postRegister(signinData).then(res => {
                alert(res.data.msg);
                router.push("/login") 
            }).catch(error => {
                console.log(error)
                //setError(error.response.data.message)
            })    
        });
    }

    const handleInput = (e) => {
        e.persist();
        setSigninData({
          ...signinData,
          [e.target.name]: e.target.value
        });
      };


    return (
        <div className={styles.ctPage}>
            <Navbar/>
            <div className={styles.ctForm}>
                <form onSubmit={handleSubmit} className={styles.formLogin}>
                    <h3 className={styles.txtTitle}>Registro de usuario</h3>
                    <hr />

                    <label htmlFor="name" className={styles.lbLogin}>
                        Nombre
                        <input 
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Nombre..."
                        value={signinData.name} 
                        onChange={handleInput}
                        className={styles.inptLogin}/>
                    </label>

                    <label htmlFor="email" className={styles.lbLogin}>
                        E-mail
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@mail.com"
                        value={signinData.email} 
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
                        value={signinData.password} 
                        onChange={handleInput}
                        className={styles.inptLogin}/>
                    </label>

                    <span className={styles.sLogin}>{error}</span>

                    <div className={styles.ctButtons}>
                        <button type="submit" className={`${styles.btLogin} ${styles.btAccept}`}>Aceptar</button>
                        <button type="reset" className={`${styles.btLogin} ${styles.btCancel}`}>Cancelar</button>
                    </div>
                    <p className={styles.txtSignIn}>¿Ya tienes cuenta? Inicia sesión <span><Link href={'/login'}>aquí</Link></span></p>
                </form>
            </div>
        </div>
    )
}