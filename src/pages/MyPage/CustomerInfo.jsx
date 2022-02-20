import Title from 'antd/lib/skeleton/Title'
import styled from'styled-components'

const CustomerInfo = () => {
    return (
        <AllCover>
            <TitleText>
                회원정보수정
            </TitleText>
            <InfoBox></InfoBox>
            <InfoBox>
                <TagText id = "email">
                    이메일
                </TagText>
                <InfoDetail type = "text" ></InfoDetail>   
                    <Alpha>@</Alpha>
                <InfoDetail type = "text"></InfoDetail>          
            </InfoBox>
          
            <InfoBox>
                <TagText id = "nickname">
                    별명
                </TagText>
                <InfoDetail type = "text"></InfoDetail>              
            </InfoBox>
            
            <InfoBox>
                <TagText id = "gender">
                    성별
                </TagText>
                <InfoDetail type = "text"></InfoDetail>              
            </InfoBox>

            <InfoBox>
                <TagText id = "birth">
                    생년월일
                </TagText>
                <InfoDetail type = "text"></InfoDetail>              
            </InfoBox>

            <InfoBox>
                <TagText id = "introduction">
                    한줄 소개
                </TagText>
                <InfoDetail type = "introduction"></InfoDetail>              
            </InfoBox>
        </AllCover>
    )
}

const AllCover = styled.div`
    display : block;
    margin-top : 30px;
    width : 1000px;
    height : 700px;
    padding : 30px 30px 30px 30px;
    border : 1px solid #ededed;
`
const TitleText =  styled.div`
    font-weight : 1000;
    font-size : 20px;
    position :absolute;
    left : 25%;
`
const InfoBox = styled.div`
    display : flex;
    margin-top : 30px;
    margin-bottom :30px;
    margin-left : 4%;
`
const TagText = styled.div`
    font-size : 17px;
    width : 80px;

`
const Alpha = styled.div`
    color : #dfdfdf;
    font-size :15px;
    margin-left: 15px;
`
const InfoDetail = styled.input`
    font-size : 17px;
    margin-left : 2%;
    border : 1px solid #dfdfdf;
    border-radius :4px;
`
export default CustomerInfo