import React from "react";
import '../../FormStyling.css';
import BulletListComponent from "./BulletListComponent";
function FieldTypeTextarea(props) {

    let config = props.config;
    return (<>
        <label>{config.Text}</label>
        {(config.InformationList) && <BulletListComponent bulletList={config.InformationList} />}
        <p><textarea name={config.Identifier} placeholder={config.Placeholder} {...props.register(config.Identifier)} /></p>
    </>
    );
}

export default FieldTypeTextarea;