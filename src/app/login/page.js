'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react"
import styles from '../page.module.css';
import { AuthService } from "@/services/authService";

const initialLogin = {
    email: '',
    password: '',
    error_list: []
  };

export default function Page(){
    const [loginData, setLoginData] = useState(initialLogin);

    const router = useRouter();
    const api = AuthService();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(resp => {
            api.postLogin(loginData).then(res => {
                const tokens = res.data.token;
                localStorage.setItem('auth_token', tokens);
                alert(res.data.msg);
                router.push("/auth") 
            }).catch(error => {
                console.log(error)
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
        <div className={styles.main}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    E-mail
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                    value={loginData.email} 
                    onChange={handleInput}/>
                </label>

                <label htmlFor="password">
                    Password
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password..."
                    value={loginData.password} 
                    onChange={handleInput}/>
                </label>

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}