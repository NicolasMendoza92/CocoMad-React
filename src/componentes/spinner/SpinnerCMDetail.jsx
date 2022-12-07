import React from 'react'
import { Spinner } from 'react-bootstrap'

export const SpinnerCMDetail= () => {
    return (
        <div
            className="spinner-style-details">
            <Spinner animation="border" role="status" />
        </div>
    )
}