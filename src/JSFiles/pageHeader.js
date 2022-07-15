import React from 'react';
import "./pageHeader.css";
import mineImage from 'C:/Users/oates/Desktop/jsPracticeFiles/famtree/src/TreePics/cornwallmine.jpg';
import bnbImage from 'C:/Users/oates/Desktop/jsPracticeFiles/famtree/src/TreePics/chapmaninn.jpg';

function PageHeader({fCurrName}){
  if(fCurrName==="Home")
    fCurrName="Oates";
  
  return(
    <div className="oates-header">
      <img className="image-specs" src={mineImage} alt="Mine"></img>
      <p>{fCurrName} Family History</p>
      <img className="image-specs" src={bnbImage} alt="BnB"></img>
    </div>
  )
}
export default PageHeader;