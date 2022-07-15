import React from 'react';
import "./buttonNames.css";
import PropTypes from 'prop-types'
// fcurrname is the particular family name for the button,
// which we assign to the button itself
// When the button gets pushed it uses setFname to 
// change the fname state (back in mainBody) from "Home" 
// to the family name
// Then mainBody uses fname to post the appropriate family tree
// and the "Home" button

function ButtonName({setFname, fcurrname}){
  return(
    <button className="button-design" onClick={() =>{
      setFname(fcurrname)}}>{fcurrname}</button>
  )
}
ButtonName.propTypes={ fcurrname: PropTypes.string }
export default ButtonName