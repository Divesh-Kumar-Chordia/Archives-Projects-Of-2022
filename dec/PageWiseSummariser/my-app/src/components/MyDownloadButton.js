import React from 'react';
import './MyDownloadButton.css';

function MyDownloadButton(props) {
  return (
    <a
      href={props.href}
      download={props.download}
      className="my-download-button"
    >
      {props.children}
    </a>
  );
}

export default MyDownloadButton;
