import React from 'react'

function Input({ label, ...rest }) {
    return (
        <>
            <label htmlFor={rest.id}>{label}</label>
            <input type="number" {...rest} />
        </>
    )
}

export default Input
