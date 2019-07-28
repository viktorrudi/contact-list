import React from 'react'

export default function Contact({ contact, setOpenContact }) {
  const { id, firstName, surname, email } = contact
  const contactStyle = 'Contact'
  return (
    <div
      key={id}
      className={`${contactStyle}`}
      onClick={() => setOpenContact(id)}
    >
      <span className={`${contactStyle}__name`}>
        {`${firstName} ${surname}`}
      </span>
      <span className={`${contactStyle}__email`}>{`${email}`}</span>
    </div>
  )
}
