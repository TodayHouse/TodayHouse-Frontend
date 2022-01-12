import React, { Fragment, useEffect, useState } from 'react'
import Main from '../Main/Main'
import styled from 'styled-components'
import $ from 'jquery'

import Category from './components/Category'

const Story = () => {
  return (
    <Fragment>
      <Main />
      <Category />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}></div>
    </Fragment>
  )
}

export default Story
