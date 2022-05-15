import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './signup.css';



export default function Signup() {

  const [pseudo,setPseudo]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [repeat_password,setRepeatPassword]=useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {pseudo,email,password,repeat_password};
  axios
  .post('http://localhost:8081/signup',data)

    .then(function (response) { console.log(response);

      window.localStorage.setItem('token',response.data.accessToken);
      console.log(window.localStorage)
      if (response.status===200){
         <Redirect to ="/"/>
      }

  })
  .catch(function (error) {console.log(error)
    ;if(error){
    alert("Une erreur est survenue , retentez votre inscription")
  }
  
  
  });}

  // loginHandler=()=>{
    
  // }


  return (
    <div>
        <form className='form-signup' onSubmit={handleSubmit}>
        <h3>Nous rejoindre</h3>
            <input className='signup-input' type="text" name='pseudo' placeholder="Pseudo" value={pseudo} onChange={(e)=>{setPseudo(e.target.value)}} />
            <input  className='signup-input' type="email" name='email' placeholder="Email"value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input  className='signup-input' type="password" name='password' placeholder="Mot de passe" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input  className='signup-input' type="password" name='password' placeholder="Confirmation du mot de passe" value={repeat_password} onChange={(e)=>{setRepeatPassword(e.target.value)}} />
            <button className='signup-btn' type="submit">S'inscrire</button>
        </form>
    </div>
  )
}
