import React from "react";
import './FormStyling.css';
import FormSection from "./FormSection";
import { useForm } from "react-hook-form";


function FormComponent(props) {
    const fieldData = props.fielddata;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    return (
        <div className="Form">
            <form ref={props.form} onSubmit={handleSubmit(props.onsubmit)}>
                {
                    fieldData.sections.map(section => {
                        return <FormSection section={section} register={register} />
                    })
                }
                <textarea name="message" {...register("message")} hidden />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default FormComponent;