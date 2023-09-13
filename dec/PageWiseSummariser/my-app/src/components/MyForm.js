import React, { useState } from 'react';
import MyButton from './MyButton';
import './MyForm.css';

function MyForm(props) {
  const [pdfFile, setPdfFile] = useState(null);
  const [pageNumbers, setPageNumbers] = useState([]);

  function handleFileChange(event) {
    setPdfFile(event.target.files[0]);
  }

  function handlePageNumberChange(event) {
    const pageNumbersString = event.target.value;
    setPageNumbers(pageNumbersString.split(',').map(Number));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit({ pdfFile, pageNumbers });
  }

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <label htmlFor="pdf-file">PDF File:</label>
      <input type="file" id="pdf-file" onChange={handleFileChange} />
      <br />
      <label htmlFor="page-numbers">Page Numbers:</label>
      <input type="text" id="page-numbers" onChange={handlePageNumberChange} />
      <br />
      <MyButton onClick={handleSubmit}>Submit</MyButton>
    </form>
  );
}

export default MyForm;
