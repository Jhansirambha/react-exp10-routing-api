import { useState } from "react";

export default function App() {
  const [form,setForm]=useState({name:"",email:"",password:""});
  const [error,setError]=useState("");

  const handleSubmit=e=>{
    e.preventDefault();
    if(!/\S+@\S+\.\S+/.test(form.email)) return setError("Invalid email");
    if(form.password.length<6) return setError("Password too short");
    setError("Registered Successfully!");
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
    <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
    <input placeholder="Password" type="password"
     onChange={e=>setForm({...form,password:e.target.value})}/>
    <button type="submit">Register</button>
    <p>{error}</p>
  </form>;
}
