import React,{ useState } from "react";
import './App.css';
import PageHeader from './JSFiles/pageHeader';
import MainBody from './mainBody';
import FrontPage from './frontPage';

function App() {
  const[headerName,setHeaderName]=useState("Oates");
  const[logInSuccessful, setLogInSuccessful]=useState(false);
  if(!logInSuccessful){
    return (
      <>
        <FrontPage logInSuccessful={logInSuccessful} setLogInSuccessful={setLogInSuccessful} />
      </>
    );
  }
  return (
    <>
      <PageHeader fCurrName={headerName} />
      <MainBody headerName={headerName} setHeaderName={setHeaderName}/>
    </>
  );
}
export default App;
