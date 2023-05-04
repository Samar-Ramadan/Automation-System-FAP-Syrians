import React,{ useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from  './AuthUser';
import axios from 'axios'
export default function Register() {
    const navigate = useNavigate();
    const {http,setToken} = AuthUser();
    const [first_name,setFirstName] = useState();
    const [last_name,setLastName] = useState();
    const [roll_number,setRoll] =useState();
    const [birth_day,setBirthDay] =useState();
    const [branch_id,setBranchId] =useState();
    const [phone_number,setPhone] =useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const api = axios.create({
        baseURL:"http://localhost:8080/api/",
      })
    const submitForm = () =>{
        // api call
       // axios.defaults.withCredentials = true;
        // axios.get('http://localhost:8080/sanctum/csrf-cookie').then( response=> {
         debugger  
         http.post('register',{roll_number:roll_number,first_name:first_name,last_name:last_name,birth_day:birth_day,branch_id:branch_id,phone_number:phone_number,email:email,password:password}).then((res)=>{
            setToken(res.data.user,res.data.authorisation.token);
            console.log(res);
        }).catch(function (error) {
            console.log(error);
          });
  //  });
       
    }

    return(
        <div className="row justify-content-left pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group mt-3">
                        <label>roll_number:</label>
                        <input type="number" className="form-control" placeholder="Enter roll_number"
                            onChange={e=>setRoll(e.target.value)}
                        id="roll_number" />
                    </div>
                    <div className="form-group mt-3">
                        <label>first_name:</label>
                        <input type="text" className="form-control" placeholder="Enter first_name"
                            onChange={e=>setFirstName(e.target.value)}
                        id="first_name" />
                    </div>
                    <div className="form-group mt-3">
                        <label>last_name:</label>
                        <input type="text" className="form-control" placeholder="Enter last_name"
                            onChange={e=>setLastName(e.target.value)}
                        id="last_name" />
                    </div>
                    <div className="form-group mt-3">
                        <label>last_name:</label>
                        <input type="date" className="form-control" placeholder="Enter birth_day"
                            onChange={e=>setBirthDay(e.target.value)}
                        id="birth_day" />
                    </div>
                    
                    <div className="form-group mt-3">
                        <label>setBranchId:</label>
                        <input type="number" className="form-control" placeholder="Enter birth_day"
                            onChange={e=>setBranchId(e.target.value)}
                        id="setBranchId" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Number:</label>
                        <input type="number" className="form-control" placeholder="Enter phone_number"
                            onChange={e=>setPhone(e.target.value)}
                        id="phone_number" />
                    </div>
                    <div className="form-group mt-3">
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
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
            </div>
        </div>
    )
}