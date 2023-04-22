import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"

import AuthUser from "../../../../Auth_User/AuthUser";
  import { useNavigate } from 'react-router-dom'

  //const endpoint = 'http://localhost:8000/api/branch/store'

export const GetClassRoom = () => {

  const {http} = AuthUser();
const [ data,setClassRooms ] = useState([])
const [size ,setSize] = useState("");


useEffect(()=>{
  GetClassRooms()
},[])
const GetClassRooms = async ()=>{
  debugger
   http.get('class/index').then((res1)=>{
    setClassRooms (res1.data.data);
    console.log(res1.data);
   
   
 }).catch((err)=>{
  console.log(err);
 });
 
 //console.log(response.data.data)
}
const store = async (e) => {
  e.preventDefault()
  http.post('class/store',{size:size});
  GetClassRooms();
 //navigate('/')
}
const Delete= async (id) =>{
  
  http.post(`class/destroy/${id}`).then((res)=>{
      alert(res.data.message);
   })
   GetClassRooms()
}

const [selectedOption, setSelectedOption] = useState('');
const handleSelect = (event) => {
  setSelectedOption(event.target.value);
};

const [ options,setdata ] = useState([])
useEffect(()=>{
  Getbranches()
},[])
const Getbranches = async ()=>{
  http.get('branch/index').then((res)=>{
   setdata(res.data.data);
  
  
});
 return (


  <div className="services">
  <MDBContainer>
    <form style={{
      margin:"auto",
      marginRight:"1000px",
      padding:"15px",
      maxWidth:"500px",
      alignContent:"center",

    }}
    className='d-flex input-group w-auto' onSubmit={store}>

      <input type='text' className='form-control' placeholder='ادخل اسم القاعة'
       Value={size} 
       onChange={(e)=>setSize(e.target.value)}
       />

<label htmlFor="select">Select an option:</label>
      <select id="select" value={selectedOption} onChange={handleSelect}>
        <option value="">--Please choose an option--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
       
       {/* <MDBBtnGroup> */}
      <MDBBtn type='submit' style={{marginBottom:25}}  color='info'>
        حفظ

      </MDBBtn>
      {/* <MDBBtn className='mx-2' color='info' style={{marginBottom:25}} onClick={()=>handelreset()}>
            reset

          </MDBBtn> */}

           {/* </MDBBtnGroup> */}

        </form>











<div style={{marginTop:"100px"}}>
          <h2>جميع القاعات</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                  
                    <th scope='col'>Size</th>
                    <th scope='col'>Action</th>
                   
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
                          

                          <td>{data.size}</td>
                          <td><button onClick={() => Delete(data.id)} className='btn btn-danger mt-4' >Delete</button></td>
                   <td></td>
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

}
