import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AuthUser(){
    const navigate = useNavigate();


    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        //localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
       navigate('/');
    }

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    const http = axios.create({
        baseURL:"http://localhost:8000/api/",
        headers:{
            "Content-type" : 'application/json',
           // "Access-Control-Allow-Headers": "*",
        //"Access-Control-Allow-Origin": "*",
           // "Access-Control-Allow-Methods": "*"   , 
            'X-Requested-With':'XMLHttpRequest',
            "Authorization" : `Bearer ${token} `,
            "Accept":'application/json',
            "Access-Control-Allow-Origin":"http://localhost:3000",
            "credentials":true, 
            
        },
        withCredentials: true,
        mode: "no-cors",
    });


    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        getUser,
        http,
        logout
    }
}