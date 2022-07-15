import React,{ useEffect, useState } from "react";
import "./App.css";
import ButtonName from "./JSFiles/buttonNames"
import FamilyInfoButtons from "./JSFiles/familyButtons"
import FamilyTreeText from "./supportingText"
import FamilyInfoText from "./supportingInfo"
function MainBody({headerName, setHeaderName}){
  // fname "Home" yields the first tree and all buttons
  // fname "Oates", etc. yields the requested family tree
  // and just the Home button
  // backup "true" shows the family branch information page
  // backup "false" shows the "Home" or "Family Branch" page
  //    depending on the value of fname
  const [fname, setFname] = useState("Home");
  const [backup, setBackup] = useState(false);
 
  const treePic = require('./TreePics/'+fname+'Tree.png');

  useEffect(()=>{
    setHeaderName(fname);
    console.log(fname)}, [fname]
  )
  useEffect(()=>{
    console.log(backup)}, [backup]
  )
  
  if (fname === "Home"){
    return(
    <div className="main-body">
      <div className="button-list">
        <ButtonName setFname={setFname} fcurrname={"Oates"} />
        <ButtonName setFname={setFname} fcurrname={"Carter"} />
        <ButtonName setFname={setFname} fcurrname={"Martin"}/>
        <ButtonName setFname={setFname} fcurrname={"Fry"}/>
        <ButtonName setFname={setFname} fcurrname={"Irby"}/>
        <ButtonName setFname={setFname} fcurrname={"Stuart"}/>
        <ButtonName setFname={setFname} fcurrname={"Davis"}/>
        <ButtonName setFname={setFname} fcurrname={"Jones"}/>
      </div>
      <div>
        <img className="maintreeimage-specs" src={treePic} alt="Maing Tree"></img>
      </div>
    </div>
    )
  }
  else if(backup){
    return(
      <div className="main-body">
        <div className="button-list">
          <button className="button-design" onClick={()=>setBackup(false)}>Back to {fname}</button>
        </div>
        <div>
          {/* <div className="tree-text-box">
            <FamilyTreeText text={fname}/>
          </div> */}
          <div className="tree-text-box">
            <FamilyInfoText text={fname}/>
          </div>
        </div>
      </div>
      )
    }
  else{
    return(
      <div className="main-body">
        <div className="button-list">
          <ButtonName setFname={setFname} fcurrname={"Home"}/>
        </div>
        <div>
          <img className="treeimage-specs" src={treePic} alt="Advanced Tree"></img>
        </div>
        <div>
          <div className="tree-text-box">
            <FamilyTreeText text={fname}/>
          </div>
          <div className="tree-text-box">
            <FamilyInfoButtons setBackup={setBackup} />
          </div>
        </div>
      </div>
      )
  }
}

export default MainBody