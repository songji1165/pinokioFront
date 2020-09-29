import React from 'react';
import styled from "styled-components";

const S = {
    NaviWrap : styled.div`
        float: ${props => props.float ? props.float : "none"};
        border: 1px solid;
        width: 20%;
        height: 100%;
    `
}

function Navigation(props) {
    console.log(props);
    const float = props.float;

    return (
        <S.NaviWrap className="Navi" float={float}>
            <h1>navi</h1>
        </S.NaviWrap>
    );

}
export default Navigation;
