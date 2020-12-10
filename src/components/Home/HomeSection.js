import React from 'react';
import styled from "styled-components";
import Navigation from "../Home/Navigation";
import ImageMap from "../Home/ImageMap";
import axios from "axios";

const S = {
    SectionWrap : styled.div`
        text-align: center;
        position: relative;
        display:table;
        width:100%;
        height:70vh;
      
        & > div {
           display : table-cell;
           vertical-align: middle;
      }
    `
}

class HomeSection extends React.Component {
    constructor(props)     {
        super(props);

        this.state = {
            data: {},
            list: [],
            // naviList: [{url:"wood",name:"HOME"},{url:"/categories/woods/1",name:"고무교구장"}],
            naviList: [{url:"woods",name:"HOME"}],
        }
        this.getList = this.getList.bind(this);
    }

    async getList(item, pageName, num) {
        let urlTpl;

        switch (pageName) {
            case 'category':
                urlTpl = `http://localhost:8080/categories/woods/${num}`;
                break;
            case 'product':
                urlTpl = `http://localhost:8080/products/categories/${num}`;
                break;
            case 'link':
                ///********************다시하기
                window.open(item.prodLink, '_blank');
                //`${item.prodLink}`;
                urlTpl = `http://localhost:8080/products/categories/${num}`;
                break;
            default:
                urlTpl = `http://localhost:8080/woods`;
                break;
        }

        await axios.get(urlTpl,{
            headers: {'Access-Control-Allow-Origin': '*'}
        }).then((res)=> {
            console.log("?============res :", res.data)
            let data = res.data;
            if(data.length > 0){
                let dataObj = {data};
                this.setState({name : urlTpl, data: dataObj});

                //navList
                const getNaviList = this.state.naviList; //const getNaviList = [];
                let currentName = "";
                let page = urlTpl.replace(/[1-9]/g, "").replace('http://localhost:00','');
                let currentUrl = "";


                switch (page){
                    case `/categories/woods/`:
                        currentName = `${item.woodName} 카테고리`;
                        currentUrl = `categories/woods/${num}`;
                        break;
                    case `/products/categories/`:
                        currentName = `${item.cateName}`;
                        currentUrl = `products/categories/${num}`;
                        break;
                }

                getNaviList.push({url:currentUrl, name:currentName});
                this.setState({naviList: getNaviList})
            }
        })

        /*const  { data } = await axios.get(urlTpl,{
            headers: {'Access-Control-Allow-Origin': '*'}
        });

        this.setState({name : urlTpl});
        this.setState({list : data});*/
    }

    componentDidMount() {
        this.getList();
        console.log("데이터 불러왔다.")
    }

//쿼리가 바뀔때 , 쿼리값을 갖고와서 통신 다시 하기

    render() {
        //let {data, list} = this.state;
        return (
            <S.SectionWrap>
                <div>
                    <Navigation listDatas={this.state.naviList} urlTpl={this.state.name} getList={this.getList} float={"left"} />
                    <ImageMap datas={this.state.data} urlTpl={this.state.name} getList={this.getList} float={"right"}/>
                </div>
            </S.SectionWrap>
        );
    }
}
export default HomeSection;