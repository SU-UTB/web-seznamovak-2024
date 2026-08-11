import {
  //facultyList,
  partnerList,
  //unionList,
  //utb,
} from '../../data/partnerList'
//import Link from '../atoms/Link'
import SectionTitle from '../atoms/SectionTitle'
//import FacultyList from '../organisms/FacultyList'
import PartnerList from '../organisms/PartnerList'
//import { AnalyticsEvents, Firebase } from '../../utils/firebase'

const Partners = () => {
  return (
    <section id="partneri">
      <div className="relative z-30 bg-lightPink">
        <SectionTitle title="Partneři" color="darkBlue" />
        {/* <FacultyList items={facultyList} /> */}
        
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-16 flex flex-col items-center gap-y-16">
          {/* <Link
            linkName=""
            linkTo={utb.link}
            onClick={() =>
              Firebase.instance.aLog(AnalyticsEvents.partnerClicked, utb.link)
            }
          >
            <img
              className="w-96 h-auto rounded-lg"
              src={utb.pic}
              alt={utb.picAlt}
              loading="lazy"
            />
          </Link>
          <PartnerList items={unionList} /> */}
          
          <PartnerList items={partnerList} />
        </div>
      </div>
    </section>
  )
}

export default Partners