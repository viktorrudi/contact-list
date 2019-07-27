import React from 'react'

export default function Contact({ contact, setOpenContact }) {
  const { id, firstName, surname, email } = contact
  const contactList = 'ContactList'
  return (
    <div
      key={id}
      className={`${contactList}__contact`}
      onClick={() => setOpenContact(id)}
    >
      <span className={`${contactList}__contact--name`}>
        {`${firstName} ${surname}`}
      </span>
      <span className={`${contactList}__contact--email`}>{`${email}`}</span>
    </div>
  )
}
