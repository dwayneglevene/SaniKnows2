import {useState,useEffect} from "react";
import Axios from "axios";

function JoinComponent(){

  const [listOfUsers,setListOfUSers] = useState([]);
  const [firstName,setfirstName] = useState("tim");
  const [lastName,setlastName] = useState("LEvene");
  const [email,setEmail] = useState("peanutbutter34@gmail.com");
  const [password,setPassword] = useState("")


  // useEffect(() =>{
  //   Axios.get("http://localhost:3001/getUsers").then((response) =>{
  //    setListOfUSers(response.data);
  //   });

  //   //http://localhost:3001/getUsers
  // }, []);


  const createUser =() =>{
    Axios.post("http://localhost:3001/createUser",{
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }).then((response) =>{
      alert("user created :)")
    });
  };

  
  // console.log(name)

//   const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
//     const postURL = 'mongodb+srv://SaniKnows:ROCc34Ak7T6mfAcR@cluster0.wiligqi.mongodb.net/?retryWrites=true&w=majority' //Our previously set up route in the backend
//     fetch(postURL, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ // We should keep the fields consistent for managing this data later
//             name: name,
            
//         })
//     })
//     .then(()=>{
//         // Once posted, the user will be notified 
//         alert('You have been added to the system!');
//     })
// }
 



    return(
      
        
        <div>

<form>

<label>First name:
        <input type="text"  onChange={(event) =>{
          setfirstName(event.target.value)

        }}/>
      </label>

      <label>Last name:      </label>

        <input type="text"  onChange={(event) =>{
          setlastName(event.target.value)
        }} />
      

      <label>Email:
        <input type="text"  onChange={(event =>{
          setEmail(event.target.value)
        })} />
      </label>

      <label>Password:
        <input type="password"  onChange={(event) =>{
          setPassword(event.target.value)

        }}/>
      </label>


      <button type ="submit" value="submit" onClick={createUser} />
    </form>


        </div>

    )
}

export default JoinComponent;