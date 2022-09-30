import React from 'react';
import "./buttonNames.css";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Need familyName to label button correctly
// Need fname to return which button was pushed
// When the button gets pushed it changes the 
// the fname state from "Home" to the family name
// and the main body then post the appropriate family tree
// and the "Home" button

function FamilyInfoButtons(props){
  return(
    <button className="button-design" onClick={()=>props.setBackupTrue()}>Further Information</button>
  );
}

FamilyInfoButtons.propTypes={ setBackupTrue: PropTypes.func}

function mapStateToProps (state) {
  return {
    fname: state.currPage,
    backup: state.backup,
  }
}

function mapDispatchToProps (dispatch) {
  return {
      setBackupTrue: () => dispatch({ type: 'CHANGE_BACKUP', value:true})
}
}

export default connect(mapStateToProps,mapDispatchToProps) (FamilyInfoButtons)