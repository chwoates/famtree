import React from "react";
import "./App.css";
import SupportOates from "./JSFiles/supportingOates"
import SupportJones from "./JSFiles/supportingJones"
function FamilyInfoText(props){

  switch(props.text){
    case "Oates":
      return(
        <SupportOates />
      );
    case "Carter":
      return(
        <p>The Carter branch of the family comes from many places. The Carters (originally mostly British in Virginia) come from Missouri via Oregon, while the Valentines are from New York, descending from the earliest Dutch and English settlers of New Amsterdam (New York). The Chapmans lead back to a rich set of English ancestors from New England who arrived during the Great Migration (1620-1650). For example, through the Chapman branch we share common ancestors with President John Adams (Susannah Hawkes and William Cogswell), Lady Diana (Keziah Hibbard and Caleb Bishop), and Johnny Appleseed (Mary Symonds and Edward Chapman). We also descend from the reverend whos served as official minister of the Salem church (Nicholas Noyes) during the witch trials. We even have a haunted BnB in our family in Bethel, Maine. </p>
      );
    case "Martin":
      return(
        <p>The newest part of our family comes principally from Quebec via the northern states, many from upstate New York.</p>
      );
    case "Fry":
      return(
        <p>The other newest part of our family comes from German ancestors (Frye/Moyer) in Pennsylvania and Maryland through Ohio, while the other half of this line (McCabe) comes from Ireland. So Grandma Georgia is principally Irish, German, and French Canadian.</p>
      );
    case "Irby":
      return(
        <p>The Irbys come mainly from English ancestors in Virginia, who then made their way through the South. This family is rich in Revolutionary and Civil War history.</p>
      );
    case "Stuart":
      return(
          <p>The Stuarts come mainly from early English ancestors in Virginia, while the Wilkes come from British and a few Irish from the Atlantic states.</p>
      );
    case "Davis":
      return(
        <p>The Davises come from a variety of backgrounds, mostly British from Virginia.</p>
      );
    case "Jones":
      return(
        <SupportJones />
      );
    default:
      return(
        <p>{props.text}</p>
      );
    }
}
export default FamilyInfoText