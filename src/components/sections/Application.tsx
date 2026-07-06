//import '../../scss/Application.scss'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'
import TurnusItem from '../moleculs/TurnusItem'
import Information from './Information'
import useFetchReservations from '../../hooks/useFetchReservations'
import { turnus1, turnus2, REGISTRATION_START_DATE, REGISTRATION_END_DATE } from '../../data/constants';
import { useEffect, useState } from 'react'

const Application = () => {
  // Přidáme state, abychom mohli reagovat na to, že čas běží
  // bez stavu by komponenta nevěděla, že se má přerenderovat, 
  // když uživatel na stránce čeká na 15:00
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const { data, isLoading, error } = useFetchReservations();

  //const shouldStartRegistration = true;

  useEffect(() => {
    // Funkce, která spočítá, jestli už je registrace otevřená
    const checkRegistrationStatus = () => {
      const now = Date.now();
      // Nyní můžeme přímo porovnat getTime() konstant s aktuálním časem.
      // Obě hodnoty jsou v milisekundách od 1.1.1970 v UTC, takže nezáleží 
      // na tom, v jakém pásmu je uživatel.
      const startTime = REGISTRATION_START_DATE.getTime();
      const endTime = REGISTRATION_END_DATE.getTime();
      
      setIsRegistrationOpen(now >= startTime && now <= endTime);
    };

    // Zkontrolujeme to hned při načtení
    checkRegistrationStatus();

    // A nastavíme interval, který bude každou vteřinu kontrolovat, jestli už není čas
    // Tohle je fajn, pokud uživatel načte stránku ve 14:55 a čeká na 15:00.
    const intervalId = setInterval(checkRegistrationStatus, 1000);

    // Vyčištění intervalu při odpojení komponenty
    return () => clearInterval(intervalId);
  }, []); // Prázdné pole závislostí = spustí se jen při mountu komponenty

  return (
    <section id="prihlaska" className='bg-lightPink '>
      <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5 lg:pb-16">
        {!isRegistrationOpen && (
          <div className="w-full notify-headline">
            <Notification />
            <div className="flex flex-wrap justify-around w-full pt-16 mx-auto lg:w-4/5">
              <TurnusHeadline
                title="1. Turnus"
                date={turnus1.displayDate}
                titleColor="text-darkPink"
                dateColor="text-darkBlue"
              />
              <TurnusHeadline
                title="2. Turnus"
                date={turnus2.displayDate}
                titleColor="text-darkPink"
                dateColor="text-darkBlue"
              />
            </div>
          </div>
        )}
        {isRegistrationOpen && (
          <>
            <TurnusItem
              outOfStock={false}
              title="1. Turnus"
              date={turnus1.displayDate}
              currentPlaces={data?.firstBatchCapacity}
              totalPlaces={100}
              titleColor="text-darkPink"
              dateColor="text-darkBlue"
              isLoading={isLoading}
              error={error}
              regLink="/turnus1"
            />
            <TurnusItem
              outOfStock={false}
              title="2. Turnus"
              date={turnus2.displayDate}
              currentPlaces={data?.secondBatchCapacity}
              totalPlaces={100}
              titleColor="text-darkPink"
              dateColor="text-darkBlue"
              isLoading={isLoading}
              error={error}
              regLink="/turnus2"
            />
          </>
        )}
      </div>
      <InfoText />
      <Information />
    </section>
  )
}

export default Application