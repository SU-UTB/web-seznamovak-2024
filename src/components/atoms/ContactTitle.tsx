import React from 'react'

interface ContactTitleProps {
  title: string
  color: string
}

const ContactTitle: React.FC<ContactTitleProps> = ({
  title,
  color = '#222B45',
}) => {
  const colorRegex = new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')

  return (
    <h2
      className="py-2 text-2xl md:text-4xl xl:text-4xl uppercase font-bold"
      style={{ color: `${colorRegex.test(color) ? color : '#222B45'}` }}
    >
      {title}
    </h2>
  )
}

export default ContactTitle
