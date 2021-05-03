import React, { useState } from "react";
import { ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./texteditor.css";

export const TextEditor = ({ updateContenido, label }) => {
  let contentStateInit = ContentState.createFromText("");
  const raw = convertToRaw(contentStateInit);
  const [contentState] = useState(raw);
  return (
    <div className="mt-4">
      <label>
        <i className="fa fa-pencil-square-o bigicon mr-3"></i>
        {label}
      </label>
      <div className="div-editor">
        <Editor
          defaultContentState={contentState}
          onContentStateChange={updateContenido}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          localization={{
            locale: "es",
          }}
          placeholder="Digite su contenido aquí"
        />
      </div>
    </div>
  );
};

//Otras Propiedades
//Ocultar toolbar: toolbarHidden
//Mostar toolbar cuando tiene el foco: toolbarOnFocus
//De solo Lectura: readOnly

// wrapperClassName="wrapper-class"
// editorClassName="editor-class"
// toolbarClassName="toolbar-class"
