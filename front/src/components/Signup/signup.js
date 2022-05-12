import React, {useState} from 'react';
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
  .then(function (response) { console.log(response.data)})
  .catch(function (error) {console.log(error)});}


  return (
    <div>
        <form className='form-signup' onSubmit={handleSubmit}>
        <h3>Nous rejoindre</h3>
            <input type="text" name='pseudo' placeholder="Pseudo" value={pseudo} onChange={(e)=>{setPseudo(e.target.value)}} />
            <input type="email" name='email' placeholder="Email"value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" name='password' placeholder="Mot de passe" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <input type="password" name='password' placeholder="Confirmation du mot de passe" value={repeat_password} onChange={(e)=>{setRepeatPassword(e.target.value)}} />
            <button type="submit">S'inscrire</button>
        </form>
    </div>
  )
}
