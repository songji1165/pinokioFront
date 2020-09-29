import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Input from "../../styles/Input"
import Button from "../../styles/Button"

const S = {
    Login: styled.div`
        padding: 2rem 0;
        
        & < div {
            text-align: center;
        }
    `,
    loginWrap: styled.div`
        width: 80%;
        height: 30px;
        margin: 5px 0;
 color: ${(props) => {
        console.log("style", props);
        return (props.isval ? "#333" : "pink")
    }
        };
        & label {
       
        width: 20%;
        text-align: right;
        padding-right:10px;
        display: inline-block;
        }    
  `
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        // 여기서 this.setState()를 호출하면 안 됩니다!
        this.state = {
            Admin: [],
            isVal: false
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    getAdmin = async() => {
        const  {
            data } = await axios.get("http://localhost:8080/admins");

        console.log("!!",data);
        this.setState({Admin : data});
    }

    componentDidMount () {
        let result = this.getAdmin();

        if(result){
            console.log("result")
            this.setState({isVal : true})
        }
    }

    render(){
        return (
            <S.Login className="Login">
            <S.loginWrap isval={this.isVal}>
            <label htmlFor="admin-id">아이디 : </label><Input type="text" id="admin-id"/>
            </S.loginWrap>
            <S.loginWrap isval={this.isVal}>
            <label htmlFor="admin-pwd" >비밀번호 : </label><Input type="password" id="admin-pwd"/>
            </S.loginWrap>
            <div><Button>로그인</Button></div>
            </S.Login>
        );
    }
}

export default Login;
