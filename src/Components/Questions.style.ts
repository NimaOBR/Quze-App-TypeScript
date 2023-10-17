import styled from "styled-components";

export const Card = styled.div`
max-width: 1100px;
padding: 20px 30px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
text-align: center;
border-radius: 10px;
margin: 0 30px;
background-color: #FFD384;
p{
    font-size: 1.2rem;
}
.number{
    font-size: 1.3rem;
    letter-spacing: 2px;
    color: brown;
    font-weight: bold;
}
`

type BtnStyleProps = {
    correct : boolean,
    userClick:boolean
}

export const BtnCard = styled.div<BtnStyleProps>`
transition: all .2s linear;
:hover{
    opacity: .8;
}

button{
    cursor: pointer;
    color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    user-select: none;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    font-size: 1.08rem;
    background: ${({correct,userClick})=>
        correct?'linear-gradient(90deg,#56ffa4,#59bc86)'
        :!correct&& userClick
        ?" linear-gradient(90deg,#ff5656,#c16868)"
        :
        'linear-gradient(90deg,#56ccff,#6eafb4)'
    };
}

`