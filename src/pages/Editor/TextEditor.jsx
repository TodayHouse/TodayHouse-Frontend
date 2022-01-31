import React, { Component, useState } from 'react';
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import {EditorState} from "draft-js";
import GuideBar_1 from "./GuideBar1";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";//involve css


export default class TextEditor extends Component{
    state = {
        editorState : EditorState.createEmpty(),
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    } 
    
    render(){
        const {editorState} = this.state;
        let guideState = false;
        const guideController = (guideState) => {
            return 
        }
        
        const showGuide = () => {
                <div id = "sub-section" className = "sub-section">
                    Some Results
                </div>
        }

        return (
            <>
            
            <EditorContainer>
               <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
                />
            </EditorContainer>
            </>
        )
    };
}





const EditorContainer = styled.div`
    text-align : center;
    border: 1px solid;
    margin-top :100px;
    border-color : #bdbebd;
    height : 800px;
    width : 1200px;
`

