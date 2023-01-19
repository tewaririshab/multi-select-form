"use client"; // this is a client component
import React, { useState } from "react";
import { useForm } from "./useForm";
import { EmailForm, PasswordForm } from "./FormComponent"

const initialData = {
    email: "",
    password: ""
}
const Form = () => {
    const [data, setData] = useState(initialData);
    function updateFormFields(fields: any) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }
    const { back, next, formComponent, disablePrevious, enableSubmit } =
        useForm([
            <EmailForm {...data} updateFormFields={updateFormFields} />,
            <PasswordForm {...data} updateFormFields={updateFormFields} />
        ])

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (!enableSubmit) return next()
        alert(`Your email is: ${data.email} & Your password is: ${data.password}`)
    }

    return (
        <form onSubmit={onSubmit}>
            {formComponent}
            <div style={{ margin: "10px" }}>
                <button style={{ marginRight: "10px" }} disabled={disablePrevious} onClick={back}>Previous</button>
                <button type="submit">{enableSubmit ? "Submit" : "Next"}</button>
            </div>
        </form>
    )
}
export default Form;