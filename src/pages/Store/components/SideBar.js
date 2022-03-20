import React,{useState,useEffect} from "react"
import styled from"styled-components"
import {Link} from "react-router-dom"
import axios from "axios"
import $ from 'jquery'
const SideBar = (props)=>{
    const [list,setList] = useState(
        [
            "카테고리"
        ]
    )
    useEffect(()=>{
        try{
            axios.get("http://localhost:8080/categories")
            .then(function(res){
                console.log(list)
                props.handleCategory(list[0].id,list[0].name)
                setList(res.data.result)
                
            })
            }
        catch(e){
            console.log(e);
        }

    },[])
    const onOff =(item ,all)=>{
        
        if(item.subCategory){
            item.subCategory.forEach(el => {
                if($(`#${el.id}`).css("display") ==="flex" && !all){
                    $(`#${el.id}`).css("display","none")
                    props.handleCategory(item.id,item.name)
                    onOff(el,true);
                }
                else if(all){
                    $(`#${el.id}`).css("display","none")
                }
                else{
                    $(`#${el.id}`).css("display","flex")
                    props.handleCategory(item.id,item.name)

                }
                
            });
        }else{
            props.handleCategory(item.id,item.name)
        }


    }
    const Items =(items, fontSize, margin,display)=>{
        if(items){
            return(
                <>
                    {items.map((item)=>{
                        return(
                            <>
                                <Detail1 
                                    style={{
                                        display:`${display}`,
                                        fontSize:`${fontSize}px`,
                                        marginLeft:`${margin}px`
                                    }}
                                    onClick={()=>onOff(item,false)}
                                    id={item.id}>
                                    {item.name}
                                </Detail1>
                                {Items(item.subCategory,fontSize*0.7,margin+20,"none")}
                            </>
                        )
                    })}
                </>
            )
        }
        else{
            return(
                <>
                </>
            )

        }
    }
    return(
        <>
        <Container>
            {
                Items(list,30,0,"flex")
            }
        </Container>


        </>
    )
}
const Container = styled.div`
display:flex;
margin-top:50px;
width: 30%;
flex-direction:column;
`
const Line = styled.div`
display:flex;
`
const Detail1 = styled.h4`
display:flex;
color:black;
font-weight:bold;
cursor: pointer;
`
const SubCategory=styled.div`
display:flex;
flex-direction: column;
`
const Detail2 = styled.div`
display:flex;

`
export default SideBar
