import React from 'react'
import './index.css'

function FormField({ label, type, name, value, onChange }) {
    if (type === 'textArea') {
        return (
            <div className='field'>
                <label>
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={label}
                    />
                </label>
            </div>
        )
    } else {
        return (
            <div className="field">
                <label>
                    <input type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={label}
                    />
                </label>
            </div>
        )
    }
}

export default FormField