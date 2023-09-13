import React,{useState,useEffect} from 'react'
import "./Home.css";
import SaveIcon from '@material-ui/icons/Save';
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Home() {
  const [state, setState]=useState(null);
  const navigate = useNavigate();

  function change(props){
  setState(props.target.value);
  }
  const data={
    text:state

  };
  async function submitHandler(event){
    event.preventDefault();
  const response = await axios.post("http://localhost:8800",data.text);
 console.log(response);
    navigate(`/${response.data.uniqueCode}`);
 

}




  return (
    <form  onSubmit={submitHandler} className="form home">
    <textarea  rows="100"
    className="code_area w-full h-full px-6 py-4 outline-none bg-light-grey font-bold resize-none" 
    placeholder="> type your code here .."
    onChange= { change } />
{/* stored in state*/}

    <button className="save flex absolute top-0 right-0 p-4"><SaveIcon/></button>
      </form>
    
  )
}

export default Home;

