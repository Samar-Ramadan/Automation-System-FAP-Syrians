


 import React,{useEffect,useState} from 'react'
 import axios from 'axios'
 import {MDBTable,MDBTableBody,MDBTableHead,
   MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
   MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"
   import { Routes, Route, Link } from 'react-router-dom'
 
 import ReactModal from 'react-modal';
 import * as AiIcons from "react-icons/ai";

  //const endpoint = 'http://localhost:8000/api/branch/store'

export default function GetSubjects (){

  const [data,setdata] = useState([])

const [name ,setName] = useState("");
const [content ,setcontent] = useState(null);

const [price ,setprice] = useState("");
const [houers ,sethouers] = useState("");
const [number_of_lessons ,setnumber_of_lessons] = useState("");




useEffect(()=>{
  GetSubjects()
},[])
const GetSubjects = async ()=>{
   return await axios.get('http://localhost:8000/api/subject/index').then((res)=>{
    setdata(res.data.data);
   
   
 });
 
}
const store = async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("content", content);
  formData.append("price", price);
  formData.append("houers", houers);
  formData.append("number_of_lessons", number_of_lessons);

  try {
    const response = await axios.post("http://localhost:8000/api/subject/store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Service added successfully", response.data);
  } catch (error) {
    console.error("Error adding service", error);
  }
  GetSubjects();
  closeModal();
};
const Delete= async (id) =>{
  
   return await axios.post(`http://localhost:8000/api/subject/destroy/${id}`).then((res)=>{
      alert(res.data.message);
      GetSubjects();
   })
  
}

const handleFileChange = (event) => {
  if (event.target.files) {
    setcontent(event.target.files[0]);
  }
};


const [modalIsOpen, setModalIsOpen] = useState(false);

const openModal = () => setModalIsOpen(true);
const closeModal = () => setModalIsOpen(false);





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
                                       <label>اسم المادة</label>
                                       <input type='text' 
                                              className='form-control' 
                                              placeholder='ادخل اسم المادة '
                                              Value={name} 
                                              onChange={(e)=>setName(e.target.value)}
                                              />
                              </div>  
                              <div className="form-group mt-2">
                                       <label>المحتوى العلمي </label>
                                       <input type='file' 
                                              className='form-control' 
                                              placeholder='ادخل المحتوى العلمي  '
                                          
                                              onChange={(event) => setcontent(event.target.files[0])}
                                              />
                              </div>   
                   
                           
                              <div className="form-group mt-2">
                                       <label>السعر </label>
                                       <input type='number' 
                                              className='form-control' 
                                              placeholder='ادخل السعر  '
                                              Value={price} 
                                              onChange={(e)=>setprice(e.target.value)}
                                              />
                              </div>   
                      
                        
                              <div className="form-group mt-2">
                                       <label>عدد الساعات </label>
                                       <input type='number' 
                                              className='form-control' 
                                              placeholder='ادخل عدد الساعات  '
                                              Value={houers} 
                                              onChange={(e)=>sethouers(e.target.value)}
                                              />
                              </div>   
                     



                     
                              <div className="form-group mt-2">
                                       <label>عدد الدروس </label>
                                       <input type='number' 
                                              className='form-control' 
                                              placeholder='ادخل عدد الدروس  '
                                              Value={number_of_lessons} 
                                              onChange={(e)=>setnumber_of_lessons(e.target.value)}
                                              />
                              </div>   
                        


                </div>
                    <button type="button" onClick={store} className="btn btn-primary mt-4">حفظ</button>
             </div>   
           
    
      </ReactModal> 

<div lang="ar" style={{marginTop:"100px" ,   textAlign: 'right'}}>
  
          
          <MDBRow>
            
            <MDBCol size="10">
              
               <h2>جميع المواد</h2>
               <AiIcons.AiOutlinePlus onClick={openModal} style={{ background :"green" }}/>
               {/* <div className="col-md-4"><button onClick={openModal}>أضف فرع جديد</button></div> */}
               
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    
                    <th scope='col-md-2' size="2" ></th>
                    <th scope='col'>عدد الدروس</th>
                                 <th scope='col'>عدد الساعات </th>
                                
                               
                                <th scope='col'>السعر</th>
                                <th scope='col'>المحتوى</th>
                               <th scope='col'>اسم المادة</th>
                   
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
                              
                          <td>{data.number_of_lessons}</td>
                                      <td>{data.houers}</td>
                                  
                                       <td>{data.price}</td>
                                       <td>{data.content}</td>
                                       <td>{data.name}</td>
                                      
                          
                  
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
