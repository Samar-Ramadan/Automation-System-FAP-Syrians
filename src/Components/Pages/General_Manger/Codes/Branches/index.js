import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"


  import { useNavigate } from 'react-router-dom'

  const endpoint = 'http://localhost:8000/api/branch/store'

export const Getbranches = () => {


const [ data,setdata ] = useState([])
const [No ,setNo] = useState("");

const [name ,setName] = useState("");


useEffect(()=>{
  Getbranches()
},[])
const Getbranches = async ()=>{
   return await axios.get('http://localhost:8000/api/branch/index').then((res)=>{
    setdata(res.data.data);
   
   
 });
 
 //console.log(response.data.data)
}
const store = async (e) => {
  e.preventDefault()
 await axios.post('http://localhost:8000/api/branch/store',{No:No,name:name})
 //navigate('/')
}
const Delete= async (id) =>{
  
   return await axios.post(`http://localhost:8000/api/branch/destroy/${id}`).then((res)=>{
      alert(res.data.message);
   })
  Getbranches()
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
  <input type='number' className='form-control' placeholder='ادخل رقم الفرع'
       Value={No} 
       onChange={(e)=>setNo(e.target.value)}
       />

      <input type='text' className='form-control' placeholder='ادخل اسم الفرع'
       Value={name} 
       onChange={(e)=>setName(e.target.value)}
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
          <h2>جميع الفروع</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                  <th scope='col'>No</th>
                    <th scope='col'>Name</th>
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
                          
                        <td>{data.No}</td>
                          <td>{data.name}</td>
                          <td><button onClick={() => Delete(data.id)} className='btn btn-danger mt-4' >Delete</button></td>
                          {/* <td><Link to={`/UpdateBranches/${No.id,name.id}`} className='btn btn-warning mt-4'>Edit</Link>
                       
                          
                          </td> */}
                   <td>
                    
  
  
                   </td>
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
