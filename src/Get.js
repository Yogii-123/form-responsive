import axios  from 'axios';
import { useEffect, useState } from 'react';
import './Get.css';


function Get(){
       const [first,setfirst]=useState([]);



       function getdata1(){
      axios.get("https://63bfb67de262345656ee77f4.mockapi.io/crud")

       .then((res)=>{
        console.log("get data");
        setfirst(res.data)

       })};




       useEffect(()=>{
        getdata1();
       },[]);

    return(


        <div>

         <div>
             {first.length===0 ?(<h3 className='head2'>No Data Found</h3>):

           (<form>
                <h3 className='head'> Details </h3>
                <div className='a'>
                    <label className='text'>Name</label><br></br> 

                { first.map((ex)=>(
                    <p>{ex.Name}</p>
                ))}                   
                <br></br>
                </div><br></br>
<div className='b'>
                <label className='password' >Email</label><br></br>
                { first.map((ex)=>(
                    <p>{ex.Email}</p>
                ))} 
                <br></br>
                </div><br></br>

                <div className='c'>
                <label className='number' >Phone Number</label><br></br>
                {first.map((ex)=>(
                    <p>{ex.PhoneNumber}</p>
                ))} 
                <br></br>
                </div><br></br>

                <div className='d'>

                <label className='select1'>Which Position(s) are you intersted in?</label><br></br>
                {first.map((ex)=>(
                    <p>{ex.Position}</p>
                ))} 
                <br></br>
                </div><br></br>
                <div className='a'>

                <label className='select1'htmlFor='resume1'>Sumbmit Your Cover letter or resume</label><br></br>
                {first.map((ex)=>(
                    <p>{ex.resume}</p>
                ))} 
                </div><br></br>


                         </form>
                         
                         
                         )}
            </div>
        </div>
    )
}
export default Get;