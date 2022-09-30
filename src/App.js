import React from "react";
import './App.css';
import PageHeader from './JSFiles/pageHeader';
import MainBody from './mainBody';
import FrontPage from './frontPage';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function App(props) {
 
  if(!props.loginSuccessful){
    return (
      <>
        <FrontPage/>
      </>
    );
  }
  return (
    <>
      <PageHeader/>
      <MainBody/>
    </>
  );
}

App.propTypes = {
  loginSuccessful : PropTypes.bool,
}

function mapStateToProps (state) {
  return {
    loginSuccessful: state.loginSuccessful,
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }  
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
