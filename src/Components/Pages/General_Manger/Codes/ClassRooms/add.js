import React,{useEffect,useState} from 'react'
import {Button,Form}from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import Codesobject from "../Components/CodesObject";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

//import {v4 as uuid} from "uuid";
function Add(){
    const [No ,setNo] = useState("");
const [name ,setName] = useState("");
const [size ,setSize] = useState("");
const [branch_id ,setbranchid] = useState("");
const [branchList, setbranchList] = useState([{'No':'','name':''}])
useEffect(() =>{
  const fetchData = async ()=>{
      const response = await fetch(`http://localhost:8000/api/branch/index`);
        const newData = await response.json();
        setbranchList(newData);
      
    console.log(newData);
  };

 
 fetchData();
 
}, [])
const handleChange = (event) =>{
  setbranchid(event.target.value);
}
    let history=useNavigate();
    const store = async (e) => {
        e.preventDefault()
       await axios.post('http://localhost:8000/api/class/store',{No:No,name:name,size:size,branch_id:branch_id})
       //navigate('/')
       history('/ClassRoom/index');
      }
    
   
    
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId='formNo'>
    <Form.Control type='text' placeholder=' ادخل رقم القاعة' required onChange={(e)=>setNo(e.target.value)}> 

    </Form.Control>
</Form.Group>
<Form.Group className="mb-3" controlId='formName'>
    <Form.Control type='text' placeholder=' ادخل اسم القاعة' required onChange={(e)=>setName(e.target.value)}> 

    </Form.Control>
</Form.Group>
<Form.Group className="mb-3" controlId='formName'>
    <Form.Control type='text' placeholder=' ادخل سعة القاعة' required onChange={(e)=>setSize(e.target.value)}> 

    </Form.Control>
</Form.Group>
<Form.Group className="mb-3" controlId='formName'>
    < select className="form-control" value={branch_id} onChange={handleChange}> 
              <option value="">Choose Branch Name</option>

              {branchList.map(Branch => (
              <option value={Branch.name} key={Branch.id} >{Branch.name}</option>
    
              ))
              }

         
  </select>
    
</Form.Group>


<Button type="submit" onClick={(e)=>store(e)}>
    حفظ
</Button>
            </Form>



        </div>

    )
}
export default Add;