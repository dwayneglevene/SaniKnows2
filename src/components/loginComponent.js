import {useState,useEffect} from "react";
import Axios from "axios";
import JoinComponent from "./joinComponent";


function LoginComponent(){

  const [emailChecker,setemailChecker] = useState("");
  const [passCheck,setpassChecker] = useState("");

 function checker(){
  if((setEmail === setemailChecker) && (setPassword === setpassChecker)){
   alert("hi mom")
 }
}


 
    return(



        <div>

<form>
      

      <label>Email:
        <input type="text" onChange ={(event)=>{
        setemailChecker(event.target.value);
      }} />
      </label>

      <label>Password:
        <input type="text" onChange ={(event)=>{
        setpassChecker(event.target.value);
      }} />
      </label>

      <button onClick={checker}>Submit</button>

    </form>

    {/* Practice */}

        {/* {listOfUsers.map((user) =>{
          return(
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>USername: {user.userName}</h1>
            </div>
          )

        } */}
        {/* )
        }
 */}


    {/* Practcie */}


    {/* <div>
      <input type ="text" placeholder ="Name.." onChange ={(event)=>{
        setName(event.target.value);
      }}/>
      <input type ="number" placeholder ="Age.." onChange ={(event)=>{
        setAge(event.target.value);
      }}/>
      <input type ="text" placeholder ="Username.. " onChange ={(event)=>{
        setuserName(event.target.value);
      }}/>
      <button onClick={createUser}>Submit</button>


    </div> */}


        </div>

    )
}

export default LoginComponent;