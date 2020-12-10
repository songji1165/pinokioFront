import React from 'react';
import styled from "styled-components";
import imgArr from "../../assets";

const S = {
    ImgWrap : styled.div`
        float: ${props => props.float ? props.float : "none"};
        //border: 1px solid;
        width: 80%;
        height: 100%; 
        padding: 16px 16px;
        display: flex;
        flex-wrap : wrap;
        align-content: center;
        justify-content : ${props => props.urlTpl == undefined? "center" : "none"};
        
        & .card {
            border : 1px solid;
            border-radius: 5px;
            flex-basis : 30%;
            margin: 20px 1%;
        }
    `
}


class ImageMap extends React.Component {
    constructor(props) {
        super(props);
        console.log("***props***", props);

        this.state = {
            float: props.float,
            datas: [], //obj => arr
            urlTpl: "",
            list:[]
        };

        this.handleClickCard = this.handleClickCard.bind(this);
    }

    handleClickCard(item, page, tbNum) {
        let pageName;

        console.log("clickPage", page);
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

        this.props.getList(item, pageName, item[tbNum]);

        //url 쿼리 스트링 파라미터 전달
    }

    makeTemplate(item, index){
        let url = this.props.urlTpl;
        let page = url.replace(/[1-9]/g, "").replace('http://localhost:00','');
        let tbNum, tbName2, tbName;

        switch (page){
            case '/woods':
                tbNum = 'woodNum';
                tbName2 = 'woodName2';
                tbName = 'woodName';
                break;
            case `/categories/woods/`:
                tbNum = 'cateNum';
                tbName2 = 'cateName2';
                tbName = 'cateName';
                break;
            default:
                tbNum = 'prodNum';
                tbName2 = 'prodName2';
                tbName = 'prodName';
                break;
        }

        return (
            <div className="card" key={index} onClick={() => this.handleClickCard(item, page, tbNum)}>
                <img src={imgArr[item[tbName2]]} width="200" height="200" />
                <div>
                    <span>{item[tbName]}</span>
                </div>
            </div>
        )
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }

    render () {
        return (
            <S.ImgWrap className="ImgMap" float={this.state.float}>
                {this.props.datas.data && this.props.datas.data.map((item, index) => {
                    return this.makeTemplate(item, index); })
                }
            </S.ImgWrap>
        );
    }
}
export default ImageMap;