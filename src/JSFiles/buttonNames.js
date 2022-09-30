import React from 'react';
import "./buttonNames.css";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// fcurrname is the particular family name for the button,
// which we assign to the button itself
// When the button gets pushed it uses setFname to 
// change the fname state (back in mainBody) from "Home" 
// to the family name
// Then mainBody uses fname to post the appropriate family tree
// and the "Home" button

function ButtonName(props){
  return(
    <button className="button-design" onClick={()=>props.setCurrName(props.famName)}>{props.famName}</button>
  )
}

ButtonName.propTypes={ famName: PropTypes.string }

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
      setCurrName: (buttonFam) => dispatch({ type: 'CHANGE_FILE_NAME', value:buttonFam })
  } 
}

export default connect(mapStateToProps,mapDispatchToProps) (ButtonName)