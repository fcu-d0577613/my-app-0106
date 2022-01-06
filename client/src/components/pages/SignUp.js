import React,{useState} from 'react';
import '../../App.css';
import '../style/SignUp.css';
import { useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth.service";

export default function SignUp() {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");
  let [message, setMessage] = useState("");

  const handleChengUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleChangEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangPassword = (e) => {
    setPassword(e.target.value);
  }
  const handleChangConfirmPassword = (e) => {
    setConfirmpassword(e.target.value);
  }
  const handleResgister = () => {
    if(password !== confirmpassword){
      setMessage("pasword not equal confirmpassword");
    }
    AuthService.register(username, email, password)
    .then(()=>{
      window.alert("Register success! ");
      navigate("/login");
    })
    .catch((error)=>{
      console.log(email);
      console.log(error.response);
      setMessage(error.response.data);
    })
  }
  
  const handleToLogin = () =>{
    navigate("/login")
  } 
  return (
    <div className='SignUp-container'>
      
      {message && <div className="alert alert-danger">{message}</div>}
      <div className='SingUp-Wrapper'>
      
        <div>
          <h2>註冊 </h2>
          
          <div className="tab"></div>
          <input onChange={handleChengUsername} type="text" className="username" placeholder="使用者全名"name="username" />
          <div className="tab"></div>
          <input onChange={handleChangEmail}  type="text" className="useremail" placeholder="信箱"name="useremail" />
          <div className="tab"></div>
          <input onChange={handleChangPassword} type="text" className="password" placeholder="密碼"name="password" />
          <div className="tab"></div>
          <input onChange={handleChangConfirmPassword} type="text" className="confirmpassword" placeholder="確認密碼"name="confirmpassword" />
          <div className="tab"></div>
          <input onClick={handleResgister}  type="button" value="註冊" className="register"></input>
          <h5 onClick={handleToLogin}  className='orlogin'>登入</h5>
        </div>
        
      </div>
    </div>
  )
}
