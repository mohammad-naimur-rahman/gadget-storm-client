import React from 'react'

const Notice = ({ notice }) => {
  return (
    <div className="container">
      {notice?.notice && (
        <div className="notice p-2 mt-5 mb-3 bg-white w-100 overflow-hidden shadow shadow-sm rounded rounded-pill">
          <p className="notice-text">{notice.notice}</p>
        </div>
      )}
    </div>
  )
}

export default Notice
