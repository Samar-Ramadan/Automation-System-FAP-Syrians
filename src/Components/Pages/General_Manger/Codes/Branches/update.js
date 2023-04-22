import React  , {useState}from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import AuthUser from '../AuthUser';

const UpdateBranches= () => {
   const [ No ,setNo ] = useState()
   const [ name ,setName ] = useState()
  // const [ status ,setStatus] = useState(0)
   const navigate = useNavigate()
   const {id} = useParams();
   //const {http} = AuthUser();
   
   const store =  async(e) => {
    e.preventDefault()
    
    const formData = new FormData();
    formData.append('No', No);
    formData.append('name', name);

     
  return await axios.post(`http://localhost:8000/api/branch/update/${id}`, formData).then((res)=>{
        navigate('/index')
       }).catch(function (error) {
        console.log(error);
      });
     
   }

   


  return (
    <div>
        <h3>UPdate Branch</h3>
        <form onSubmit={store}>
       <div className='mb-3'>

       <label className='form-lable'>No</label>
           <input 
           value={undefined}
           onChange = {(e)=> setNo(e.target.value)}
           type="text"
           className='form-control' />

        
           <label className='form-lable'>Name</label>
           <input 
           value={undefined}
           onChange = {(e)=> setName(e.target.value)}
           type="text"
           className='form-control' />

       </div>

    
       {/* <div className='mb-3'>
           <label className='form-lable'>Status</label>
           <input 
           value={status}
           onChange = {(e)=> setStatus(e.target.value)}
           type="number"
           className='form-control' />

       </div> */}


      <button className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}
export default UpdateFile