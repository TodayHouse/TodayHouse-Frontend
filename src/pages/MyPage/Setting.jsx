import Title from 'antd/lib/skeleton/Title'
import styled from'styled-components'

const Setting = () => {
    return (
        <AllCover>
            <TitleText>
                회원정보수정
                
            </TitleText>
            <TotalInfo>
            <InfoBox></InfoBox>
            <InfoBox>
                <TagText id = "email">
                    이메일
                    <hr></hr>
                </TagText>
                <CellBox>
                <EmailInput type = "text" ></EmailInput>   
                    <Alpha>@</Alpha>
                <EmailPlatform type = "text">
                        <option value disabled>선택해주세요</option>
                        <option value = "naver.com">naver.com</option>
                        <option value = "daum.net">daum.net</option>
                        <option value = "gmail.com">gmail.com</option>
                </EmailPlatform>  
              <Description>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.  </Description>
                </CellBox>
            </InfoBox>
         
          
            <InfoBox>
                <TagText id = "nickname">
                    별명
                    <hr></hr>
                </TagText>
                <InfoInput type = "text"></InfoInput>              
            </InfoBox>
            
            <InfoBox>
                <TagText id = "gender">
                    성별
                    <hr></hr>
                </TagText>
              
                <RadioInput type = "radio" name = "gender"></RadioInput>  
                남성   
                <RadioInput type = "radio" name = "gender"></RadioInput>  
                여성         
            </InfoBox>

            <InfoBox>
                <TagText id = "birth">
                    생년월일
                    <hr></hr>
                </TagText>
                <InfoInput type = "text" placeholder = "api적용 여부 미정"></InfoInput>              
            </InfoBox>
           
           <InfoBox>
            <CellBox>
                <ProfileImage>프로필 이미지</ProfileImage>
                <ImageInput type = "file"></ImageInput>
            </CellBox>
            </InfoBox>

            <InfoBox>
                <TagText id = "introduction">
                    한줄 소개
                    <hr></hr>
                </TagText>
                <InfoInput type = "introduction" placeholder='어서와요 오늘의집'></InfoInput>              
            </InfoBox>

            <ConfirmButton>회원 정보 수정</ConfirmButton>
            </TotalInfo>
        </AllCover>
    )
}

const AllCover = styled.div`
    display : block;
    height : 850px;
    padding-top : 30px;
    border : 1px solid #ededed;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
    background-color: white;
`
const TitleText =  styled.div`
    font-weight : 700;
    font-size : 24px;
    position :absolute;
    width : 800px;
    left : 30%;
`

const TotalInfo = styled.div`
    position :absolute;
    left : 27%;
    margin-top : 20px;
`

const InfoBox = styled.div`
    display : flex;
    margin-top : 30px;
    margin-bottom :30px;
    margin-left : 4%;
    width : 800px;
`
const CellBox = styled.div`
    display : table-cell;
    width : 500px;
`
const TagText = styled.div`
    font-size : 15px;
    width : 80px;
    padding-top :5px;
    text-align: center ;
`
const Alpha = styled.div`
    display : inline;
    color : #dfdfdf;
    font-size :17px;
    margin-left: 15px;
`

const EmailInput = styled.input`
    display: inline;
    font-size : 17px;
    margin-left : 17px;
    border : 1px solid #dfdfdf;
    box-shadow: 0 1px 3px 0 rgb(53 197 240 / 20%);
    border-radius : 6px;
    height : 40px;
    width: 152px;
    padding-left :10px;
    &:hover{
        border-color : skyblue;
    }
`
const RadioInput = styled.input`
    font-size : 17px;
    margin-left : 2%;
    width : 30px;
    height : 30px;
    padding-left :10px;
    &:hover{
        border-color : skyblue;
    }
    margin-right : 10px;
`
const InfoInput = styled.input`
    font-size : 17px;
    margin-left : 2%;
    border : 1px solid #dfdfdf;
    box-shadow: 0 1px 3px 0 rgb(53 197 240 / 20%);
    border-radius : 6px;
    height : 40px;
    padding-left :10px;
    width : 325px;
    &:hover{
        border-color : skyblue;
    }
`

const ImageInput = styled.input`
    font-size : 17px;
    margin-left : 2%;
    border : 1px solid #dfdfdf;
    border-radius : 4px;

    height : 200px;
    padding-left :10px;
    width : 200px;
    &:hover{
        border-color : skyblue;
    }
`

const EmailPlatform = styled.select`
    display : inline;
    text-align : left;
    margin-left : 2%;
    font-size:17px;
    border : 1px solid #dfdfdf;
    box-shadow: 0 1px 3px 0 rgb(53 197 240 / 20%);
    border-radius : 6px;
    height : 40px;
    &:hover{
        border-color : skyblue;
    }
`
const ProfileImage = styled.div`
    display : block;
    font-size:17px;
    height : 40px;
`
const ConfirmButton = styled.button`
    width : 300px;
    height : 50px;
    background-color : #35c5f0;
    border : 1px solid #35c5f0;
    border-radius : 4px;
    color : white;
    position : absolute;
    margin-left :300px;
    font-size : 17px;
    font-weight : 700;
    margin-top : 30px;
`

const Description = styled.div`
    font-weight : 700;
    font-size : 12px;
    color : #dbdbdb;
    margin-left : 20px;
`
export default Setting