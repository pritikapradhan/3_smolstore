'use client'

import { useState } from "react"

export default function EmailInput() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleAddSubscriber() {
        const isValid = email.includes('@') && email.includes('.') && email.length > 5 && email.length < 50

        if (isValid) {
            setMessage('Thanks for signing up!')
            setEmail('')
        } else {
            setMessage('Please enter a valid email address.')
        }
    }
    return (
        <div className="sign-up">
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder="Email address..." />
            <button onClick={handleAddSubscriber} className="button-card">Sign Up</button>
            {message && <p>{message}</p>}
        </div>
    )

}