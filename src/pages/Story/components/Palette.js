import React from 'react';
import styled from 'styled-components';
import PaletteElement from '../elements/PaletteElement';
import { useDispatch } from 'react-redux';
import { changeCategoryList } from '../../../redux/reducer/story';
import $ from 'jquery';

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
];

const Palette = (props) => {
  const { id, type } = props;
  const dispatch = useDispatch();

  const onClick = (color) => {
    dispatch(changeCategoryList({ type: id, data: color }));
  };
  return (
    <div id={id}>
      <p style={{ color: '#777777' }}>{type}</p>
      <PaletteContainer>
        {paletteColor.map((e, idx) => {
          if (e === 'white')
            return (
              <PaletteElement
                key={idx}
                onClick={() => {
                  onClick(e);
                }}
                border
                color={e}
              />
            );
          else
            return (
              <PaletteElement
                key={idx}
                onClick={() => {
                  onClick(e);
                }}
                color={e}
              />
            );
        })}
      </PaletteContainer>
    </div>
  );
};

const PaletteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Palette;
