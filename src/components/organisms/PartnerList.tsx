import React from 'react'
import { AnalyticsEvents, Firebase } from '../../utils/firebase'
import Link from '../atoms/Link'

interface PartnerItem {
  link: string
  pic: string
  picAlt: string
}

interface PartnerListProps {
  items: PartnerItem[]
  baseSize: number
}

const PartnerList: React.FC<PartnerListProps> = ({ items, baseSize = 32 }) => {
  return (
    <div className="partner-list flex flex-col sm:flex-row gap-x-8 flex-wrap items-center">
      {items.map((item) => (
        <div
          className={`my-3 flex items-center justify-center w-${baseSize} h-${baseSize}`}
          key={item.pic}
        >
          <Link
            linkName=""
            linkTo={item.link}
            onClick={() =>
              Firebase.instance.aLog(AnalyticsEvents.partnerClicked, item.link)
            }
          >
            <img src={item.pic} alt={item.picAlt} loading="lazy" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PartnerList
