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




export default function GetRecordSubscribe() {
    const {http} = AuthUser();
    const [subscribe,setSubscribe] = useState([]);
    const [course_id,setCourseId] =useState();
    const [card_id,setCardId] =useState();
    const [branch_id,setBranchId] =useState();
    const [state,setState] =useState(false);
    const [date_id,setDateId] =useState();
   

 
    
   




    useEffect(()=>{
      GetRecordSubscribe()
       },[])
      const GetRecordSubscribe = async ()=>{
         return await axios.get('http://localhost:8000/api/subscribe/index').then((res)=>{
          setSubscribe(res.data.data);
         
         
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
    
      const [Courses,setCourses] = useState([]);
      useEffect(()=>{
        GetCourses()
        
      },[])
      const GetCourses = async ()=>{
         http.get('http://localhost:8000/api/course/index').then((res)=>{
          setCourses(res.data.data);
       });
      }

      const [Cards,setCards] = useState([]);
      useEffect(()=>{
        GetCards()
        
      },[])
      const GetCards = async ()=>{
         http.get('http://localhost:8000/api/card/index').then((res)=>{
          setCards(res.data.data);
       });
      }
      
      const [Dates,setDates] = useState([]);
      useEffect(()=>{
        GetDates()
        
      },[])
      const GetDates = async ()=>{
         http.get('http://localhost:8000/api/date/index').then((res)=>{
          setDates(res.data.data);
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
         await axios.post('http://localhost:8000/api/subscribe/store',{course_id:course_id,card_id:card_id,branch_id:branch_id,state:state,date_id:date_id})
         .catch(function (error) {
          console.log(error);
        });
        GetRecordSubscribe();
        closeModal();
        }

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);



 const Delete= async (id) =>{
  
   (`http://localhost:8000/api/subscribe/destroy/${id}`).then((res)=>{
       alert(res.data.message);
    })
   GetRecordSubscribe()
   history('/index');
 }
 function handleCheckboxChange() {
    setState(!state);
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
                                     <label>الطالب </label>
                                     <select  className='form-control'  onChange={(e)=>setCardId(e.target.value)}>
                                                 <option value="">--Please select an option--</option>
                                                 {Cards.map(option => (
                                                   <option key={option.id} value={option.id} >{option.name}</option>
                                                 ))}
                                         </select>

                            </div>
                            <div className="form-group mt-2">
                                     <label>الكورس </label>
                                     <select  className='form-control'  onChange={(e)=>setCourseId(e.target.value)}>
                                                 <option value="">--Please select an option--</option>
                                                 {Courses.map(option => (
                                                   <option key={option.id} value={option.id} >{option.name}</option>
                                                 ))}
                                         </select>

                            </div>
                            <div className="form-group mt-2">
                                     <label>البطاقة </label>
                                     <select  className='form-control'  onChange={(e)=>setDateId(e.target.value)}>
                                                 <option value="">--Please select an option--</option>
                                                 {Dates.map(option => (
                                                   <option key={option.id} value={option.id} >{option.name}</option>
                                                 ))}
                                         </select>

                            </div>



                            <div className="form-group mt-2">
                                     <label>الحالة </label>
                                     <input  type="checkbox"  checked={state}  onChange={handleCheckboxChange}/>

                            </div>
                            <div className="form-group mt-2">
                                     <label>البطاقة </label>
                                     <select  className='form-control'  onChange={(e)=>setDateId(e.target.value)}>
                                                 <option value="">--Please select an option--</option>
                                                 {Dates.map(option => (
                                                   <option key={option.id} value={option.id} >{option.name}</option>
                                                 ))}
                                         </select>

                            </div>
                           
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">حفظ</button>
                </div>
      
      
    </ReactModal> 
   
            
<div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>

        
        <MDBRow>
          <MDBCol size="12">
            
             <h2>جميع الاشتراكات</h2>
             <AiIcons.AiOutlinePlus onClick={openModal} style={{ background :"green" }}/>
             {/* <div className="col-md-4"><button onClick={openModal}>أضف فرع جديد</button></div> */}
             
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                <th scope='col-md-2' size="2" ></th>
                <th scope='col-md-5' size="5">تاريخ الاشتراك </th>
                <th scope='col-md-5' size="5">الحالة</th>
                <th scope='col-md-5' size="5">الدورة</th>
                <th scope='col-md-5' size="5">الطالب</th>
                <th scope='col-md-5' size="5">الفرع</th>
                 
                 
                
                 
                 
                  
                  
                 
                </tr>
                

              </MDBTableHead>

              {
                
                subscribe.length === 0 ? (
                  <MDBTableBody className='align-center mb-0'>
                  <tr>
                     <td colSpan={8} className='text-center mb-0'>
                    No Data 
                     </td>
                  </tr>
                  </MDBTableBody>
                ):(
                  subscribe.map((data)=>(
                    <MDBTableBody >
                      <tr>
                        
                      {/* <td><button onClick={() => Delete(data.id)} className='btn btn-danger mt-4' >Delete</button></td> */}
                        

                        <td>
                           <AiIcons.AiFillDelete onClick={() => Delete(data.id)} style={{ color: 'red' , width : '10%' , height: '10%' ,alignItems:"center" }} />
                           
                           {/* <Link to={`/Branches/edit/${data.id}`} >
                            <AiIcons.AiFillEdit style={{ color: 'green' , width : '10%' , height: '10%' ,alignItems:"center" }}/ >
                           </Link> */}
                        
                        </td>
                            
                     
                        <td>{data.date_id}</td>
                        <td>{data.state}</td>
                        <td>{data.course_id}</td>
                        <td>{data.card_id}</td>
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
