
import profile from "../assets/a.png";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import pass from "../assets/pass.png";
function Login() {
  const navigate = useNavigate();
  return (
    <Nav>
  
    <center> 
    <form>
        <div class="container"> 
        <div>   <img src={profile} style={{borderRadius:"50%"}} height="70px" width="70px"/></div>
     
            <label>Username : </label> 
            <input type="text" placeholder="Enter Username" name="username" required/>
            <label>Password : </label> 
            <input type="password" placeholder="Enter Password" name="password" required/>
            <button type="submit">Login</button> 
            <input type="checkbox" checked="checked"/> Remember me 
            <button type="button" class="cancelbtn"  onClick={()=>navigate("/")}> Cancel</button> 
            Forgot <a href="#"> password? </a> 
        </div> 
    </form>  </center> 

  </Nav>
  );
}
const Nav = styled.nav`
button { 
  background-color: #48cae4; 
  width: 100%;
   color: white; 
   padding: 15px; 
   margin: 10px 0px; 
   border: none; 
   cursor: pointer; 
   border-radius:8px
    } 
form { 
  display:flex; flex-direction:column; justify-content:center;
  min-height:60vh;
   border: 3px solid #f1f1f1; 
   width:500px
   
} 
input[type=text], input[type=password] { 
   width: 100%; 
   margin: 8px 0;
   padding: 12px 20px; 
   display: inline-block; 
   border: 2px solid #f1f1f1;
   border-radius:8px; 
   box-sizing: border-box; 
}
button:hover { 
   opacity: 0.7; 
} 
.cancelbtn { 
   width: auto; 
   padding: 10px 18px;
   margin: 10px 5px;
} 
@media screen and (min-width: 280px) and (max-width: 1080px) {
  form { 
    border: 3px solid #f1f1f1; 
    width:100%
 } 
}

.container { 
   padding: 25px; 
  
} 
`;
export default Login;