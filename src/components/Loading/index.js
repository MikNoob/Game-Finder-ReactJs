import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'

let Loading = () => (
    <Spinner
        className='Loading--Container'
        animation="border"
        variant="secondary"
    />
)
        
export default Loading