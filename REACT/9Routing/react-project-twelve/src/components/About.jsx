import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    function handleclick(){
        navigate('/dashboard')
    }
  return (
    <div>
      About page
      <button onClick={handleclick}>
        Click for Dashboard
      </button>
    </div>
  )
}

export default About
