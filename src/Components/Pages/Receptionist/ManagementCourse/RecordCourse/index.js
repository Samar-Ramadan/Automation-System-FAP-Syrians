import React,{ useState,useEffect } from "react";
import {useNavigate,Link,useHistory}  from 'react-router-dom';

import AuthUser from  '../../../../Auth_User/AuthUser';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactModal from 'react-modal';
import * as AiIcons from "react-icons/ai";
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"




export default function GetRecordCourse() {
    const {http} = AuthUser();
    const [course,setCourse] = useState([]);
    const [branch_id,setBranchId] =useState();
    const [subject_id,setSubjectId] =useState();
    const [start,setStart] =useState();
    const [end,setEnd] =useState();
    const [approved,setapproved] =useState(false);
 
    const [trainer_id,setTrainerId] =useState();
   




    useEffect(()=>{
        GetRecordCourse()
       },[])
      const GetRecordCourse = async ()=>{
         return await axios.get('http://localhost:8000/api/course/index').then((res)=>{
          setCourse(res.data.data);
         
         
       });

    }





const [Branches,setbranches] = useState([]);
      useEffect(()=>{
        GetBranches()
        
      },[])
      const GetBranches = async ()=>{
         http.get('http://localhost:8000/api/branch/index').then((res)=>{
          setbranches(res.data.data);
       });
      }
    
      const [Subjects,setsubjects] = useState([]);
      useEffect(()=>{
        GetSubjects()
        
      },[])
      const GetSubjects = async ()=>{
         http.get('http://localhost:8000/api/subject/index').then((res)=>{
          setsubjects(res.data.data);
       });
      }
      


    //   const [Trainers,settrainers] = useState([]);
    //   useEffect(()=>{
    //     GetTrainers()
        
    //   },[])
    //   const GetTrainers = async ()=>{
    //      http.get('/user').then((res)=>{
    //       settrainers(res.data.data);
    //    });
    //   }
      

      const history = useNavigate();
  
      
    


    const submitForm = async (e) => {
        debugger
          e.preventDefault()
         await axios.post('http://localhost:8000/api/course/store',{branch_id:branch_id,subject_id:subject_id,trainer_id:trainer_id,approved:approved,start:start,end:end})
         .catch(function (error) {
          console.log(error);
        });
        GetRecordCourse();
        closeModal();
        }

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);



 const Delete= async (id) =>{
  
   (`http://localhost:8000/api/class/destroy/${id}`).then((res)=>{
       alert(res.data.message);
    })
   GetRecordCourse()
   history('/index');
 }
 function handleCheckboxChange() {
    setapproved(!approved);
  }
    return(


<div className="trans-content">
<MDBContainer>
  


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
    <div lang="ar" className="row">
                      


                      <div className="form-group mt-2">
                                     <label>الفرع </label>
                                     <select  className='form-control'  onChange={(e)=>setBranchId(e.target.value)}>
                                                 <option value="">--Please select an option--</option>
                                                 {Branches.map(option => (
                                                   <option key={option.id} value={option.id} >{option.name}</option>
                                                 ))}
                                         </select>

                            </div>
                            <div className="form-group mt-2">
                                     <label>الدورة </label>
                                     <select  className='form-control'  onChange={(e)=>setSubjectId(e.target.value)}>
                                                 <option value="">--Please select an option--</option>
                                                 {Subjects.map(option => (
                                                   <option key={option.id} value={option.id} >{option.name}</option>
                                                 ))}
                                         </select>

                            </div>
                            <div className="form-group mt-2">
                                     <label>المدرب </label>
                                     <input type="number" className="form-control" value={trainer_id}
                                           onChange={e=>setTrainerId(e.target.value)}
                                        />

                            </div>
                            <div className="form-group mt-2">
                                     <label>معتمد؟ </label>
                                     <input  type="checkbox"  checked={approved}  onChange={handleCheckboxChange}/>

                            </div>
                            <div className="form-group mt-2">
                                     <label>بداية الدورة </label>
                                     <input type="date" className="form-control" 
                                         value={start}  onChange={e=>setStart(e.target.value)}
                                           id="StartDate"   />
                            </div>
                            <div className="form-group mt-2">
                                     <label>نهاية الدورة </label>
                                     <input type="date" className="form-control" 
                                     value={end}      onChange={e=>setEnd(e.target.value)}
                                           id="EndDate"  />
                            </div>
                    

                    
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">حفظ</button>
                </div>
      
      
    </ReactModal> 
   
            
<div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>

        
        <MDBRow>
          <MDBCol size="12">
            
             <h2>جميع الدورات</h2>
             <AiIcons.AiOutlinePlus onClick={openModal} style={{ background :"green" }}/>
             {/* <div className="col-md-4"><button onClick={openModal}>أضف فرع جديد</button></div> */}
             
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                <th scope='col-md-2' size="2" ></th>
                <th scope='col-md-5' size="5">نهاية الدورة</th>
                <th scope='col-md-5' size="5">بداية الدورة</th>
                <th scope='col-md-5' size="5">معتمد</th>
                <th scope='col-md-5' size="5">المدرب</th>
                <th scope='col-md-5' size="5">المادة</th>
                <th scope='col-md-5' size="5">الفرع</th>
                 
                 
                
                 
                 
                  
                  
                 
                </tr>
                

              </MDBTableHead>

              {
                
                course.length === 0 ? (
                  <MDBTableBody className='align-center mb-0'>
                  <tr>
                     <td colSpan={8} className='text-center mb-0'>
                    No Data 
                     </td>
                  </tr>
                  </MDBTableBody>
                ):(
                  course.map((data)=>(
                    <MDBTableBody >
                      <tr>
                        
                      {/* <td><button onClick={() => Delete(data.id)} className='btn btn-danger mt-4' >Delete</button></td> */}
                        

                        <td>
                           <AiIcons.AiFillDelete onClick={() => Delete(data.id)} style={{ color: 'red' , width : '10%' , height: '10%' ,alignItems:"center" }} />
                           
                           {/* <Link to={`/Branches/edit/${data.id}`} >
                            <AiIcons.AiFillEdit style={{ color: 'green' , width : '10%' , height: '10%' ,alignItems:"center" }}/ >
                           </Link> */}
                        
                        </td>
                            
                        <td>{data.end}</td>
                        <td>{data.start}</td>
                        <td>{data.approved}</td>
                        <td>{data.trainer_id}</td>
                        <td>{data.subject_id}</td>
                        <td>{data.branch_id}</td>
                        
                
                      </tr>
  
                    </MDBTableBody>
  
  
                      ))
                    )
                  }
                </MDBTable>
  
              </MDBCol>
            </MDBRow>

</div>







            </MDBContainer>
 </div>
    )
}
