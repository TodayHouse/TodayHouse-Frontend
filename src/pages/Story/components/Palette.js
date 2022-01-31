import React from 'react'
import styled from 'styled-components'
import PaletteElement from '../elements/PaletteElement'

const paletteColor = [
  'black',
  'white',
  'lightgray',
  'AntiqueWhite',
  'BurlyWood',
  'SaddleBrown',
  'IndianRed',
  'pink',
  'gold',
  'DarkSeaGreen',
  'LightBlue',
  'deepskyblue',
  'navy',
]

const Palette = (props) => {
  return (
    <div id={props.id}>
      <p style={{ color: '#777777' }}>{props.type}</p>
      <PaletteContainer
        onClick={() => {
          alert('ss')
        }}
      >
        {paletteColor.map((e) => {
          if (e === 'white') return <PaletteElement border color={e} />
          else return <PaletteElement color={e} />
        })}
      </PaletteContainer>
    </div>
  )
}

const PaletteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export default Palette
