import React from 'react';
import styled from "styled-components";


const Head = styled.header`
  width: 100%;
  height: 20vh;
  text-align: center;
  font-size: 2.5rem;
  padding: 3rem;
`

function Header() {
    return (
        <div className="Header">
            <Head>피노키오 교구 e-카탈로그</Head>
        </div>
    );

}
export default Header;
