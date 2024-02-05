import React,{useState} from 'react'
import './Register.css'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Edit() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nId, setNId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dOB, setDOB] = useState("");
  const [role, setRole] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  return (
    <>
    {/* <div className='register-done'>
      Registered succefully!!!
    </div>
    <div className='register-fail'>
      Registered Failed!!!
    </div> */}
    <div >
        <h2 className='h2register' data-aos="fade-down">Update user</h2>
        <form className='register-form' data-aos="fade-right">
        <h3 className='h4-residence'>Personal information</h3> <br />

        <div className='part1-register'>
            <div className='first-name'> <label id='fname' >First Name:</label>  <br /> 
              <input type="text" name='firstName'  required className='reg-input' />
            </div>
              
            <div className='last-name'><label id='Mname'>Last Name:</label><br />
              <input type="text" name='lastName' required className='reg-input'  />
            </div>
              
            <div className='reg-email'><label id='email'>Email:</label>  <br />    
                  <input type="email" name='email' required className='reg-input'  />
            </div>
              
        </div>

        <div className='part2-register'>
            <div className='reg-id'><label id='NI'>National ID:</label>    <br />
                 <input type="number" name='nationalId' required className='reg-input2' />
            </div>

            <div className='reg-phone'>
                <label id='Fnbr'>Phone Number:</label>    <br />
                <input type="number" name='phone' className='reg-input2' />
            </div>

            <div className='reg-date'>
              <label id='date'>Date of birth:</label>      <br />
              <input type="date" name='DOB' className='reg-dob' />
            </div>
              
        </div> <br />

      
        <h3 className='h4-role'>Role :</h3>
            <div id='role'> 

           <div className='adminoption'>
            <label for="Admin">Admin:</label>
            <input type="radio" name='opt' value="admin"/>
          </div>
          
           <div className='useroption'>
            <label for="User">User:</label>
            <input type="radio" name='opt' value="user" id='user' className='useropt'/>
          </div>
        
          </div>
          <h3 className='h4-residence'>Current Resident:</h3>

          <div className='part3-register-5'>
            
          <div className='reg-akarere'>
                <label id='dis'>District :</label>   <br />
                <input type="text" id='district' name='district' required className='reg-input3' />
          </div>

          <div className='reg-sector'>
               <label id='sec'> Sector :</label>   <br />
               <input type="text" id='sector' name='sector' className='reg-input3' />
          </div>
            
      </div>


       <div className='part4-register'>

          <div className='reg-cell'>
                <label id='cel'>Cell :</label>   <br />
                <input type="text" id='cell' name='cell' className='reg-input4'/>
            </div>
            
          <div className='reg-village'>
              <label id='ville'>Village :</label>   <br />
              <input type="text" className='reg-input4' />
          </div>
            <br />
            <br />
          </div>
              <div id='marital'>
             <h4> Marital Status :</h4>
               <div className='maritaloption'>
               <input type="radio" name='option' value="Single" id='single'/>
              <label for="Single">Single:</label>
              
              
              </div> 
              <div className='maritaloption'>
              <input type="radio" name='option' value="married" id='married' className='marriedopt'/>
              <label for="Married">Married:</label>
              
               
              </div>
              </div>
        
              <br />
        
          <button type='submit' className='reg-btn'>Update </button>
        </form>
      </div>
      </>
  )
}

export default Edit