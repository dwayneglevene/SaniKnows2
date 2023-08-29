import  "./HomeStyle.css";
import {useNavigate} from 'react-router-dom';


function Home(){        
    var navigate= useNavigate();


    function HandleClicklogin(){
        navigate('/loginPage')
     } 

     function HandleClicksignup(){
        navigate('/joinPage')
     }

    return(
        <div>
            <h1>Sani Knows</h1>

            <div class="flex-container">
                <div class="right">

                    <h3>Who we are</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div class="middle">
                        <button onClick={HandleClicksignup}>
                            join
                        </button>
                            <h3>Sani</h3>
                        <button onClick={HandleClicklogin}>
                            sign in
                        </button>
                    </div>
                    <div class="left">
                        <img id="pic" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsToXadQ8sMwuJpkjPZei5ZUN8AM20cFjp8w&usqp=CAU"/>
                    </div>
            </div>

            </div>
        
    )
}

export default Home;