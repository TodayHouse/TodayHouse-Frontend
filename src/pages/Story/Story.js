import React, { Fragment, useEffect, useState } from 'react'
import Main from '../Main/Main'
import styled from 'styled-components'
import { Category, StoryPost } from './components/index'
import d from '../../img/house1.jpg'
import d2 from '../../img/house2.jpg'

const Story = () => {
  const data = [
    {
      src: d,
      title: '계획서만 50장! 내 머릿 속 인테리어, 그대로 실현하기',
      profile: d2,
      nickname: '쪼아윰',
      scrap: 3838,
      view: 23288,
    },
    {
      src: d,
      title: '20년이 넘은 복도식 아파트, 반셀프로 단정하게 고치기',
      profile: d2,
      nickname: '쪼아윰2',
      scrap: 3288,
      view: 233288,
    },
    {
      src: d,
      title: '최소한의 시공으로 취향을 가득 담은 신혼집',
      profile: d2,
      nickname: '쪼아윰3',
      scrap: 38118,
      view: 2113288,
    },
    {
      src: d,
      title: '거실은 줄이고 주방은 늘린, 손님맞이 맞춤형 신혼집',
      profile: d2,
      nickname: '쪼아윰4',
      scrap: 388,
      view: 234288,
    },
    {
      src: d,
      title: '매일이 호캉스! 호텔 같이 깔끔한 30평대 리모델링',
      profile: d2,
      nickname: '쪼아윰5',
      scrap: 3848,
      view: 236288,
    },
  ]

  return (
    <Fragment>
      <Main />
      <Category />
      <CardContainer>
        <TotalNum>전체 5,882</TotalNum>
        <CardItem>
          {data.map((item) => {
            return (
              <StoryPost
                src={item.src}
                title={item.title}
                profile={item.profile}
                nickname={item.nickname}
                scrap={item.scrap}
                view={item.view}
              />
            )
          })}
        </CardItem>
      </CardContainer>
    </Fragment>
  )
}
const CardContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 300px;
  padding: 12px;
`
const TotalNum = styled.p``
const CardItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  gap: 20px;
`
export default Story
