import React from 'react';
import "./buttonNames.css";
// Need familyName to label button correctly
// Need fname to return which button was pushed
// When the button gets pushed it changes the 
// the fname state from "Home" to the family name
// and the main body then post the appropriate family tree
// and the "Home" button

function FamilyInfoButtons({setBackup}){
  return(
    <button className="button-design" onClick={() =>{
      setBackup(true);
    }}>Further Information</button>
  );
}
export default FamilyInfoButtons