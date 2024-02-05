import React, {useState} from 'react'
import './EditCitizen.css';
function EditCitizen() {


    
  //  const [formData, setFormData] = useState({
  //   fullNames: '',
  //   dateOfBirth: '',
  //   placeOfBirth: '',
  //   placeOfBirth: '',
  //   gender: '',
  //   maritalStatus: '',
  //   isibo: '',
  //   tenure: '',
  //   citizenshipStatus: '',
  //   countryOfOrigin: '',
  //   immigrationStatus: '',
  //   employmentStatus: '',
  //   occupation: '',
  //   industryOfWork: '',
  //   availabilityOfBasicAmenities: [],
  //   numberOfHouseholdPeople: '',

  //  })

  //  const onChangeHandler = (event) =>{
  //   console.log(event)
  //   if(event.target.name === 'availabilityOfBasicAmenities'){

  //     let copy = {... formData}
  //     if(event.target.checked){
  //       copy.availabilityOfBasicAmenities.push(event.target.value)

  //     }else{
  //     copy.availabilityOfBasicAmenities = copy.availabilityOfBasicAmenities.filter(el => el !== event.target.value )
  //     }

  //     setFormData(copy)

  //   }else{
  //  setFormData(()=>({
  //   ...formData,
  //   [event.target.name]: event.target.value
  //  }))
  // }

  //  }
  return (
    <>
    

    <div className='register-container'>
        <h2 className='h2register' data-aos="fade-down">citizen edit form</h2>
        <form action='#' method='POST' className='register-form' data-aos="fade-right">
        <h3 className='h4-residence'>Individual information:</h3> 

        <div className='part1-register'>
            <div className='first-name'> <label id='fname' >FullName:</label>  <br /> 
              <input type="text" name='firstName'  required className='reg-input' />
            </div>
              
           
            <div className='reg-email'><label id='email'>Place of Birth:</label>  <br />    
                  <input type="text" name='email' required className='reg-input'  />
            </div>
            <div className='reg-date'>
              <label id='date'>Date of birth:</label>      <br />
              <input type="date" name='DOB' className='reg-dob' />
            </div>
              
              
        </div>
        <div className='part1-register-2'>
        <div className='first-name'> <label id='fname' >National Id:</label>  <br /> 
              <input type="number" name='firstName'  required className='reg-input' />
            </div>
            <div className='first-name'> <label id='fname' >Email:</label>  <br /> 
              <input type="email" name='firstName'  required className='reg-input' />
            </div>
              
           
            <div className='reg-email'><label id='email'>Phone:</label>  <br />    
                  <input type="number" name='email' required className='reg-input'  />
            </div>
                   
              
        </div>

       <br />

      
        <h3 className='h4-role'>Demographic information :</h3>
              
          <div className='demographic'>
          <h4>Gender:</h4>
            <div id='role'> 

           <div className='adminoption'>
           <input type="radio" name='opt' value="admin"/>
            <label for="Admin">Male</label>
            
          </div>
          
           <div className='useroption'>
           <input type="radio" name='opt' value="user" id='user' className='useropt'/>
            <label for="User">Female</label>
            
          </div>
        
          </div>
          <h4>Martal status</h4>
          <div id='role'> 

           <div className='adminoption'>
           <input type="radio" name='opt' value="admin"/>
            <label for="Admin">Single</label>
            
          </div>
          
           <div className='useroption'>
           <input type="radio" name='opt' value="user" id='user' className='useropt'/>
            <label for="User">Married</label>
            
          </div>
        
          </div>
          </div>
         <h3 className='h4-role'>Residential Information</h3>
          <div className='demographic'>
          <h4>Isibo:</h4>
            <div id='role'> 

           <div className='adminoption'>
           <label for="Admin"></label>
           <input type="text" name='opt'/>
            
            
          </div>
          
           
        
          </div>
          <h4>Tenure:</h4>
          <div id='role'> 

           <div className='adminoption'>
           <input type="radio" name='opt' value="admin"/>
            <label for="Admin">Owned:</label>
            
          </div>
          
           <div className='useroption'>
           <input type="radio" name='opt' value="user" id='user' className='useropt'/>
            <label for="User">Rented:</label>
            
          </div>
        
          </div>
          </div>

          <h3 className='h4-residence'>Citizenship and Employment status:</h3>
          <div className='part3-register'>
            
          <div className='reg-akarere'>
                <label id='dis'>Citizenship status:</label>   <br />
                <input type="text" id='district' name='district' required className='reg-input3' />
          </div>

          <div className='reg-sector'>
               <label id='sec'> Country of Origin:</label>   <br />
               <input type="text" id='sector' name='sector' className='reg-input3' />
          </div>
          <div className='reg-sector'>
               <label id='sec'> Immigration status:</label>   <br />
               <input type="text" id='sector' name='sector' className='reg-input3' />
          </div>
            
      </div>


       <div className='part4-register'>

          <div className='reg-cell'>
                <label id='cel'>Employment Status:</label>   <br />
                <input type="text" id='cell' name='cell' className='reg-input4'/>
            </div>
            
          <div className='reg-village'>
              <label id='ville'>Occupation:</label>   <br />
              <input type="text" className='reg-input4' />
          </div>
          <div className='reg-village'>
              <label id='ville'>Industry of Work:</label>   <br />
              <input type="text" className='reg-input4' />
          </div>
            <br />
            <br />
          </div>
              <div id='marital'>
             <h4 className='h4-menities'> Availability of basic amenities:</h4>
               <div className='maritaloption'>
               <input type="checkbox" name='option' value="Single" id='single'/>
              <label for="Single">Water:</label>
               
              
              </div> 
              <div className='maritaloption'>
              <input type="checkbox" name='option' value="married" id='married' className='marriedopt'/>
              <label for="Married">Electricity:</label>
               
               
              </div>
              <div className='maritaloption'>
              <input type="checkbox" name='option' value="married" id='married' className='marriedopt'/>
              <label for="Married">Sanitation:</label>
               
               
              </div>
              
              </div>

              <h4 className='h4-role'> House Hold composition :</h4>
              
              <div className='part1-register'>
            <div className='first-name'> <label id='fname' >Number of children:</label>  <br /> 
              <input type="text" name='firstName'  required className='reg-input' />
            </div>
              
           
            <div className='reg-email'><label id='email'>Number of people:</label>  <br />    
                  <input type="text" name='email' required className='reg-input'  />
            </div>
           
              
        </div>
        
             
        
          <button type='submit' className='reg-btn'>Update </button>
        </form>
      </div>

    </>
  )
}

export default EditCitizen
