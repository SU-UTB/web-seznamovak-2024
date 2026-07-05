import '../../scss/Notification.scss'
//import { REGISTRATION_START_DATE_TEXT, REGISTRATION_START_TIME_TEXT, PRE_REGISTRATION_END } from '../../data/constants'
import { PRE_REGISTRATION_END } from '../../data/constants'

const Notification = () => {
  const now = new Date()
  const isPreRegistrationActive = now < PRE_REGISTRATION_END

  return (
    <div className="px-4 lg:px-0 flex flex-col items-center w-full">
      {/* <h2 className="font-bold mb-2 text-darkBlue text-2xl lg:text-4xl">
        REGISTRACE SE SPUSTÍ <br className="md:hidden" />
        <span className="text-3xl lg:text-5xl text-secondaryDark">{REGISTRATION_START_DATE_TEXT} {REGISTRATION_START_TIME_TEXT}</span>
      </h2> */}
      {/* <h2 className="font-bold mb-2 text-darkBlue text-2xl lg:text-4xl">
        Chystáme nový web.<br/>
        Více informací již brzy!
      </h2> */}
      <p className="text-lg text-darkBlue">
        {/* Každý turnus má kapacitu pouze{' '}
        <b>
          <span className="text-3xl lg:text-3xl text-secondaryDark">
            100&nbsp;
          </span>
        </b>
        účastníků.
        <br /> */}
        {/* Nastav si upozornění a my Ti spuštění registrací připomeneme! */}
      </p>
      {isPreRegistrationActive && (
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdTuR5neSQBBe5K8J2qWKoa2CjzzUzil2OOxhuXwSwrQ_aSzA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primaryLight text-secondaryDark text-3xl rounded-[8px] mt-4 px-6 py-3 inline-block text-center font-semibold transition hover:brightness-110"
        >
          CHCI UPOZORNĚNÍ
        </a>
      )}
    </div>
  )
}
export default Notification
