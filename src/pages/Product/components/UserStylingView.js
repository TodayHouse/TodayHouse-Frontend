import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { Carousel } from '../../../components';

const userStylingSample = [
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211128_125%2F1638110286133XNGIG_JPEG%2F39246113963447552_1245063760.jpeg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20211225_143%2F1640399501271Vzc0e_JPEG%2F41535346970815309_1824041491.jpg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjdfMzUg%2FMDAxNjE5NTE3NDU0NDg4.0PXwmxKSWqcGvhc7L0rfLiihnRLsMwBFvcS9neniUYEg.px3UuS1aL3ABcgsN12IYsTtSoAfZZPblV0H2_EeiLaAg.JPEG.minchae13%2F105F72E7-0002-4972-85AF-8F1A593EF867.jpg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_2981230%2F29812301876.20211124044145.jpg&type=a340',
  'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTA2MDZfNDYg%2FMDAxNTU5NzQ3NDUwMzU1.4vuFMCp8rIVFnWQ8xV07iOprHAd3I7B5qoZkt4NBYS4g.JbvLg_l2QunowQGswQUP5PhNI3Mi9cUhNoiF8TiDtzwg.JPEG%2FKakaoTalk_20190520_205412386.jpg&type=a340',
];
const UserStylingView = () => {
  return (
    <Container>
      <UserStylingContainer>
        <UserStylingText>
          유저들의 스타일링샷{' '}
          <span style={{ color: theme.mainColor }}>954</span>
        </UserStylingText>
        <Carousel images={userStylingSample} />
      </UserStylingContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const UserStylingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const UserStylingText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export default UserStylingView;
