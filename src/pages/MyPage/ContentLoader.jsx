import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {getCookie} from '../../App';
import styled from 'styled-components';

const ContentLoader = (props) => {
    const [type, setType] = useState(props.kind);
    const [index, setIndex] = useState(props.idx);
    const [title, setText] = useState('');
    const [image, setImage] = useState();
    const oid = getCookie('original_id');
    const accessToken = getCookie('login_id');
    useEffect(() => {
        const param = {
            category : type,
            writer : oid
            //request형식 알아야 함
        }
        console.log("type = " + type);
        try{
            
            axios.get("/stories/user", param, {
                headers : {
                    'Authorization' : `Bearer ${accessToken}`,
                },
                withCredentials:true,
            })
            .then(function(res){
                const isSuccess = res.data.isSuccess;
                console.log(res.result.content);
                setText(res.result.content[index].title);
                setImage(res.result.content[index].thumbnailUrl);
            })
        }
        catch(e) {
            console.log(e);
        }
      }, []);
    return (
        <>
            <div id = 'recentText'>
                <Thumbnail src = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMjVfMTI4%2FMDAxNjExNTYyNzQ5MDI5.8xYPOX6oSgzbio3Cj4nYk2W9Dik0toWzip5zTRMeMjog.uCwLH396hcDFY3hfJaxl9qyGLy616xY6X929O_XOqV8g.JPEG.youhappy3505%2Ftd00920000254.jpg&type=sc960_832"></Thumbnail>
            </div>
            <TitleBox>
                {title}
            </TitleBox>
        </>
    );
}

const Thumbnail = styled.img`
    text-align: center;
    margin-top : 40px;
    border-radius: 50%;
    height : 150px;
    width :150px;
    border : 1px solid skyblue;
`
const TitleBox = styled.div`
    margin-top : 10px;
    height : 30px;
    width : 100px;
    color : white;
    background-color: skyblue;
    text-align : center;
`
export default ContentLoader