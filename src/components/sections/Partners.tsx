import {
  facultyList,
  partnerList,
  unionList,
  utb,
} from '../../data/partnerList'
import Link from '../atoms/Link'
import SectionTitle from '../atoms/SectionTitle'
import FacultyList from '../organisms/FacultyList'
import PartnerList from '../organisms/PartnerList'
import { AnalyticsEvents, Firebase } from '../../utils/firebase'

const Partners = () => {
  return (
    <section id="partneri">
      <div className="relative z-30 bg-white">
        <SectionTitle title="Partneři" color="#222B45" />
        <FacultyList items={facultyList} />
        <div className="w-full px-6 lg:px-0 py-16 flex flex-col items-center gap-y-16">
          <Link
            linkName=""
            linkTo={utb.link}
            onClick={() =>
              Firebase.instance.aLog(AnalyticsEvents.partnerClicked, utb.link)
            }
          >
            <img
              className="w-96 h-auto"
              src={utb.pic}
              alt={utb.picAlt}
              loading="lazy"
            />
          </Link>
          <PartnerList items={unionList} baseSize={64} />
          <PartnerList items={partnerList} baseSize={32} />
        </div>
      </div>
    </section>
  )
}

export default Partners
