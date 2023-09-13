import React from 'react';
import './MyText.css';

function MyText(props) {
  return (
    <p className="my-text">
      {props.children}
    </p>
  );
}

export default MyText;
