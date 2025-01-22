import React from 'react'
import { Link } from 'react-router-dom'

function Browse() {
  return (
    <Link
      to="/explanation"
      style={{
        background: 'linear-gradient(135deg, #ff6b6b, #ffdf91)',
        border: 'none',
        padding: '12px 30px',
        fontSize: '1rem',
        color: '#fff',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'background 0.3s ease, transform 0.3s ease',
        margin: '10px',
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      Explanations
    </Link>
  )
}

export default Browse
