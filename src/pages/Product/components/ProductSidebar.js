import React from 'react'
import styled from 'styled-components'
import { OptionSelectView } from '.'
const ProductSidebar = () => {
  return (
    <Container>
      <OptionSelectView />
    </Container>
  )
}

const Container = styled.div`
  width: 383px;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  padding-bottom: 20px;
`

export default ProductSidebar
