import styled from "styled-components";
import { NavName, NavIcon, NavPath } from "../data/navdata";
import Router, { useRouter } from "next/router";
import { useState } from 'react';


const NavCont = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 100vw;
`

const NavTop = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const MenuCont = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const IconCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const NavBot = styled.div`
position: fixed;
background-image: url("/background-images/menuBackground.png");
background-size: contain;
background-repeat: no-repeat;  
width: 25rem;  
max-height: 0px;
overflow: hidden;
`
const NavUl = styled.ul`
 display: flex;
 flex-direction: column;
 align-items: center;
 width:100%;
 padding: 5rem;
 margin: 0;
 text-align:left;
`
const NavLi = styled.li`
display: flex;
font-family: poppins;
color: white;
font-size: 12pt;
line-height: 36pt;
`

export function NavBar() {
    const r = useRouter()
    const [menuPopUp, setMenuPopUp] = useState(false)


    function menuState() {
        if (menuPopUp === false) {
            setMenuPopUp(true)
        } else if (menuPopUp === true) {
            setMenuPopUp(false)
        }
    }

    return <NavCont>
        <NavTop>
            <MenuCont>
                {
                    menuPopUp === false &&
                    <img src="/icons/menu-icon.png" width="60pt"
                        onClick={() => menuState()} >
                    </img>
                }
            </MenuCont>
            <IconCont>
                <img src="/icons/graduation-hat.png" width="80pt">
                </img>
            </IconCont>
        </NavTop>


        <NavBot style={menuPopUp ? { maxHeight: "100%" } : { height: "0%", }}>
            <NavUl>
                <MenuCont>
                    {
                        menuPopUp === true &&
                        <div id="closeButton"
                            onClick={() => menuState()} > <h1>x</h1>
                        </div>
                    }
                </MenuCont>
                { NavName.map((o, i) => <NavLi key={ NavName[i] }
                    onClick = {() => r.push({
                        pathname: NavPath[i]
                    })} >
                    { NavName[i] }</NavLi>)}
            </NavUl>
        </NavBot>
    </NavCont>
}