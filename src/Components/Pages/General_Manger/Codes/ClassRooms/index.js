import React,{useEffect,useState, Fragment } from 'react'

import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom'
import {Button,Form} from "react-bootstrap"
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"

  import ReactModal from 'react-modal';
  import * as AiIcons from "react-icons/ai";

  //const endpoint = 'http://localhost:8000/api/branch/store'

export const GetClassRoom = () => {
 

const [ClassRoom,setClassRoom ] = useState([])
const [No ,setNo] = useState("");
const [name ,setName] = useState("");
const [size ,setSize] = useState("");
const [branch_id ,setbranchid] = useState("");

 useEffect(()=>{
  GetClassRoom()
 },[])
const GetClassRoom = async ()=>{
   return await axios.get('http://localhost:8000/api/class/index').then((res)=>{
    setClassRoom(res.data.data);
   
   
 });
 
 //console.log(response.data.data)
}

const Delete= async (id) =>{
  
   return await axios.post(`http://localhost:8000/api/class/destroy/${id}`).then((res)=>{
      alert(res.data.message);
   })
  GetClassRoom()
  history('/index');
}







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




let history=useNavigate();
    
    const store = async (e) => {
      debugger
        e.preventDefault()
       await axios.post('http://localhost:8000/api/class/store',{No:No,name:name,size:size,branch_id:branch_id})
       .catch(function (error) {
        console.log(error);
      });
      GetClassRoom();
      closeModal();
      }

 return (


          

  <div className="services">
  <MDBContainer>

               <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} style={{ backgroundColor: 'white', width: '10%' , height : '10%'}}>
                           <AiIcons.AiOutlineClose onClick={closeModal} style={{  width: '5%' , height : '5%' }} />
                           <div lang="ar" style={{ textAlign: 'right'}}>
        
            
                               <Form className="d-grid gap-2" style={{margin:"5rem"}}>
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
                                                   {Branches.map(option => (
                                                     <option key={option.id} value={option.id} >{option.name}</option>
                                                   ))}
                                           </select>
  
    
                               </Form.Group>


                               <Button type="submit" onClick={(e)=>store(e)}>
                                   حفظ
                               </Button>
                               </Form>
               
                    
                           </div>
               </ReactModal>

              <div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>
                        <h2>جميع القاعات</h2>
                        <MDBRow>
                          <MDBCol size="12">
                          <AiIcons.AiOutlinePlus  onClick={openModal} style={{ background :"green" }} title='نت'/>
                            <MDBTable>
                              <MDBTableHead dark>
                                <tr>
                                <th scope='col'></th>
                                <th scope='col'>الفرع</th>
                                <th scope='col'>سعة القاعة</th>
                                <th scope='col'>الأسم</th>
                                <th scope='col'>الرقم</th>
                                 
                                </tr>
                                
              
                              </MDBTableHead>
              
                              {
                                
                                ClassRoom.length === 0 ? (
                                  <MDBTableBody className='align-center mb-0'>
                                  <tr>
                                     <td colSpan={8} className='text-center mb-0'>
                                    No Data 
                                     </td>
                                  </tr>
                                  </MDBTableBody>
                                ):(
                                  ClassRoom.map((data)=>(
                                    <MDBTableBody >
                                      <tr>
                                      <td>
                                           <AiIcons.AiFillDelete onClick={() => Delete(data.id)} style={{ color: 'red' , width : '10%' , height: '10%' ,alignItems:"center" }} />
                                      </td>
                                      <td>{data.branch_id}</td>
                                      <td>{data.size}</td>
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