import React from 'react';
import styled from "styled-components";
import {AiFillHome} from "react-icons/ai";


const S = {
    Head : styled.header`
        width: 100%;
        height: 20vh;
        text-align: center;
        font-size: 2.5rem;
        padding: 3rem;
        
        & .home {
            position: absolute;
            right: 3%;
            top: 3%;
            border-radius: 5px;
            flex-basis : 30%;
            margin: 20px 1%;
            font-size:2rem;
            
            & .f{
                font-size:0.5rem;          
            }
        }
    `
}

function refreshPage(){
    window.location.reload();
}

function Header() {
    return (
        <div className="Header">
            <S.Head>
                <div onClick={refreshPage}>피노키오 교구 e-카탈로그</div>
                <div className="home">
                    <a href="http://www.시설교구.kr" target="_blank">
                        <AiFillHome></AiFillHome>
                        <div className="f">피노키오 home</div>
                    </a>
                </div>
            </S.Head>
        </div>
    );
}
export default Header;
