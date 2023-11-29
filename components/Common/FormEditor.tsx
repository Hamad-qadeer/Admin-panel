import React, { useEffect, useRef, useState } from 'react'
import { CardBody } from 'reactstrap';

const FormEditor = () => {
      const editorRef = useRef<any>();
      const [editor, setEditor] = useState(false);
      const { CKEditor, ClassicEditor }: any = editorRef.current || {};

      useEffect(() => {
        editorRef.current = {
          CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
          ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
        setEditor(true);
      }, []);
      const [data, setData] = useState("");
  return (
    <div>
      <CardBody className="p-0">
        {editor ? (
          <CKEditor
            editor={ClassicEditor}
            data={data}
            onReady={(editor: any) => {
              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              setData(data);
            }}
          />
        ) : (
          <p>ckeditor5</p>
        )}
      </CardBody>
    </div>
  );
}

export default FormEditor