import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
    const [descripcionDetallada, setDescripcionDetallada] = useState('');
    console.log(descripcionDetallada);

    Editor.modules = {
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }

    return (
      <ReactQuill theme="snow" descripcionDetallada={descripcionDetallada} onChange={setDescripcionDetallada} modules={Editor.modules} />
    );
};

export default Editor;