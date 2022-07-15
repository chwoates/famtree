import React from 'react';
import "./App.css";

function TreeDiagram({familyName}){
    const treePic = require('./'+familyName+'Tree.png');
    return(
      <div>
        <img className="treeimage-specs" src={treePic} alt=""></img>
      </div>
    )
}
export default TreeDiagram