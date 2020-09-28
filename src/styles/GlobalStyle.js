import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
                     ${reset};
a, img{
    text-decoration:none;
    color:inherit;
    border:none;
}
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    color: #333;
}
body{
    font-size: 14px;
}
li {
    list-style: none;
}
`;

export default globalStyles;