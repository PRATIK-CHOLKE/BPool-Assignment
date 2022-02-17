import React, { Fragment, useState } from 'react'

const MockData = () => {
    const [file] = useState('');
    const btnUpload = document.getElementById("btnUpload");
    const resultText = document.getElementById("resultText");
    if(btnUpload){
    btnUpload.addEventListener("click", () => {
        const formData = new FormData();

        formData.append("pdfFile", file);

        fetch("/extract-text", {
            method: "post",
            body: formData
        }).then(response => {
            return response.text();
        }).then(extractedText => {
            resultText.value = extractedText.trim();
        });
    });
    }
    return (
        <Fragment>
            
   
            <button type="button" className='btn btn-primary btn-block mt-4' onClick={MockData}>Mock Data Retrieve</button>
            <label htmlFor="resultText"></label>
            <textarea className="form-control" id="resultText" rows="3" placeholder="Extracted Mock Data appears here..."></textarea>
        </Fragment>
    );
};

export default MockData;
