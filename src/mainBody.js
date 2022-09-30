import React from "react";
import "./App.css";
import ButtonName from "./JSFiles/buttonNames"
import FamilyInfoButtons from "./JSFiles/familyButtons"
import FamilyTreeText from "./supportingText"
import FamilyInfoText from "./supportingInfo"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


function MainBody(props){
  // fname "Home" yields the first tree and all buttons
  // fname "Oates", etc. yields the requested family tree
  // and just the Home button
  // backup "true" shows the family branch information page
  // backup "false" shows the "Home" or "Family Branch" page
  //    depending on the value of fname
 
  const treePic = require('./TreePics/'+props.fname+'Tree.png');
  const famNames = ['Oates', 'Carter','Martin','Fry','Irby','Stuart','Davis','Jones']
  const famNames2 = [{id:1,familyName:'Oates'}, {id:2,familyName:'Carter'}]
  if (props.fname === "Home"){
    return(
    <div className="main-body">
      <div className="button-list">
      {famNames.map((fam) => (
        <ButtonName  famName={fam} key={fam.index} />
        ))}
      </div>
      <div>
        <img className="maintreeimage-specs" src={treePic} alt="Main Tree"></img>
      </div>
    </div>
    )
  }
  else if(props.backup){
    return(
      <div className="main-body">
        <div className="button-list">
          <button className="button-design" onClick={()=>props.setBackupFalse()}>Back to {props.fname}</button>
        </div>
        <div>
          <div className="tree-text-box">
            <FamilyInfoText text={props.fname}/>
          </div>
        </div>
      </div>
      )
    }
  else{
    return(
      <div className="main-body">
        <div className="button-list">
          <ButtonName famName={"Home"}/>
        </div>
        <div>
          <img className="treeimage-specs" src={treePic} alt="Advanced Tree"></img>
        </div>
        <div>
          <div className="tree-text-box">
            <FamilyTreeText text={props.fname}/>
          </div>
          <div className="tree-text-box">
            <FamilyInfoButtons/>
          </div>
        </div>
      </div>
      )
  }
}

MainBody.propTypes = {
  backup : PropTypes.bool,
  fname: PropTypes.string,
  setBackupFalse: PropTypes.func,
}

function mapStateToProps (state) {
  return {
    fname: state.currPage,
    backup: state.backup,
  }
}

function mapDispatchToProps (dispatch) {
  return {
      setBackupFalse: () => dispatch({ type: 'CHANGE_BACKUP', value:false }),
    } 
}

export default connect(mapStateToProps,mapDispatchToProps) (MainBody)