import React from 'react';
import styled from "styled-components";


const Foot = styled.footer`
  width: 100%;
  height: 10vh;
  text-align: center;
  padding: 1rem;
`

function Footer() {
    return (
        <div className="Footer">
            <Foot>
                상담센터 : 1899 - 1460 (9:00~ 16:00 상담가능)<br/>
                피노키오 교구 : <a href="http://www.시설교구.kr" target="_blank">http://www.시설교구.kr</a>
            </Foot>
        </div>
    );

}
export default Footer;
