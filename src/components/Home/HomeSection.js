import React from 'react';
import styled from "styled-components";
import Navigation from "../Home/Navigation";
import ImageMap from "../Home/ImageMap";

const S = {
    SectionWrap : styled.div`
     background-color: yellow;
      text-align: center;
      position: relative;
      display:table;
      width:100%;
      height:70vh;
      
      & > div {
        display : table-cell;
        vertical-align: middle;
      }
    `
}


function HomeSection() {
    return (
        <S.SectionWrap>
            <div>
                <Navigation float={"left"}/>
                <ImageMap float={"right"}/>
            </div>
        </S.SectionWrap>
        );
}
export default HomeSection;
