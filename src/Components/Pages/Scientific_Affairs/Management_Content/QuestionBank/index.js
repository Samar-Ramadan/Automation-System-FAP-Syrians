import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"
  import { Routes, Route, Link } from 'react-router-dom'
  import { Form, Button, Modal } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';


import * as AiIcons from "react-icons/ai";


export const GetQuestionBank  = () => {


 const [data,setdata] = useState([])
 //const [search,setSearch] =useState('');
const [course_id ,setcourseid] = useState("");
const [model ,setmodel] = useState("");
const [file ,setfile] = useState(null);
const [branch_id ,setbranchid] = useState("");




useEffect(()=>{
  GetQuestionBank()
},[])
const GetQuestionBank = async ()=>{
   return await axios.get('http://localhost:8000/api/qbank/index').then((res)=>{
    setdata(res.data.data);


 });

}
const store = async (event) => {
  event.preventDefault();

  const formData = new FormData();
 
  formData.append("course_id", course_id);
  formData.append("model", model);
  formData.append("file", file);
  formData.append("branch_id", branch_id);

  try {
    const response = await axios.post("http://localhost:8000/api/qbank/store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Service added successfully", response.data);
  } catch (error) {
    console.error("Error adding service", error);
  }
  GetQuestionBank();
  closeModal();
};
const Delete= async (id) =>{

   return await axios.post(`http://localhost:8000/api/qbank/destroy/${id}`).then((res)=>{
      alert(res.data.message);
      GetQuestionBank();
   })

}

// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = (event) => {
//     setcontent(event.target.result);
//   };

//   reader.readAsText(file);
// };
const [modalIsOpen, setModalIsOpen] = useState(false);

const openModal = () => setModalIsOpen(true);
const closeModal = () => setModalIsOpen(false);


const [Branches,setbranches] = useState([])
useEffect(()=>{
    Getbranches()
  },[])
const Getbranches = async ()=>{
    return await axios.get('http://localhost:8000/api/branch/index').then((res)=>{
     setbranches(res.data.data);
    
    
  });
}
const [Courses,setCourses] = useState([])
useEffect(()=>{
    GetCourses()
  },[])
const GetCourses = async ()=>{
    return await axios.get('http://localhost:8000/api/course/index').then((res)=>{
     setCourses(res.data.data);
    
    
  });
}


 return (


<section>


<div class="container">  
      <div class="row mt-3">
       <div class="col-sm-4">
          <div className="box p-3 mb-3 mt-5" style={{border:"1px solid #d0d0d0"}}>
            <form onSubmit={store}> 
            
                <div class="form-group">
                <label>الدورة </label>
                <select className='form-control'   onChange={(e)=>setcourseid(e.target.value)}>
         <option value="">الرجاء اختيار الدورة</option>
         {Courses.map(option => (
             <option key={option.id} value={option.id} >{option.name}</option>
                        ))}
            </select>
                </div>
                  
                <div class="form-group">
                <label>النموذج </label>
                <input
           value={model} className='form-control'
           onChange = {(e)=> setmodel(e.target.value)}
          
            />          
      </div>
     
                <div class="form-group">
                <label>ملف الأسئلة </label>
                           <input className='form-control'  type="file" onChange={(event) => setfile(event.target.files[0])} />

                </div>
               
                <div class="form-group">
                <label>الفرع </label>
                <select className='form-control'  onChange={(e)=>setbranchid(e.target.value)}>
                                                    <option value="">الرجاء اختيار الفرع</option>
                                                   {Branches.map(option => (
                                                     <option key={option.id} value={option.id} >{option.name}</option>
                                                    ))}
                                            </select>                </div>
 
              
                <button type="submit" class="btn btn-primary btn-block mt-4"> حفظ</button>
             </form>
        </div>
      </div>
      <div class="col-sm-8">
        <h5 class="text-center  ml-4 mt-4  mb-5"> جميع السجلات</h5>
        <div class="input-group mb-4 mt-3">
          <div class="form-outline">
           <input type="text" id="form1" class="form-control" placeholder="Search Employee Here" style={{backgroundColor:"#ececec",width:100 }}/>
        </div>
        <button type="button"  style={{width:35 ,height:35}}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>  
        <table class="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                <th>الفرع</th>
                <th>ملف الاسئلة</th>
                <th>النموذج</th>
                <th>الدورة</th>
             
            </tr>
            </thead>
            <tbody>
     
            {data.map((data)=>
                <tr>
                <td>{data.Branches}</td>
                <td>{data.file}</td>
                <td>{data.model}</td>
                <td>{data.course_id}</td>
               


                <td>
                      <a  className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete "+ data.id
                          )
                          if (confirmBox === true) {
                            Delete(data.id)
                          }
                        }}> <i class="far fa-trash-alt" style={{fontSize:"18px",marginRight:"5px"}}></i> </a>
                   
                    <Link class=" mr-2" to={`/EditEmployee/editID/${data.id}`}>
                       <i class="fa fa-edit" aria-hidden="true"></i> 
                    </Link>
                </td>
                </tr>
                )} 
            </tbody>
        </table>
      </div>
      </div>
    </div>
   </section>
  )
}
 

             
   
  
   
   
 




