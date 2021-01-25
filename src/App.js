import React from 'react';
import './App.css';
import Ten from './images/ten.png'
function App() {

 
  const onSubmit = async (e) => {
    e.preventDesfault();
    const username = e.target.email.value;
    const name = e.target.name.value;
    const pass = e.target.pass.value;
     console.log("email :",username,'\n',"name :",name,'\n',"password :",pass)
    //const phno = e.target.phno.value;
    //const select = e.target.select.value;
  }  

 
  return (<>
  <nav className="nav">
    <div className="logo">
      <img src={Ten} height="50px" />
    </div>
    <div className="sig">
      <h4>Sign Up</h4>
    </div>
    
  </nav>
  <div  className="fullstyle">
    <div>
    <h7 className="one full">Step 1 of 3</h7> 
    <h3 className="two full">Create a password to start <br/> your membership.</h3> 
    <p className="three full">Just a few more steps and you're done! <br/> we hate paperwork, too.</p> 
  <form onSubmit={onSubmit}>
    <div className="pd">
        <input type="email" name="email"  placeholder="Email" required className="full"  size="30" /> <br/>

        <input type="text"  name="name" placeholder="Mobile number" required className="full" size="30" /> <br></br>

        <input type="password"  name="pass" placeholder="Password" required className="full " size="30"/> <br></br>
        <button className="btn" type="submit" >Submit</button>
 </div></form>
  </div>
  </div>
  </>
  );
}

export default App;
