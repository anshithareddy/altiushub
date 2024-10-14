import {React} from 'react'
import {form} from 'react-hook-form'
import '../Login/login.css';
import { AiFillLock } from 'react-icons/ai'
import { AiFillBook } from 'react-icons/ai'
import { AiFillFileAdd } from 'react-icons/ai'
function login() {
  function validate(){
    const p=document.getElementById("password");
    // if(p.length()<=8){
    //   alert("Password must be at least 8 characters");
    // }
  };
  return (
    <div>
        <div className='heading'>
          <div>
          <h1>Task Rabbit</h1>
          </div>
          <div className='dashboard'>
          <a href="login.js"><AiFillLock></AiFillLock>
          </a>
          <a href='tasks.js'><AiFillBook></AiFillBook></a>
          <a href="fileUpload.js"><AiFillFileAdd></AiFillFileAdd></a>
            </div>
        </div>
        <div className='head'>
        <h1>User Login</h1>
        </div>
        <div className='login'>
        <form>
            <label for="username">Username : </label>
            <input type="text" id="username" name="username" required></input>
            <br></br>
            <label for="password">Password  : </label>
            <input type="text" id="password" name="password" required></input>
            <br></br>
            <button className='btn'onClick={validate()}>Submit</button>
          </form>
        </div>
           
    </div>
  )
}

export default login