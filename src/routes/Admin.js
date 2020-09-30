import React from 'react';
// import axios from 'axios';
import Login from "./Login";
import styled from "styled-components";

const S = {
  Admin : styled.div`
    margin: 0 auto;
    border: 1px solid;
  `
};

class Admin extends React.Component {
    componentDidMount() {
        if(!sessionStorage.getItem("userId")){
            this.props.history.push("/login");
        }
    }

    render() {
        return (
            <>
                <S.Admin className="Admin">
                    <h3>관리자입니다.</h3>
                </S.Admin>
            </>

        );
    }
}

export default Admin;
