import React,{useState } from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function FrontPage(props){

  const [input,setInput] = useState("");
  let password = "Percy";

  const checkPassword = () =>{
    if(input===password) 
      props.loginSuccess();
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

FrontPage.propTypes = {
  loginSuccess : PropTypes.func,
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginSuccess: () => dispatch({ type: 'UPDATE_LOGIN' })
  }  
}

export default connect(mapStateToProps,mapDispatchToProps) (FrontPage)