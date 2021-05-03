import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./texteditor.css";

export const TextEditorView = ({ contenido }) => {
  const contenidoEditor = JSON.parse(contenido);
  return (
    <div className="mt-4">
      <div className="div-editor">
        <Editor
          initialContentState={contenidoEditor}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarHidden
          readOnly
          localization={{
            locale: "es",
          }}
        />
      </div>
    </div>
  );
};

//Otras Propiedades
//Ocultar toolbar: toolbarHidden
//Mostar toolbar cuando tiene el foco: toolbarOnFocus
//De solo Lectura: readOnly
