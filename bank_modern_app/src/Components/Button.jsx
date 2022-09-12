import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`px-6 py-4 font-poppins outline-none text-primary bg-blue-gradient font-medium text-[18px] rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button