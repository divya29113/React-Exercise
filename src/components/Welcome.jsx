
import Regards from "./Regards";
function Welcome(){
    let info={name:"sanjay" ,place:"chennai"};
    function GetDataFromChild(data){
        console.log(data);
    }
    return(<div>
        <h1>Hello {info.name} welcome to the course</h1>
        <Regards userData={info} sendData={GetDataFromChild} />
    </div>)
}
export default Welcome;