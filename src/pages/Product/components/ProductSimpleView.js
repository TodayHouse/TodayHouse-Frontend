import React from 'react'
import styled from 'styled-components'
import { SidePhoto, MainPhoto } from '../elements'
import { Option } from './index'

const mockSide = [
  'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd0%2F65%2F21%2Fd065217abfbb25923daf231784c1b916.jpg&type=sc960_832',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130408_112%2Fps8868_1365406498084yYD4F_JPEG%2F05.jpg&type=sc960_832',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MTlfMTAw%2FMDAxNTA1ODA5Nzk5NTA2.XRWWX8lj9psJTyRXFuclNbOSHtOkwUUAvoBzHXfduYAg.FfcZ-d6bjGIqmGYcdx6WcAHXBm8nksTt88-B9uUgFB8g.JPEG.1004kby76%2F2.jpg&type=sc960_832',
]

const ProductSimpleView = () => {
  return (
    <Container>
      <SidePhotoView>
        {mockSide.map((data, idx) => (
          <SidePhoto id={idx} src={data} />
        ))}
      </SidePhotoView>
      <MainPhotoView>
        <MainPhoto />
      </MainPhotoView>
      <OptionView>
        <Option />
      </OptionView>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 1150px;
`
const SidePhotoView = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
`
const MainPhotoView = styled.div`
  display: flex;
  width: 500px;
  margin: 0px 10px;
`
const OptionView = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0px 50px;
`
export default ProductSimpleView
