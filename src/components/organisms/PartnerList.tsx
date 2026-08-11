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
}

const PartnerList: React.FC<PartnerListProps> = ({ items }) => {
  return (
    <div className="w-full grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 items-start">
      {items.map((item) => (
        <div
          className="flex flex-col items-center"
          key={item.pic}
        >
          <Link
            linkName=""
            linkTo={item.link}
            onClick={() =>
              Firebase.instance.aLog(AnalyticsEvents.partnerClicked, item.link)
            }
          >
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center p-2 rounded-xl transition-transform group-hover:scale-105">
                <img 
                  src={item.pic} 
                  alt={item.picAlt} 
                  loading="lazy" 
                  className="max-w-full max-h-full object-contain rounded-md" 
                />
              </div>
              <span className="mt-3 text-center text-sm md:text-base font-semibold text-darkBlue">
                {item.picAlt}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PartnerList