import React from 'react'
// import { AnalyticsEvents, Firebase } from '../../utils/firebase'

interface LinkProps {
  linkTo: string
  linkName: string
  children?: React.ReactNode
  onClick?: () => void
}

const Link: React.FC<LinkProps> = ({ linkTo, linkName, children, onClick }) => {
  return (
    <a
      className="no-underline block"
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {linkName}
      {children}
    </a>
  )
}

export default Link
