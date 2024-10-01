import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NavigateToLogin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/', { replace: true })
    }, [])
    return (
        <div>

        </div>
    )
}

export default NavigateToLogin