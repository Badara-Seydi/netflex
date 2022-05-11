import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image from '../../../../public/image/connecting.png';
const url='http://localhost:8081/login';

const  User = ()=> {
  const [connect, setConnect] = useState(true);
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

const  handleSubmit = async (e) => {
  e.preventDefault();
  const data = {email,password}
  try {
     const res = await axios.get(url,data);
     console.log(res)
     console.log(data)
     console.log(url)
  } catch (error) {
    console.log(error)
  }
}
// const postData = async () => {
// console.log('postData');
// }


  return (
    <div className="connection">
      <form class="form" onSubmit={handleSubmit}>
      <img className="user_logo" onClick={() => setConnect((s) => !s)} src={image} alt="" srcSet="" />
      <input className="connect" id="login" style={{ display: connect ? 'none' : 'flex' }} type="text" placeholder="email ou pseudo" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><input className="connect" id="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}} style={{ display: connect ? 'none' : 'flex' }} type="password" name="password" />
      <button className="connect" id="btn-connect" type='submit' style={{ display: connect ? 'none' : 'flex' }}>Connexion</button>
      </form>
    </div>
  );
};

export default User
