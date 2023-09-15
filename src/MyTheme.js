import { useContext } from "react";
import { ColorContext } from "./App";



function MyTheme() {

const myColor = useContext(ColorContext);


    const themeIdeas = {
        backgroundColor: myColor ? 'pink' : 'blue',
        padding: '100px',
        margin: '100px'
    }

    return (<div style={themeIdeas}>
        <p>MY BLOCK</p>
    </div>)
}

export default MyTheme;