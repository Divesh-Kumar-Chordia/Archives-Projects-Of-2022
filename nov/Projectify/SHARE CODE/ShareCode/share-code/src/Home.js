import React from 'react'
import "./Home.css";
import SaveIcon from '@material-ui/icons/Save';
function Home() {
  return (
    <div>

    <textarea className="code_area" placeholder="> type your code here .." contentEditable="true">

    </textarea>
    <button className="save flex absolute top-0 right-0 p-4"><SaveIcon/></button>
    </div>
  )
}

export default Home;