import React from "react";
import '../../FormStyling.css';
function FieldTypeInput(props) {

    let config = props.config;
    return (<>
        <label>{config.Text}</label>
        <p><input 
        name={config.Identifier} 
        type={config.Type} 
        {...props.register(config.Identifier, {required: config.Required})} /></p>
        </>
    );
}

export default FieldTypeInput;