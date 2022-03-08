import React,{useState} from "react"
import styled from"styled-components"
import {Link} from "react-router-dom"

const SideBar = ()=>{
    const [category,setCategory] = useState(
        [
            "가구",
            "패브릭",
            "조명",
        ]
    )


    return(
        <>
        <Container>
            {
                category.map((item,index)=>
                {
                    return(
                        
                        <Line>
                        <Detail1>{item}</Detail1>
                        </Line>

                    )

                })
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
`
const Detail2 = styled.div`
display:flex;
`
export default SideBar
