import React,{useEffect,useState, Fragment } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import {Button,Table} from "react-bootstrap"
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"


  import { useNavigate } from 'react-router-dom'

  //const endpoint = 'http://localhost:8000/api/branch/store'

export const GetClassRoom = () => {
  let history=useNavigate();

const [ data,setdata ] = useState([])
const [No ,setNo] = useState("");
const [name ,setName] = useState("");
const [size ,setSize] = useState("");
const [branch_id ,setbranchid] = useState("");
const [branchList, setbranchList] = useState([{'name':'','id':''}])

// useEffect(() =>{
//   const fetchData = async ()=>{
//       const response = await fetch(`http://localhost:8000/api/branch/index`).then((res)=>{
//         setbranchList(res.data.data);
//    //   setbranchList(newData);
      
//        console.log(response.data.data)
//   });

// }
 
//  fetchData();
 
// }, [])
// const handleChange = (event) =>{
//   setbranchid(event.target.value);
// }


 useEffect(()=>{
  GetClassRoom()
 },[])
const GetClassRoom = async ()=>{
   return await axios.get('http://localhost:8000/api/class/index').then((res)=>{
    setdata(res.data.data);
   
   
 });
 
 //console.log(response.data.data)
}
// const store = async (e) => {
//   e.preventDefault()
//  await axios.post('http://localhost:8000/api/class/store',{No:No,name:name,size:size,branch_id:branch_id})
//  //navigate('/')
// }
const Delete= async (id) =>{
  
   return await axios.post(`http://localhost:8000/api/class/destroy/${id}`).then((res)=>{
      alert(res.data.message);
   })
  GetClassRoom()
  history('/index');
}

 return (


  <div className="services">
  <MDBContainer>
  {/* <form onSubmit={store}>
       <div className='mb-3'>
           <label className='form-lable'>الرقم</label>
           <input type='number' className='form-control' placeholder='ادخل رقم القاعة'
       Value={No} 
       onChange={(e)=>setNo(e.target.value)}
       /> 
       </div>
       <div className='mb-3'>
           <label className='form-lable'>الأسم</label>
           <input type='text' className='form-control' placeholder='ادخل اسم القاعة'
       Value={name} 
       onChange={(e)=>setName(e.target.value)}
       /> 
       </div>
       <div className='mb-3'>
           <label className='form-lable'>السعة</label>
           <input type='number' className='form-control' placeholder='ادخل سعة القاعة'
       Value={size} 
       onChange={(e)=>setSize(e.target.value)}
       /> 
       </div>
       <div className='mb-3'>
           <label className='form-lable'>الفرع</label>
           <select className="form-control" value={branch_id} onChange={handleChange}>
              <option value="">Choose Branch Name</option>

        {branchList.map(Branch => (
              <option value={Branch.name} key={Branch.id} >{Branch.name}</option>
    
              ))
              }

          </select>
       </div>



      
       
       
      <MDBBtn type='submit' style={{marginBottom:25}}  color='info'>
        حفظ

      </MDBBtn>
     

        </form> */}











<div style={{marginTop:"100px"}}>
          <h2>جميع القاعات</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                  <th scope='col'>No</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Size</th>
                    <th scope='col'>branchid</th>
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
                        <td>{data.size}</td>
                          <td>{data.branch_id}</td>
                          <td><button onClick={() => Delete(data.id)} className='btn btn-danger mt-4' >Delete</button></td>
                   <td></td>
                        </tr>
    
                      </MDBTableBody>
    
    
                        ))
                      )
                    }
                  </MDBTable>
                  <Link className="d-grid gap-2" to="/ClassRoom/create">
                <Button size="lg">Create</Button>
            </Link>
                </MDBCol>
              </MDBRow>

</div>







              </MDBContainer>
   </div>
 )
}