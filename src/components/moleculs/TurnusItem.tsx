import React from 'react'
import { Link } from 'react-router-dom'
import TurnusHeadline from './TurnusHeadline'

interface TurnusItemProps {
  title: string
  date: string
  currentPlaces?: number
  totalPlaces: number
  titleColor: string
  dateColor: string
  isLoading: boolean
  error: Error | null
  regLink: string
  outOfStock: boolean
}

const TurnusItem: React.FC<TurnusItemProps> = ({
  title,
  date,
  currentPlaces,
  totalPlaces,
  titleColor,
  dateColor,
  isLoading,
  error,
  regLink,
}) => {
  // Pokud nejsou data a není loading, nic neukazujeme
  if (!isLoading && currentPlaces === undefined && currentPlaces !== 0)
    return null

  const available = (currentPlaces ?? 0) > 0

  return (
    <div className="mx-4 mb-32 turnus lg:mb-12 xl:mb-0">
      <TurnusHeadline
        title={title}
        date={date}
        titleColor={titleColor}
        dateColor={dateColor}
      />

      {error && <p className="text-2xl text-beige">Něco se pokazilo...</p>}

      {isLoading ? (
        <div className="mt-8 flex justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-[5px] border-beige border-t-darkPink" />
        </div>
      ) : (
        <div>
          <p className={`mb-8 text-3xl font-medium ${dateColor}`}>
            {available ? `Zbývá ${currentPlaces}/${totalPlaces}` : 'Vyprodáno'}
          </p>
          <Link
            to={regLink}
            className={`block px-6 py-3 text-2xl font-bold rounded-[10px] shadow-md bg-darkPink text-beige hover:bg-beige hover:text-darkPink duration-300`}
          >
            {available ? 'PŘIHLÁSIT SE' : 'PŘIHLÁSIT SE JAKO NÁHRADNÍK'}
          </Link>
        </div>
      )}
    </div>
  )
}

export default TurnusItem
