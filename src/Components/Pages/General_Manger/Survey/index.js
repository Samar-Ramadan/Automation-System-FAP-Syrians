import axios from 'axios';
// import { response } from 'express';
import { async } from 'q';
//import GetService from '../../GetService';
import React  , {useState ,useEffect}from 'react';
import {MDBTable,MDBTableBody,MDBTableHead,
  MDBRow,MDBCol,MDBContainer,MDBBtn,MDBBtnGroup,
  MDBPagination,MDBPaginationItem,MDBPaginationLink} from "mdb-react-ui-kit"
import { directive } from '@babel/types';
function Survey () {
  //const {loadUserData} = GetService();

  const [data ,setdata] = useState([]);
  const [value ,setvalue] = useState("");
  const [sortvalue ,setsortvalue] = useState("");
  const [currentpage ,setCurrentpage] = useState(0);
  const [limitpage] = useState(4);
  const [sortfiltervalue,setsortfiltervalue] = useState("");
  const [opration,setopration] = useState("");

  const SortOptions=["name","address","email","phone","status"];
  useEffect(()=>{
  loadUserData(0,4,0);
  },[]);
  const loadUserData=async(start,end,increas,optType=null,filterorsortvalue)=>{
    switch(optType){
case "Search":
  setopration(optType);
  setsortvalue("");
  return await axios.get(`http://localhost:5000/users?q=${value}&_start=${start}&_end=${end}`).then(response=>{
      setdata(response.data);
      setCurrentpage(currentpage+increas)
     
    
    })
    .catch((err)=>console.log(err));
    case "sort":
  setopration(optType);
  setsortfiltervalue(filterorsortvalue);
  return await axios.get(`http://localhost:5000/users?_sort=${filterorsortvalue}&_order=asc&_start=${start}&_end=${end}}`).then(response=>{
      setdata(response.data);
      setCurrentpage(currentpage+increas)
   
    
    })
    .catch((err)=>console.log(err));
    case "filter":
      setopration(optType);
  setsortfiltervalue(filterorsortvalue);
  return await axios.get(`http://localhost:5000/users?status=${filterorsortvalue}&_order=asc&_start=${start}&_end=${end}}`).then(response=>{
      setdata(response.data);
      setCurrentpage(currentpage+increas)
   
    
    })
    .catch((err)=>console.log(err));
      
    default:

    return await axios.get(`http://localhost:5000/users?_start=${start}&_end=${end}`).then(response=>{

    setdata(response.data)
    setCurrentpage(currentpage+increas)
    }
    
    
    ).catch((err)=>console.log(err));
  }
  };


  const handelreset=()=>{
    setopration("");
    setvalue("");
    setsortfiltervalue("");
    setsortvalue("");

loadUserData(0,4,0);
  }


  const handelsearch=async(e)=>{

    e.preventDefault();
    loadUserData(0,4,0,"Search")
    
    
  };



  const handelsort=async(e)=>{

    let value=e.target.value;
    setsortvalue(value);
    loadUserData(0,4,0,"sort",value)
    // return await axios.get(`http://localhost:5000/users?_sort=${value}&_order=asc`).then(response=>{
    //   setdata(response.data);
   
    
    // })
    // .catch((err)=>console.log(err));
  };


  const handelfilter=async(value)=>{

  loadUserData(0,4,0,"filter",value);
    
    // return await axios.get(`http://localhost:5000/users?status=${value}`).then(response=>{
    //   setdata(response.data);
   
    
    // })
    // .catch((err)=>console.log(err));
  };
const renderpagination=()=>{
  if(currentpage===0){
    return(
<MDBPagination className='mb-0' style={{backgroundColor:"white"}}>
  <MDBPaginationItem  style={{backgroundColor:"white"}}>
    <MDBPaginationLink  style={{backgroundColor:"white"}}>
      1
    </MDBPaginationLink>
   

    </MDBPaginationItem>
<MDBPaginationItem >
<MDBBtn onClick={()=>loadUserData(4,8,1,opration,sortfiltervalue)}>Next</MDBBtn>
  </MDBPaginationItem>

</MDBPagination>

    );
  }
  else if(currentpage < limitpage-1 && data.length===limitpage){
    return(
      <MDBPagination className='mb-0' style={{backgroundColor:"white"}}>
        <MDBPaginationItem>
        <MDBBtn onClick={()=>loadUserData((currentpage-1)*4,currentpage*4,-1,opration,sortfiltervalue)}>prev
        </MDBBtn>
        </MDBPaginationItem>
  <MDBPaginationItem>

<MDBPaginationItem>
<MDBPaginationLink style={{backgroundColor:"white"}}>
    {currentpage+1}  
    </MDBPaginationLink>
</MDBPaginationItem>

   
   

    </MDBPaginationItem>
    
<MDBPaginationItem>
<MDBBtn onClick={()=>loadUserData((currentpage+1)*4,(currentpage+2)*4,1,opration,sortfiltervalue)}>Next</MDBBtn>
  </MDBPaginationItem>
</MDBPagination>

    );

  }else{
    return(
      <MDBPagination className='mb-0' style={{backgroundColor:"white"}}>

<MDBPaginationItem>
<MDBBtn onClick={()=>loadUserData((currentpage-1)*4,currentpage*4,-1,opration,sortfiltervalue)}>prev</MDBBtn>
  </MDBPaginationItem>
  <MDBPaginationItem>
    <MDBPaginationLink style={{backgroundColor:"white"}}>
      {currentpage+1}
    </MDBPaginationLink>
   

    </MDBPaginationItem>

</MDBPagination>
    )
  }
};

  return (
    <div className="services">
      <MDBContainer>
        <form style={{
          margin:"auto",
          padding:"15px",
          maxWidth:"500px",
          alignContent:"center",

        }}
        className='d-flex input-group w-auto' onSubmit={handelsearch}>

          <input type='text' className='form-control' placeholder='search...'
           Value={value} 
           onChange={(e)=>setvalue(e.target.value)}
           />

           
           {/* <MDBBtnGroup> */}
          <MDBBtn type='submit' style={{marginBottom:25}}  color='dark'>
            search

          </MDBBtn>
          <MDBBtn className='mx-2' color='info' style={{marginBottom:25}} onClick={()=>handelreset()}>
            reset

          </MDBBtn>

           {/* </MDBBtnGroup> */}

        </form>

        <div style={{marginTop:"100px"}}>
          <h2>filter sorting pagination</h2>
          <MDBRow>
            <MDBCol size="12">
              <MDBTable>
                <MDBTableHead dark>
                  <tr>
                    <th scope='col'>No</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Status</th>
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
                    data.map((Item ,Index)=>(
                  <MDBTableBody key={Index}>
                    <tr>
                      <th scope='row'>{Index+1}</th>
                      <td>{Item.name}</td>
                      <td>{Item.email}</td>
                      <td>{Item.phone}</td>
                      <td>{Item.address}</td>
                      <td>{Item.status}</td>
                    </tr>

                  </MDBTableBody>


                    ))
                  )
                }
              </MDBTable>

            </MDBCol>
          </MDBRow>
<div style={{
          marginTop:"15px",
          marginLeft:"250px",
          padding:"15px",
          maxWidth:"500px",
          alignContent:"center",}} > {renderpagination()} 
          </div>
        </div>
        {data.length>0&&(
          <MDBRow>
          <MDBCol size="8">
            <h5>Sort By:</h5>
            <select style={{width:"25%",borderRadius:"3px",height:"30px",backgroundColor:"#54B4D3"}}  onChange={handelsort}
            value={sortvalue}>
              <option   >please select value</option>
              {SortOptions.map((item,index)=>(
              
              <option  style={{backgroundColor:"white"}} value={item} key={index}>{item}</option>

              ))}

            </select>

          </MDBCol>
          <MDBCol size="4">
            <h5>
              filter By Status:
            </h5>
            <MDBBtnGroup>
            <MDBBtn color='success' onClick={()=>handelfilter("active")} style={{margin:"2px"}}>
             Active
            </MDBBtn > 
            <MDBBtn color='danger' onClick={()=>handelfilter("Inactive")} style={{margin:"2px"}}>
              Inactive
            </MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>

        )}
        
      </MDBContainer>
    </div>
  );
};

export default Survey;