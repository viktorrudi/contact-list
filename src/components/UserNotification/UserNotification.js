import React, { useEffect, useContext } from 'react'
import { ContactContext } from '../ContactContext'
import { FaTimes } from 'react-icons/fa'
import './UserNotification.scss'

export default function UserNotification() {
  const { notification, showNotification, setShowNotification } = useContext(
    ContactContext
  )

  useEffect(() => {
    // Hiding notification on timeout
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false)
      }, 2000)
    }
  }, [setShowNotification, showNotification])

  const userNotification = 'UserNotification'
  return (
    <div
      className={`
      ${userNotification}  
      ${showNotification ? 'visible' : 'hidden'}
      ${notification ? notification.type : ''}
      `}
    >
      {notification.type === 'success' ? (
        <span role="img" aria-label="success">
          🤟
        </span>
      ) : null}
      {notification.message}

      <button className="btn close" onClick={() => setShowNotification(false)}>
        <FaTimes />
      </button>
    </div>
  )
}
