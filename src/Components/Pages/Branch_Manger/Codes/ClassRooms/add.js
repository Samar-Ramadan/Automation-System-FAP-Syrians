import React,{useEffect,useState} from 'react'
import {Button,Form}from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//import Codesobject from "../Components/CodesObject";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

//import {v4 as uuid} from "uuid";
export const AddClass = () =>{
    const [No ,setNo] = useState("");
const [name ,setName] = useState("");
const [size ,setSize] = useState("");
const [branch_id ,setbranchid] = useState("");
const [branchList, setbranchList] = useState([{'No':'','name':''}])
// useEffect(() =>{
//   const fetchData = async ()=>{
//       const response = await fetch(`http://localhost:8000/api/branch/index`);
//         const newData = await response.json();
//         setbranchList(newData);
      
//     console.log(newData);
//   };

 
//  fetchData();
 
// }, [])


const [data,setdata] = useState([])
useEffect(()=>{
    Getbranches()
  },[])
const Getbranches = async ()=>{
    return await axios.get('http://localhost:8000/api/branch/index').then((res)=>{
     setdata(res.data.data);
    
    
  });
}



function handleSelectChange(e) {
    setbranchid(e.target.value);
  }
    let history=useNavigate();
    
    const store = async (e) => {
      debugger
        e.preventDefault()
       await axios.post('http://localhost:8000/api/class/store',{No:No,name:name,size:size,branch_id:branch_id})
       .catch(function (error) {
        console.log(error);
      });
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
<Form.Group className="mb-3" controlId='formSize'>
    <Form.Control type='text' placeholder=' ادخل سعة القاعة' required onChange={(e)=>setSize(e.target.value)}> 

    </Form.Control>
</Form.Group>
<Form.Group className="mb-3" controlId='formName'>
<select  onChange={(e)=>setbranchid(e.target.value)}>
        <option value="">--Please select an option--</option>
        {data.map(option => (
          <option key={option.id} value={option.id} >{option.name}</option>
        ))}
      </select>
  
    
</Form.Group>


<Button type="submit" onClick={(e)=>store(e)}>
    حفظ
</Button>
            </Form>



        </div>

    )
}