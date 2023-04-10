import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"


  import { useNavigate } from 'react-router-dom'

  //const endpoint = 'http://localhost:8000/api/branch/store'

export const GetClassRoom = () => {


const [ data,setdata ] = useState([])
const [size ,setSize] = useState("");


useEffect(()=>{
  GetClassRoom()
},[])
const GetClassRoom = async ()=>{
   return await axios.get('http://localhost:8000/api/class/index').then((res)=>{
    setdata(res.data.data);
   
   
 });
 
 //console.log(response.data.data)
}
const store = async (e) => {
  e.preventDefault()
 await axios.post('http://localhost:8000/api/class/store',{size:size})
 //navigate('/')
}
const Delete= async (id) =>{
  
   return await axios.post(`http://localhost:8000/api/class/destroy/${id}`).then((res)=>{
      alert(res.data.message);
   })
  GetClassRoom()
}

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

      <input type='text' className='form-control' placeholder='ادخل فرع'
       Value={size} 
       onChange={(e)=>setSize(e.target.value)}
       />

       
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

// export default Getbranches 
