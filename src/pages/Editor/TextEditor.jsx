import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const API_URL = "http://localhost:8080/";
const UPLOAD_ENDPOINT = "stories";

export default function TextEditor(props) {
	function uploadAdapter(loader) {
	  return {
		upload: () => {
		  return new Promise((resolve, reject) => {
			const body = new FormData();
			loader.file.then((file) => {
			  body.append("files", file);
			  fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
				method: "post",
				body: body
			  })
				.then((res) => res.json())
				.then((res) => {
				  resolve({
					default: `${API_URL}/${res.filename}`
				  });
				})
				.catch((err) => {
				  reject(err);
				});
			});
		  });
		}
	  };
	}
	function uploadPlugin(editor) {
		editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
		  return uploadAdapter(loader);
		};
	  }
	
	
	  return (
		<div className="form-wrapper">
		  <CKEditor className='editor'
			config={{
			  extraPlugins: [uploadPlugin]
			}}
			data=""
			editor={ClassicEditor}
			onReady={(editor) => {}}
			onBlur={(event, editor) => {}}
			onFocus={(event, editor) => {}}
			// onChange={(event, editor) => {
			//   handleChange(editor.getData())
			//   console.log(editor.getData())
			// }}
			onChange={(event, editor) => {
			  const data2 = editor.getData();
			  
			  props.contentSetter(data2);
			  console.log(data2);

			}}
		  />
		</div>
	  );
}
