import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import Input from "../styles/Input"
import Button from "../styles/Button"

const S = {
    Login: styled.div`
        padding: 2rem 0;
        width: 70%;
        min-width: 700px;
        margin: 0 auto;
        
        & > div {
            text-align: center;
        }
    `,
    loginWrap: styled.div`
        width: 100%;
        margin: 10px 0;
        padding: 5px;
      
        & p {
         color: red;
         font-size: 0.8rem;
         font-weight: bold;
        } 
  `
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        // 여기서 this.setState()를 호출하면 안 됩니다!
        this.state = {
            Admin: [],
            isId: true,
            isPass: true
        };
        this.getLogin = this.getLogin.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleClickBtn = this.handleClickBtn.bind(this);
    }

    async getLogin (id,pass){
        try{
            const { data } = await axios.post("http://localhost:8080/admins/login",{
                "adminId" : id,
                "adminPass" : pass
            });

            if(data){
                sessionStorage.setItem("userId",id);
                this.props.history.push("/admin");
            }else{
                alert("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
            }
        }catch (e) {
            alert(`[Err-${e} : 에러가 발생했습니다. 로그인을 다시 시도해주세요.`);
            console.error(e);
        }

    };

    handleChangeInput (e){
        let inputVal = e.target.value;
        let inputName = e.target.name;

        if(inputVal.length > 0){
            switch (inputName) {
                case "id" :
                    this.setState({isId : true});
                    break;
                case "pass" :
                    this.setState({isPass : true});

            }
        }
    }

    handleKeyPress (e){
        if (e.key === "Enter") {
            this.handleClickBtn();
        }
    }

    handleClickBtn (e){
        let getId = this.refs.id.value;
        let getPass = this.refs.pass.value;

        if(!getId) return this.setState({isId : false});
        if(!getPass) return this.setState({isPass : false});

        this.getLogin(this.refs.id.value, this.refs.pass.value);
    }

    render(){
        return (
            <S.Login className="Login">
                <S.loginWrap>
                    <Input type="text" ref="id" name="id" placeholder="아이디" onChange={this.handleChangeInput}/>
                    {!this.state.isId && <p>아이디를 확인해주세요.</p>}
                    <Input type="password" ref="pass" name="pass" placeholder="비밀번호" onChange={this.handleChangeInput} onKeyPress={this.handleKeyPress}/>
                    {!this.state.isPass && <p>비밀번호를 확인해주세요.</p>}
                    <div><Button width="400" onClick={this.handleClickBtn}>로그인</Button></div>
                </S.loginWrap>
            </S.Login>
        );
    }
}

export default Login;
