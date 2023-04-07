import React  , {useState}from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const endpoint = 'http://localhost:8000/api/branch/store'
const Add = () => {
   const [ name ,setName ] = useState()
//    const [ price ,setprice ] = useState(0)
//    const [ stock ,setstock] = useState(0)
   const navigate = useNavigate()

   const store = async (e) => {
       e.preventDefault()
      await axios.post(endpoint,{name:name})
      navigate('/')
   }

   


  return (
    <div>
        <h3>اضافة فرع</h3>
        <form onSubmit={store}>
       <div className='mb-3'>
           <label className='form-lable'>Name</label>
           <input 
           value={name}
           onChange = {(e)=> setName(e.target.value)}
           type="text"
           className='form-control' />

       </div>

       {/* <div className='mb-3'>
           <label className='form-lable'>Price</label>
           <input 
           value={price}
           onChange = {(e)=> setprice(e.target.value)}
           type="number"
           className='form-control' />

       </div> */}

       {/* <div className='mb-3'>
           <label className='form-lable'>Stock</label>
           <input 
           value={stock}
           onChange = {(e)=> setstock(e.target.value)}
           type="number"
           className='form-control' />

<div>

</div>
       </div> */}
      <button className='btn btn-primary'>Store</button>
        </form>
    </div>
  )
}

export default Add