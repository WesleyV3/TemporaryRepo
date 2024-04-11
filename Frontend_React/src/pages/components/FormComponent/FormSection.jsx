import React from "react";
import FieldComponent from "./FieldComponent/FieldComponent";

function FormSection(props) {
    let section = props.section;
    return (<>
        <h3> {section.SectionName}  </h3>
        <p className="sectionInformation"> {section.Information} </p>
        {
            section.Fields.map(entry => {
                return <FieldComponent
                    fieldConfig={entry}
                    register={props.register}
                />
            })
        }
    </>);
}

export default FormSection;