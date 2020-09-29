import React from 'react';
import styled from "styled-components";
import imgArr from "../../assets";
import axios from "axios";

const S = {
    ImgWrap : styled.div`
        float: ${props => props.float ? props.float : "none"};
        border: 1px solid;
        width: 80%;
        height: 100%; 
        padding: 16px 16px;
        display: flex;
        flex-wrap : wrap;
        align-content: center;
        justify-content : ${props => props.type == "wood" ? "center" : "none"};
        
        & .card {
            border : 1px solid red;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            border-radius: 5px;
            flex-basis : 30%;
            margin: 20px 1%;
        }
    `
}



class ImageMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            float: props.float,
            list: []
        };
        this.getList = this.getList.bind(this);
        this.handleClickCard = this.handleClickCard.bind(this);
    }

    // getList = async(type) => {
    //     console.log("GETLIST!!", type)
    //     const  { data } = await axios.get(`http://localhost:8080/woods`);
    //
    //     console.log("getList Data : ",data);
    //     this.setState({list : data});
    // }
    async getList(type) {
        console.log("***2***GETLIST!!", type);

        let urlTpl = type ? `http://localhost:8080/categories/woods/${type}` : `http://localhost:8080/woods`;

        const  { data } = await axios.get(`http://localhost:8080/woods`,{
            headers: {'Access-Control-Allow-Origin': '*'}
        });

        console.log("getList Data : ",data);
        this.setState({list : data});
    }

    handleClickCard(item){
        console.log("***1***",item);
        let {woodNum} = item;

        this.getList(item);
    }

    componentDidMount() {
        this.getList();
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }

    render () {
        return (
            <S.ImgWrap className="ImgMap" float={this.state.float} type={"wood"}>
                {this.state.list.map((item, index) => {
                    console.log(item);
                    return (
                        <div className="card" key={index} onClick={() => this.handleClickCard(item)}>
                            <img src={imgArr[item.woodName2]} width="200" height="200" />
                            <div>
                                <span>{item.woodName}</span>
                            </div>
                        </div>
                    )
                })
                }
            </S.ImgWrap>
        );
    }
}

/*render () {
    return (
        <S.ImgWrap className="ImgMap" float={this.state.float} type={"wood"}>

            <div className="card">
                <img src={gomu} width="200" height="200" />
                <div>
                    <span>고무나무 교구</span>
                </div>
            </div>
            <div className="card">
                <img src={jajac} width="200" height="200" />
                <div>
                    <span>자작나무 교구</span>
                </div>
            </div>

        </S.ImgWrap>
    );
}*/
// function ImageMap(props) {
//     console.log(props);
//     const float = props.float;
//     return (
//         <S.ImgWrap className="ImgMap" float={float} type={"wood"}>
//
//             <div className="card">
//                 <img src={gomu} width="200" height="200" />
//                 <div>
//                     <span>고무나무 교구</span>
//                 </div>
//             </div>
//             <div className="card">
//                 <img src={jajac} width="200" height="200" />
//                 <div>
//                     <span>자작나무 교구</span>
//                 </div>
//             </div>
//
//         </S.ImgWrap>
//     );
//
// }
export default ImageMap;
