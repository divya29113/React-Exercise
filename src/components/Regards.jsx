
import React from "react";
const Regards = (props) => {
  function GetDataFromApi(){
    let data="This is the Data";
    props.sendData(data);
  }
  return (
    <div>
      <h2>Hello {props.userData.name},How are you?</h2>
      <button onClick={GetDataFromApi}>Click to get data</button>

      </div>
  )
}

export default Regards