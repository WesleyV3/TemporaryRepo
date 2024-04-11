import React from 'react';
import FieldTypes from './FieldTypes/FieldTypes';
import FieldTypeInput from './FieldTypes/FieldTypeInput';
import FieldTypeTextarea from './FieldTypes/FieldTypeTextarea';
import FieldTypeDivider from './FieldTypes/FieldTypeDivider';

function FieldComponent(props) {
    let element = null;
    let fieldConfiguration = props.fieldConfig;
    //console.log(props);
    switch (fieldConfiguration.Type) {
        case FieldTypes.INPUT_EMAIL:
        case FieldTypes.INPUT_TEXT:
            element = <FieldTypeInput
                config={fieldConfiguration}
                register={props.register} />
            break;
        case FieldTypes.TEXTAREA:
            element = <FieldTypeTextarea 
            config={fieldConfiguration} 
            register={props.register}
            />
            break;
        case FieldTypes.DIVIDER:
            element = <FieldTypeDivider />
            break;
        default:
            return;
    }

    return (
        <div className="field-wrapper">
            {element}
        </div>
    )
}
export default FieldComponent;