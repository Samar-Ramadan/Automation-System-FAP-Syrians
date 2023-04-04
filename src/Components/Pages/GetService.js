import axios from 'axios';
// import { response } from 'express';
import { async } from 'q';
import React  , {useState ,useEffect}from 'react';

export default function GetService(){

    const [data ,setdata] = useState([]);
    const [value ,setvalue] = useState("");
    const [sortvalue ,setsortvalue] = useState("");
    const [currentpage ,setCurrentpage] = useState(0);
    const [limitpage] = useState(4);
    const [sortfiltervalue,setsortfiltervalue] = useState("");
    const [opration,setopration] = useState("");
    


    const loadUserData = async(start,end,increas,optType=null,filterorsortvalue)=>{
        switch(optType){
    case "Search":
      setopration(optType);
      setsortvalue("");
      return await axios.get(`http://localhost:5000/users?q=${value}&_s tart=${start}&_end=${end}`).then(response=>{
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
      }

      return{
        loadUserData
      }
}


