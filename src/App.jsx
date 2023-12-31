import { useState ,useEffect} from "react";
import {AiOutlineGoogle} from 'react-icons/ai'
import {GoogleAuthProvider,signInWithPopup,onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../firebaseconfig";


function App() {
   const [count, setCount] = useState(0);
   const [currentUser, setCurrentUser] = useState(null);
   
  

   const provider = new GoogleAuthProvider()   
   function googleLogin(){
    signInWithPopup(auth, provider)
   }


   useEffect(() => {
    // Listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth,(user) => {
    if (user) {
        // User is logged in
        setCurrentUser(user);
        console.log("current user:",currentUser);
    } else {
        // User is logged out
        setCurrentUser(null);
        console.log("current user:",currentUser);
    }
    });
    

}, []);


   return (
    <section class="flex flex-col md:flex-row h-screen items-center">
      

    <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      
      <img src='Worldline-paris-ladefense-tour-levoltaire.png' alt="" class="w-full h-full object-cover" />

    </div>
  
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
  
      <div class="w-full h-100">
  
  
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
  
        <form class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
          </div>
  
          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
          </div>
  
          
  
          <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>
  
        <hr class="my-6 border-gray-300 w-full"/>
  
        <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300" onClick={(e)=>googleLogin(e)} >
              <div class="flex items-center justify-center">
              <img src="icons8-google-48.png" alt=""  className="w-8"/>
              <span class="ml-4">
              Log in
              with
              Google</span>
              </div>
            </button>
            {currentUser &&
              <>
                <p>hello</p>
                <p>{currentUser?.email}</p>
              </>
            }
            <button className="" type="button" onClick={ ()=>signOut(auth)}> logout</button>    
  
        <p class="mt-8">Need an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
                account</a></p>
  
      </div>
    </div>
  
  </section>
   );
}

export default App;
