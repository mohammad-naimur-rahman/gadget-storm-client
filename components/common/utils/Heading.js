import React from 'react'

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center py-5">
      <h2>{title}</h2>
      <h4 className="pt-3">{subtitle}</h4>
    </div>
  )
}

export default Heading
