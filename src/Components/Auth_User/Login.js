import { useState } from "react"
import AuthUser from './AuthUser';
import axios from 'axios'
export default function Login() {
   const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const submitForm = () =>{
        // api call
        axios.defaults.withCredentials = true;
       // axios.defaults.baseURL = "http://localhost"; 
       // axios.get('sanctum/csrf-cookie','backend-non-api-route').then((res) => {
       //const csrf =  http.get('/csrf-cookie');
      // console.log(csrf);
      //axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
       // console.log(response);
       debugger
        http.post('/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.authorisation.token);
            console.log(res);
        }).catch(function (error) {
            console.log(error);
          });
       
        
    }

    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
    )
}