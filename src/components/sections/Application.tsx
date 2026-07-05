//import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'
import useFetchReservations from '../../hooks/useFetchReservations'
// Import the constants from your data/constants.ts file
import { turnus1, turnus2, REGISTRATION_START_DATE, REGISTRATION_END_DATE } from '../../data/constants';
import sLogo from '../../assets/img/s_logo.svg'; // Původní import loga

const Application = () => {
  // Use the REGISTRATION_START_DATE constant for the registration start time
  const nowUTC = Date.now();
  const startDateUTC = Date.parse(REGISTRATION_START_DATE.toISOString());
  const endDateUTC = Date.parse(REGISTRATION_END_DATE.toISOString());
  
  const isRegistrationOpen = nowUTC >= startDateUTC && nowUTC <= endDateUTC;
  
  // const shouldStartRegistration = true

  const { data, isLoading, error } = useFetchReservations();

  const formatDisplayDate = (dateString: string, includeYear = true) => {
    const trimmedDate = dateString.trim();
    return includeYear ? trimmedDate : trimmedDate.replace(/\s\d{4}$/, '');
  };

  return (
    /* Zpátky k čistému Tailwindu: shora dolů. Začíná lightPink, uprostřed ztmavne do darkPink a dole se vrátí do lightPink, aby plynule navázal a nevznikl pruh */
    <section id="prihlaska" className="w-full pb-16 bg-lightPink md:bg-gradient-to-b md:from-lightPink md:via-darkPink md:to-lightPink">
      <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5 lg:pb-16">
        {!isRegistrationOpen && (
          <div className="w-full notify-headline">
            <Notification />
            {/* max-w-3xl kontejner, který drží prvky blízko u sebe jako ve Figmě */}
            <div className="flex flex-col items-center w-full max-w-3xl pt-16 mx-auto px-4 gap-4 md:flex-row md:justify-center md:items-center md:gap-4">
              <div className="flex flex-col items-center w-full md:w-[240px] text-center select-none md:items-end md:text-right">
                <h2 className="text-[#D9F216] font-black text-3xl md:text-[2.5rem] uppercase tracking-wide leading-none">
                  1. TURNUS
                </h2>
                <p className="text-darkBlue font-black text-xl md:text-2xl mt-2 whitespace-nowrap">
                  {formatDisplayDate(turnus1.displayDate, false)}
                </p>
              </div>

              <div className="flex justify-center items-center shrink-0 order-first md:order-none mx-2 md:mx-4">
                <img 
                  src={sLogo} 
                  alt="Studentská Unie" 
                  className="w-[150px] h-[150px] md:w-[190px] md:h-[172px] object-contain drop-shadow-sm"
                />
              </div>

              <div className="flex flex-col items-center w-full md:w-[240px] text-center select-none md:items-start md:text-left">
                <h2 className="text-[#D9F216] font-black text-3xl md:text-[2.5rem] uppercase tracking-wide leading-none">
                  2. TURNUS
                </h2>
                <p className="text-darkBlue font-black text-xl md:text-2xl mt-2 whitespace-nowrap">
                  {formatDisplayDate(turnus2.displayDate, false)}
                </p>
              </div>
            </div>
          </div>
        )}
        {isRegistrationOpen && (
          <div className="flex flex-col w-full max-w-4xl mx-auto px-4 gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-6 w-full">
              <div className="w-full md:flex-1">
                <TurnusItem
                  outOfStock={false}
                  title="1. TURNUS"
                  date={formatDisplayDate(turnus1.displayDate)}
                  currentPlaces={data?.firstBatchCapacity}
                  totalPlaces={100}
                  titleColor="text-[#D9F216]"
                  dateColor="text-darkBlue"
                  isLoading={isLoading}
                  error={error}
                  regLink="/turnus1"
                />
              </div>

              <div className="flex justify-center items-center shrink-0 order-first md:order-none">
                <img 
                  src={sLogo} 
                  alt="Studentská Unie" 
                  className="w-28 h-28 md:w-40 md:h-40 object-contain"
                />
              </div>

              <div className="w-full md:flex-1">
                <TurnusItem
                  outOfStock={false}
                  title="2. TURNUS"
                  date={formatDisplayDate(turnus2.displayDate)}
                  currentPlaces={data?.secondBatchCapacity}
                  totalPlaces={100}
                  titleColor="text-[#D9F216]"
                  dateColor="text-darkBlue"
                  isLoading={isLoading}
                  error={error}
                  regLink="/turnus2"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <InfoText />
      <Information />
    </section>
  )
}

export default Application