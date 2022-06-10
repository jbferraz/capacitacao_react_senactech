import React from "react";

function Hello(props){
    console.log(typeof props.idade);
    return(
        <div>
            {
                props.idade >= 18
                ?<h3>Hello {props.name}! Pode passar!</h3>
                :<h3>Hello {props.name}! Proíbido! Sua idade é {props.idade}</h3>
            }
            
        </div>
    );
}

export default Hello;