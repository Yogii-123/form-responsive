import { useState } from 'react';
import axios from 'axios'
import './Form.css';
import { useNavigate } from 'react-router-dom';

function FormPage(){
    const [Name,setName]=useState();
    const [Email,setEmail]=useState();
    const [PhoneNumber,setPhoneNumber]=useState();
    const [Position,setPosition]=useState();
    const [ resume,setresume]=useState();
    const navigate=useNavigate();

    

    function namefun1(e){
        setName(e.target.value)
    }

    function Email1(e){
        setEmail(e.target.value)
    }
    function PhoneNumber1(e){
        setPhoneNumber(e.target.value)
    }
    function Position1(e){
        setPosition(e.target.value)
    }
    function  resume1(e){
        setresume(e.target.value)
    }
   
    function sub(e){
        e.preventDefault();
        axios.post("https://63bfb67de262345656ee77f4.mockapi.io/crud",
        {
            Name:Name,
            Email:Email,
            PhoneNumber:PhoneNumber,
            Position:Position,
            resume:resume,
        }
        )
        .then((res)=>{
            console.log(res.data);
            navigate("/Get")

        })

   }
    return(
        <div>
            <h3 className='head'>Job Application Form</h3>
            <form onSubmit={sub}>

               <div className='a'>
                                    <label className='text' htmlFor='name'>Name</label><br></br>                    
                    <input type='text' onChange={namefun1} id='name' required/>
                <br></br>
                </div><br></br>
<div className='b'>
                <label className='password' htmlFor='email'>Email</label><br></br>
                    <input type='email' id='email' onChange={Email1} required/>
                <br></br>
                </div><br></br>
<div className='a'>
 <label className='password' htmlFor='number'>Phone Number</label><br></br>
                    <input type='number' id='number' onChange={PhoneNumber1} required/> 
                <br></br>
                </div><br></br>

<div className='a'>
                <label className='select1'>Which Position(s) are you intersted in?</label><br></br>
                <div onChange={Position1} className='select2'>
                <input type='checkbox'id='software' />
    <label htmlFor='software'>software Developer</label> <br></br>
    <input type='checkbox'id='Graphic'/>
    <label htmlFor='Graphic'>Graphic Designer</label> <br></br>
    <input type='checkbox'id='Quality'/>
    <label htmlFor='Quality'>Quality Analyst</label><br></br>
    </div>

<select  >
  
<option>software Developer</option>
<option>Graphic Designer</option>
<option>Quality Analyst</option>

</select>
<br></br>
</div><br></br>

               <div className='a'> 
               <label className='select1'htmlFor='resume1'>Sumbmit Your Cover letter or resume</label><br></br>
<input type='text'id='resume' onChange={resume1} required/>
<br></br>
</div><br></br>




                <button type='submit' className='btn1'>submit</button>
            </form>

        </div>
    )
}
export default FormPage;