import React from 'react'

function Button({ id, onClick, text }) {
    return (
        <div>
            <button id={id} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
