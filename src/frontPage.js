import React,{useState } from "react";

function FrontPage(props){

const [input,setInput] = useState("");
let password = "Percy";

const checkPassword = () =>{
  if(input===password){props.setLogInSuccessful(true)};
  setInput("");
}

return(
  <>
    <div className='pass-word'>
      <label>Enter password:  <input id="passWordID" value={input} placeholder= "Password" onInput={e => setInput(e.target.value)} /></label>
      <button onClick={checkPassword}>Submit Password</button>
    </div>
  </>
)

}
export default FrontPage