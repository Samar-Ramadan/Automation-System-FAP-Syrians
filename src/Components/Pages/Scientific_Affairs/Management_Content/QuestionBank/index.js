import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"
  import { Routes, Route, Link } from 'react-router-dom'

import ReactModal from 'react-modal';
import * as AiIcons from "react-icons/ai";


export const GetQuestionBank  = () => {


 const [data,setdata] = useState([])

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


  <div className="trans-content">
  <MDBContainer>
    <form
    // style={{
    //   margin:"auto",
    //   marginRight:"1000px",
    //   padding:"15px",
    //   maxWidth:"500px",
    //   alignContent:"center",

    // }}
    className='d-flex input-group w-auto' onSubmit={store}>


        </form>


         <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
          content: {
            width: '70%',
            height : '60%',
            position: 'absolute',
            top: '50%',
            left: '40%',
            transform: 'translate(-50%, -50%)'

          }}}>
      <AiIcons.AiOutlineClose onClick={closeModal} style={{  width: '5%' , height : '5%' }} />
        <div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>


                <div lang="ar" className="row">
                      


                        <div className="form-group mt-2">
                                       <label>الدورة </label>
                                       <select  className='form-control'  onChange={(e)=>setcourseid(e.target.value)}>
                                                   <option value="">--Please select an option--</option>
                                                   {Courses.map(option => (
                                                     <option key={option.id} value={option.id} >{option.name}</option>
                                                   ))}
                                           </select>
  
                              </div>

                             
                        <div className="form-group mt-2">
                                       <label>model </label>

                                       <input
           value={model}
           onChange = {(e)=> setmodel(e.target.value)}
           type="text"
           className='form-control' />
                               </div>
                     


                        <div className='mb-3'>
           <label className='form-lable'>نموذج الأسئلة</label>
           <input className='form-control'  type="file" onChange={(event) => setfile(event.target.files[0])} />

       </div>

                              <div className="form-group mt-2">
                                       <label>الفرع </label>
                                       <select className='form-control'  onChange={(e)=>setbranchid(e.target.value)}>
                                                   <option value="">--Please select an option--</option>
                                                   {Branches.map(option => (
                                                     <option key={option.id} value={option.id} >{option.name}</option>
                                                   ))}
                                           </select>
  
                              </div>
                        </div>
                      

                     



                      


                </div>
                    <button type="button" onClick={store} className="btn btn-primary mt-4">حفظ</button>


       
      </ReactModal>

<div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>


          <MDBRow>

            <MDBCol size="10">

               <h2>بنك الأسئلة </h2>
               <AiIcons.AiOutlinePlus onClick={openModal} style={{ background :"green" }}/>
               {/* <div className="col-md-4"><button onClick={openModal}>أضف فرع جديد</button></div> */}

              <MDBTable>
                <MDBTableHead dark>
                  <tr>

                    <th scope='col-md-2' size="2" ></th>
                    <th scope='col'>الفرع  </th>
                    <th scope='col'>نموذج الأسئلة</th>
                    <th scope='col'>مودل</th>
                    <th scope='col'>الدورة </th>
                    
                    
                  
                  
                              


                               
                           

                  </tr>


                </MDBTableHead>

                {

                  data.length === 0 ? (
                    <MDBTableBody className='align-center mb-0'>
                    <tr>
                       <td colSpan={8} className='text-center mb-0'>
                      No Data
                       </td>
                    </tr>
                    </MDBTableBody>
                  ):(
                    data.map((data)=>(
                      <MDBTableBody >
                        <tr>

                        {/* <td><button onClick={() => Delete(data.id)} className='btn btn-danger mt-4' >Delete</button></td> */}


                          <td>
                             <AiIcons.AiFillDelete onClick={() => Delete(data.id)} style={{ color: 'red' , width : '10%' , height: '10%' ,alignItems:"center" }} />

                             {/* <Link to={`/Branches/edit/${data.id}`} >
                              <AiIcons.AiFillEdit style={{ color: 'green' , width : '10%' , height: '10%' ,alignItems:"center" }}/ >
                             </Link> */}

                          </td>
                          <td>{data.branch_id}</td>
                          
                       
                          <td>{data.file}</td>
                  
                          <td>{data.model}</td>

                                      <td>{data.course_id}</td>    
                                       
                                       



                        </tr>

                      </MDBTableBody>


                        ))
                      )
                    }
                  </MDBTable>

            </MDBCol>
            <MDBCol size="4">

            </MDBCol>
              </MDBRow>

</div>







              </MDBContainer>
   </div>
 )
}




