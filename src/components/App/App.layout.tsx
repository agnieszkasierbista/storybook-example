import React from 'react';
import {Header} from "../Header/Header.layout";
import {Button} from "../Button/Button.layout";
import {Input} from "../Input/Input.layout";

function App() {
    return (
        <div>
            <Header
                onCreateAccount={() => console.log("a")}
                onLogin={() => console.log("in")}
                onLogout={() => console.log("out")}
                user={{name: "Agnieszka"}}
                backgroundColor="#fdedf5"

            />
            <Input inputSize="large" inputPlaceholder="Type your text here..."/>
            <Button size='medium' label='Click!' onClick={() => console.log("Click!")}/>
        </div>
    );
}

export default App;
