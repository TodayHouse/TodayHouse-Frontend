import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, {Quill} from 'react-quill';
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);

const modules = {
	toolbar: [
		//[{ 'font': [] }],
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
		['image'],
		[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
		['clean']
	],
    
	ImageResize: {
		parchment: Quill.import('parchment')
	}
};

const TextEditor = () => {
	return (
		//
		<div>
			<ReactQuill style={{ height: '600px' }} theme="snow" modules={modules} />
		</div>
	);
};

export default TextEditor;