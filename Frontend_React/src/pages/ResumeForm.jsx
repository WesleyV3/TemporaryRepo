import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormComponent from './components/FormComponent/FormComponent';
import FieldTypes from './components/FormComponent/FieldComponent/FieldTypes/FieldTypes';
import { Navigate, useNavigate } from 'react-router-dom';

function ContactUs() {

    const Fields = {
        sections: [
            {
                SectionName: "Personal Info",
                information: "",
                Fields: [
                    {
                        Identifier: 'from_name',
                        Text: 'First Name:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_TEXT
                    },
                    {
                        Identifier: 'user_email',
                        Text: '* Email:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_EMAIL,
                        Required: true
                    },
                ]
            },
            {
                SectionName: "Education",
                information: "",
                Fields: [
                    {
                        Identifier: 'Degree1',
                        Text: 'Degree Earned:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_TEXT
                    },
                    {
                        Identifier: 'School1',
                        Text: 'School Attended:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_TEXT
                    },
                    {
                        Identifier: 'Years1',
                        Text: 'Years Attended:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_TEXT
                    },
                    {
                        Type: FieldTypes.DIVIDER
                    },
                    {
                        Identifier: 'Degree2',
                        Text: 'Degree Earned:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_TEXT
                    },
                    {
                        Identifier: 'School2',
                        Text: 'School Attended:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_TEXT
                    },
                    {
                        Identifier: 'Years2',
                        Text: 'Years Attended:',
                        Placeholder: '',
                        Type: FieldTypes.INPUT_TEXT
                    },
                ]
            },
            {
                SectionName: "Experience",
                Information: "List up to 4 most recent/relevant jobs:",
                Fields: [
                    {
                        Identifier: 'Job1',
                        Text: 'Job Information:',
                        InformationList: ['Employer', 'Job Title', 'Date Range', 'Key Job Duties'],
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                    {
                        Type: FieldTypes.DIVIDER
                    },
                    {
                        Identifier: 'Job2',
                        Text: 'Job Information:',
                        InformationList: ['Employer', 'Job Title', 'Date Range', 'Key Job Duties'],
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                    {
                        Type: FieldTypes.DIVIDER
                    },
                    {
                        Identifier: 'Job3',
                        Text: 'Job Information:',
                        InformationList: ['Employer', 'Job Title', 'Date Range', 'Key Job Duties'],
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                    {
                        Type: FieldTypes.DIVIDER
                    },
                    {
                        Identifier: 'Job4',
                        Text: 'Job Information:',
                        InformationList: ['Employer', 'Job Title', 'Date Range', 'Key Job Duties'],
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                ]
            },
            {
                SectionName: "Skills",
                Information: "",
                Fields: [
                    {
                        Identifier: 'Languages',
                        Text: '1.) Do you read/write/speak any language other than English?',
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                    {
                        Identifier: 'UniqueSkills',
                        Text: '2.) Do you have any unique or special skills? If yes, please provide them here:',
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                ]
            },
            {
                SectionName: "Other",
                Information: "",
                Fields: [
                    {
                        Identifier: 'InvolvementOrganization',
                        Text: '1.) Are you involved in any organizations or take on any sort of leadership role outside of work? (for example, volunteer work)',
                        InformationList: ['Organization', 'Role', 'Date Range', 'Key Duties/Accomplishments'],
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                    {
                        Type: FieldTypes.DIVIDER
                    },
                    {
                        Identifier: 'Awards',
                        Text: '2.) Do you hold any certifications or awards?',
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                    {
                        Type: FieldTypes.DIVIDER
                    },
                    {
                        Identifier: 'AdditionalInformation',
                        Text: "3.) Is there any additional information that you feel should be included on your resume that hasn't been addressed specifically?",
                        Placeholder: '',
                        Type: FieldTypes.TEXTAREA
                    },
                ]
            },

        ]
    }

    function sanitizeString(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();

        return str.replace(/(<([^>]+)>)/ig, '');
    }

    const formData = useRef();
    const navigate = useNavigate();


    function sendEmail(e) {
        let concattedBody = "";
        Fields.sections.forEach(section => {
            concattedBody += `<h3>${section.SectionName}<h3>`;
            section.Fields.forEach(sectionField => {
                let Identifier = sectionField.Identifier;
                if (Identifier) {
                    let elementValue = e[Identifier];
                    if (elementValue === "") return;
                    concattedBody += `<p><b> ${sanitizeString(sectionField.Text)} </b> ${sanitizeString(elementValue)}</p>`;
                }
            })
        })
        e["message"] = concattedBody;
        const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

        emailjs.send(service_id, template_id, e, public_key)
            .then((result) => {
                console.log(result.text);
                navigate('/Successful');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <h1>Workplace Writing Services</h1>
            <p className='resumeForm'>
                Need to work on your resume? 
                Whether it's updating your resume or creating a new custom-tailored resume from scratch, I can help with that! 
                I offer professional writing services including resume writing and creation of LinkedIn profiles. 
                Fill out as much of the information below as you're comfortable with and I will reach out to you to set up a consultation.
            </p>
            <FormComponent form={formData} onsubmit={sendEmail} fielddata={Fields} />
        </>
    );
};

export default ContactUs;