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



export default function GetRecordStudent() {
    
    const {http} = AuthUser();
    const [first_name,setFirstName] = useState();
    const [last_name,setLastName] = useState();
    const [roll_number,setRoll] =useState();
    const [birth_day,setBirthDay] =useState();
    const [branch_id,setBranchId] =useState();
    const [phone_number,setPhone] =useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [student,setStudent] = useState([]);

    const [Branches,setbranches] = useState([]);
      useEffect(()=>{
        GetBranchesEmployee()
        
      },[])
      const GetBranchesEmployee = async ()=>{
         http.get('http://localhost:8000/api/branch/index').then((res)=>{
          setStudent(res.data.data);
       });
      }

      useEffect(()=>{
        Getbranches()
      },[])

      const Getbranches = async ()=>{
          http.get('http://localhost:8000/api/branch/index').then((res)=>{
           setbranches(res.data.data);
        });
      }


      //const history = useHistory();
    const submitForm = () =>{
      debugger

      
        http.post('register',{roll_number:roll_number,first_name:first_name,last_name:last_name,birth_day:birth_day,branch_id:branch_id,phone_number:phone_number,email:email,password:password}).then((res)=>{
          const data=res.data;
         // history.push('/Cards/index', data);

          //history('/Cards/index' , { data });

          // <Link to={{ pathname: '/Cards/index', state:  data  }}>
          // </Link>

        console.log(res);
        }).catch(function (error) {
          console.log(error);
          });
       
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const Delete= async (id) =>{
  
    http.post(`http://localhost:8000/api/branch/destroy/${id}`).then((res)=>{
       alert(res.data.message);
    })
   
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
      <div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>
      
          
      <div className="col-md-8">
                <div className="card p-4">
                    <div className="row">
                        <div className="col-md-6">
                              <div className="form-group">
                                       <label>first_name:</label>
                                       <input type="text" className="form-control" placeholder="Enter first_name"
                                           onChange={e=>setFirstName(e.target.value)}
                                       id="first_name" />
                              </div>   
                        </div>
                        <div className="col-md-6">
                               <div className="form-group mt-2">
                                       <label>last_name:</label>
                                       <input type="text" className="form-control" placeholder="Enter last_name"
                                           onChange={e=>setLastName(e.target.value)}
                                       id="last_name" />
                               </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                                <div className="form-group mt-2">
                                       <label>birth_day:</label>
                                       <input type="date" className="form-control" placeholder="Enter birth_day"
                                           onChange={e=>setBirthDay(e.target.value)}
                                       id="birth_day" />
                                </div>  
                        </div>
                        <div className="col-md-6">
                                
                                <div className="form-group mt-2">
                                       <label>Number:</label>
                                       <input type="number" className="form-control" placeholder="Enter phone_number"
                                           onChange={e=>setPhone(e.target.value)}
                                       id="phone_number" />
                                </div>
                        </div>

                       
                        
                    </div>

                    <div className="row">
                       
                        <div className="col-md-6">
                                <div className="form-group mt-2">
                                       <label>Email address:</label>
                                       <input type="email" className="form-control" placeholder="Enter email"
                                           onChange={e=>setEmail(e.target.value)}
                                       id="email" />
                                </div>
                        </div>
                        <div className="col-md-6">
                                <div className="form-group mt-2">
                                       <label>Password:</label>
                                       <input type="password" className="form-control" placeholder="Enter password"
                                           onChange={e => setPassword(e.target.value)}
                                       id="pwd" />
                                </div>
                        </div>
                    </div>

                    <div className="row">

                    <div className="col-md-6">
                                <div className="form-group mt-2">
                                        <label>roll_number:</label>
                                        <input type="number" className="form-control" placeholder="Enter roll_number"
                                            onChange={e=>setRoll(e.target.value)}
                                       id="roll_number" />
                                </div>
                        </div>
                        <div className="col-md-6">
                                <div className="form-group mt-2">
                                        <label>setBranchId:</label>
                                        <select  onChange={(e)=>setBranchId(e.target.value)}>
                                                   <option value="">--Please select an option--</option>
                                                   {Branches.map(option => (
                                                     <option key={option.id} value={option.id} >{option.name}</option>
                                                   ))}
                                           </select>
                                </div>
                        </div>
                    
                    </div>
                    
                    
                    

                    
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Register</button>
                </div>
      </div>
      </div>
    </ReactModal> 
    <AiIcons.AiOutlinePlus onClick={openModal} style={{ background :"green" }}/>
            
<div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>

        
        <MDBRow>
          <MDBCol size="12">
            
             <h2>جميع الفروع</h2>
             <AiIcons.AiOutlinePlus onClick={openModal} style={{ background :"green" }}/>
             {/* <div className="col-md-4"><button onClick={openModal}>أضف فرع جديد</button></div> */}
             
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  
                  <th scope='col-md-2' size="2" ></th>
                  <th scope='col-md-5' size="5">الاسم</th>
                  <th scope='col-md-5' size="5">الرقم</th>
                 
                </tr>
                

              </MDBTableHead>

              {
                
                student.length === 0 ? (
                  <MDBTableBody className='align-center mb-0'>
                  <tr>
                     <td colSpan={8} className='text-center mb-0'>
                    No Data 
                     </td>
                  </tr>
                  </MDBTableBody>
                ):(
                  student.map((data)=>(
                    <MDBTableBody >
                      <tr>
                        
                      {/* <td><button onClick={() => Delete(data.id)} className='btn btn-danger mt-4' >Delete</button></td> */}
                        

                        <td>
                           <AiIcons.AiFillDelete onClick={() => Delete(data.id)} style={{ color: 'red' , width : '10%' , height: '10%' ,alignItems:"center" }} />
                           
                           {/* <Link to={`/Branches/edit/${data.id}`} >
                            <AiIcons.AiFillEdit style={{ color: 'green' , width : '10%' , height: '10%' ,alignItems:"center" }}/ >
                           </Link> */}
                        
                        </td>
                            
                        <td>{data.name}</td>
                        <td>{data.No}</td>
                        
                
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