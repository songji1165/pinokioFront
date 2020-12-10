import React from 'react';
import styled from "styled-components";

const S = {
    NaviWrap : styled.div`
        float: ${props => props.float ? props.float : "none"};
        //border: 1px solid;
        border-right : 1px solid;
        width: 20%;
        height: 100%;
        
        & .na {
            border-radius: 5px;
            flex-basis : 30%;
            margin: 20px 1%;
            font-size: 1rem;
        }
        
    `
}

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            float: props.float,
            datas: [],
            showNavi: false
        };
    }

    naviTemplate (url) {
        switch (url){
            case "http://localhost:8080/woods" :
                this.state.showNavi = false;
                break;
            default:
                this.state.showNavi = true;
                break;
        }
    }

    handleClick(item){
        //localhost url+naviList url
        /*let page = item.url.replace(/[1-9]/g, "").replace('http://localhost:00','');
        let num = item.url.replace(/[^0-9]/g,'');
        let pageName;

        switch (page){
            case `/woods`:
                pageName='category';
                break;
            case `/categories/woods/`:
                pageName='product';
                break;
            case `/products/categories/`:
                pageName='link';
                break;
        }

        this.props.getList(item, pageName, item[num]);*/
    }

    render() {
        let url = this.props.urlTpl;
        this.naviTemplate(url);

        return (
            <S.NaviWrap className="Navi" float={this.state.float}>
                {this.state.showNavi && (
                    <ul>
                        {
                            this.props.listDatas && this.props.listDatas.map((item, index) => {
                                return (<li className="na" key={index} onClick={this.handleClick(item)}>{item.name}</li>)
                                })
                        }
                    </ul>
                )}
            </S.NaviWrap>
        );
    }
}
export default Navigation;
