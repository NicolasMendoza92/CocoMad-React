import React from 'react'
import { Spinner } from 'react-bootstrap'

export const SpinnerCM= () => {
    return (
        <div
            className="spinner-style">
            <Spinner animation="border" role="status" />
        </div>
    )
}