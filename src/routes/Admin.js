import React from 'react';
// import axios from 'axios';
import Login from "../components/Admin/Login";
import styled from "styled-components";

const S = {
  Admin : styled.div`
    margin: 0 auto;
    border: 1px solid;
  `
};

function Admin() {

    return (
        <>
        <S.Admin className="Admin">
            <h3>관리자입니다.</h3>
            <Login/>
        </S.Admin>
        </>

    );
}

export default Admin;
