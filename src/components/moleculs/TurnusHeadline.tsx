import React from 'react'

interface TurnusHeadlineProps {
  title: string
  date: string
  titleColor: string
  dateColor: string
}

const TurnusHeadline: React.FC<TurnusHeadlineProps> = ({
  title,
  date,
  titleColor,
  dateColor,
}) => {
  return (
    <div className="turnus-headline">
      {/* Použijeme předanou Tailwind třídu místo stylu */}
      <h3 className={`font-bold mb-2 text-4xl ${titleColor}`}>
        {title}
      </h3>
      <h4 className={`mb-1 text-2xl font-black md:text-3xl ${dateColor}`}>{date}</h4>
      <h5 className={`mb-2 text-sm font-medium md:text-base ${dateColor}`}>
        (pondělí - čtvrtek)
      </h5>
    </div>
  )
}

export default TurnusHeadline