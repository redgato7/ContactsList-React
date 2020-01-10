import React from 'react'

const ContactPerson = props => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${props.contact.img}.jpg`

    return (
    <div className="contact">
      <img src={url} alt=""/>
      <div>
        <h4>{props.contact.name}</h4>
        <h4>{props.contact.job}</h4>
      </div>
    </div>
    )

  }

export default ContactPerson;