import React from 'react'

const Notice = ({ notice }) => {
  return (
    <div className="container">
      {notice?.notice && (
        <div className="notice p-2 my-3 w-100 overflow-hidden shadow shadow-md rounded rounded-pill">
          <p className="notice-text">{notice.notice}</p>
        </div>
      )}
    </div>
  )
}

export default Notice
