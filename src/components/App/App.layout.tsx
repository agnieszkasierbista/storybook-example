import React from 'react';
import {Header} from "../Header/Header.layout";
import {Button} from "../Button/Button.layout";
import {Input} from "../Input/Input.layout";

function App() {
    return (
        <div>
            <Header/>
            <Button size='small' label='Button' buttonText='Click!'/>
            <Input/>
        </div>
    );
}

export default App;
