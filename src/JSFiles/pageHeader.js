import React from 'react';
import "./pageHeader.css";
import mineImage from 'C:/Users/oates/Desktop/jsPracticeFiles/famtree/src/TreePics/cornwallmine.jpg';
import bnbImage from 'C:/Users/oates/Desktop/jsPracticeFiles/famtree/src/TreePics/chapmaninn.jpg';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function PageHeader(props){
  let headName = props.headerName
  
  if(headName==="Home"){
    headName = "Our";
  }
    
  return(
    <div className="oates-header">
      <img className="image-specs" src={mineImage} alt="Mine"></img>
      <p>{headName} Family History</p>
      <img className="image-specs" src={bnbImage} alt="BnB"></img>
    </div>
  )
}

PageHeader.propTypes = {
  headerName : PropTypes.string,
}

function mapStateToProps (state) {
  return {
    headerName: state.currPage,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginSuccess: () => dispatch({ type: 'UPDATE_LOGIN' })
  }  
}
export default connect(mapStateToProps,mapDispatchToProps) (PageHeader);