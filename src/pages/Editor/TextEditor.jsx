import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { withTheme } from 'styled-components';
import {getCookie, setCookie} from './../../App.js';
import {changeContent} from './../../redux/reducer/editor';
import { useDispatch, useSelector } from 'react-redux';
const modules = {
	toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
}


const TextEditor = () => {
	const dispatch = useDispatch();
	
	const dispatchContent = (val) => {
		dispatch(changeContent(val));
	}

	const extractTextPattern = /(<([^>]+)>)/gi;
	const [value, setValue] = useState("");
	useEffect(() => {
		console.log("변형 전 : " +value);
		let extractedText = value.replace(extractTextPattern, '');
		dispatchContent(extractedText);
		console.log("변형 후 : " + extractedText);
	}, [value])

	return (
	  <ReactQuill  style = {{background : "white", height : '400px', width : '800px' }} modules={modules} theme="snow" onChange = {setValue} placeholder="글을 작성하세요." background = 'white' />
	)
}

export default TextEditor;