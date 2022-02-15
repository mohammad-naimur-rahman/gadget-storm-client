import React from 'react'

const Notice = ({ notice }) => {
  return (
    <div className="container">
      {notice?.notice && (
        <div className="notice p-2 mt-3 mb-5 bg-white overflow-hidden shadow shadow-sm rounded rounded-lg">
          <p className="notice-text">{notice.notice}</p>
        </div>
      )}
    </div>
  )
}

export default Notice
