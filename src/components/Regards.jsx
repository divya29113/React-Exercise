
import React from "react";
const Regards = ({userData,sendData}) => {
  function GetDataFromApi(){
    let data="This is the Data";
    sendData(data);
  }
  return (
    <div>
      <h2>Hello {userData.name},How are you?</h2>
      <button onClick={GetDataFromApi}>Click to get data</button>

      </div>
  )
}

export default Regards