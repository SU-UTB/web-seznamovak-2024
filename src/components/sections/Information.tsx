import hvezdice from '../../assets/img/hvezdice.svg'
import ulita from '../../assets/img/ulita.svg'
import musle from '../../assets/img/musle.svg'
import SUlogo from '../../assets/img/SUlogo.svg'

const Information = () => {
  const links = [
    { linkName: 'Mapa', linkTo: 'https://goo.gl/maps/mTdBDjBknPJoU5Yr8/' },
    {
      linkName: 'IDOS spoje',
      linkTo: 'https://idos.cz/vlakyautobusy/spojeni/vysledky/?date=&time=&f=&fc=1&t=Byst%C5%99i%C4%8Dka,,u%20Nov%C3%A1k%C5%AF&tc=200003',
    },
    { linkName: 'Web kempu', linkTo: 'http://kemp-bystricka.cz/' },
  ]

  return (
    <section
      id="informace"
      className="relative min-h-screen bg-lightPink overflow-hidden py-16 px-4 font-sans text-darkBlue"
    >
      {/* Dekorace */}
      <div className="absolute right-[8%] top-[20%] opacity-80 hidden lg:block z-0">
        <img src={hvezdice} alt="Hvězdice" className="w-[80px] h-[80px]" />
      </div>
      <div className="absolute right-[37%] top-[45%] opacity-80 hidden lg:block z-0">
        <img src={musle} alt="Mušle" className="w-[80px] h-[80px]" />
      </div>
      <div className="absolute right-[19%] top-[75%] opacity-80 hidden lg:block z-0">
        <img src={ulita} alt="Ulita" className="w-[80px] h-[80px]" />
      </div>

      {/* Hlavní kontejner */}
      <div className="relative lg:right-[15vw] p-2 w-full md:max-w-[60vw] lg:max-w-[40vw] mx-auto min-h-[700px] flex items-center justify-center z-10">
        {/* CSS Rámeček telefonu (Viditelný na desktopu) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[150px] sm:h-[300px] md:w-[250px] md:h-[500px] lg:w-[300px] lg:h-[600px] xl:w-[350px] xl:h-[700px] bg-lightPink border-[16px] border-black rounded-[3.5rem] shadow-2xl z-0 overflow-hidden">
          {/* Výřez kamery (Notch) */}
          <div className="absolute top-0 inset-x-0 flex justify-center z-20">
            <div className="md:w-24 md:h-4 lg:w-32 lg:h-5 xl:w-36 xl:h-7 bg-black rounded-b-2xl"></div>
          </div>

          {/* Dekorativní prvek uvnitř telefonu (růžový oblouk) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto opacity-80 flex items-center justify-center">
            <img src={SUlogo} alt="SU logo" className="w-[40%] h-auto" />
          </div>
          <div className="absolute inset-0 bg-white/15 backdrop-blur-sm"></div>
        </div>

        {/* Kontejner na chatové bubliny */}
        <div className="relative z-10 md:w-full text-darkBlue flex flex-col gap-6 md:gap-0">
          {/* --- 1. Otázka (Vlevo) --- */}
          <div className="w-full md:w-[50%] pr-12 self-start flex justify-start">
            <div className="bg-beige px-6 py-3 text-left rounded-[2rem] font-bold shadow-lg relative ml-6 md:ml-0 md:-mr-4">
              {/* Ikonka otazníku */}
              <div className="absolute bottom-0 -left-8 w-6 h-6 bg-beige rounded-full flex items-center justify-center shadow font-bold text-sm">
                ?
              </div>
              KOLIK TO STOJÍ?
            </div>
          </div>

          {/* --- 1. Odpověď (Vpravo) --- */}
          <div className="w-full md:w-[50%] pl-12 self-end flex justify-end">
            <div className="bg-beige p-5 rounded-[2rem] shadow-xl relative mr-6 md:mr-0 max-w-sm">
              <h4 className="font-extrabold text-xl md:text-2xl text-left mb-2">
                3&nbsp;399&nbsp;Kč&nbsp;/&nbsp;145&nbsp;€
              </h4>
              <p className="text-sm md:text-sm text-left leading-relaxed font-medium">
                Zálohu 2&nbsp;399&nbsp;Kč&nbsp;/&nbsp;102&nbsp;€ pošleš při
                přihlášení a zbylých 1&nbsp;000&nbsp;Kč zaplatíš až na místě.
              </p>

              {/* Srdíčko vpravo */}
              <div className="absolute bottom-0 -right-8 w-6 h-6 border-[3px] border-darkBlue bg-mintGreen rounded-full flex items-center justify-center shadow">
                <span className="text-darkPink font-bold text-xs">S</span>
              </div>
            </div>
          </div>

          {/* --- 2. Otázka (Vlevo) --- */}
          <div className="w-full md:w-[50%] pr-12 self-start flex justify-start">
            <div className="bg-beige px-6 py-3 text-left rounded-[2rem] font-bold shadow-lg relative ml-6 md:ml-0 md:-mr-8">
              <div className="absolute bottom-0 -left-8 w-6 h-6 bg-beige rounded-full flex items-center justify-center shadow font-bold text-sm">
                ?
              </div>
              KDE BUDU?
            </div>
          </div>

          {/* --- 2. Odpověď (Vpravo) --- */}
          <div className="w-full md:w-[50%] pl-12 self-end flex justify-end">
            <div className="bg-beige px-6 py-4 rounded-[2rem] shadow-xl relative mr-6 md:mr-0 max-w-sm">
              <h4 className="font-extrabold text-lg md:text-xl text-left">
                Kemp Ranč Bystřička
              </h4>

              <div className="absolute bottom-0 -right-8 w-6 h-6 border-[3px] border-darkBlue bg-mintGreen rounded-full flex items-center justify-center shadow">
                <span className="text-darkPink font-bold text-xs">S</span>
              </div>
            </div>
          </div>

          {/* --- 3. Otázka (Vlevo) --- */}
          <div className="w-full md:w-[50%] pr-12 self-start flex justify-start">
            <div className="bg-beige px-6 py-3 text-left rounded-[2rem] font-bold shadow-lg relative ml-6 md:ml-0 md:-mr-2">
              <div className="absolute bottom-0 -left-8 w-6 h-6 bg-beige rounded-full flex items-center justify-center shadow font-bold text-sm">
                ?
              </div>
              JAK SE MÁM PŘIPRAVIT?
            </div>
          </div>

          {/* --- 3. Odpověď (Vpravo) --- */}
          <div className="w-full md:w-[50%] pl-12 self-end flex justify-end">
            <div className="bg-beige p-6 rounded-[2rem] shadow-xl relative mr-6 md:mr-0 max-w-md">
              {/* Změněno z text-center md:text-right na text-left */}
              <p className="text-sm text-left leading-relaxed font-medium">
                Ubytování v chatkách a kompletní strava po celý pobyt je
                zajištěna. Vezmi si sportovní oblečení na teplé dny, ale i na
                chladnější rána. A hlavně si nezapomeň dobrou náladu!
                <br />
                <br />
                <strong>Bude to jízda!</strong>
              </p>

              <div className="absolute bottom-0 -right-8 w-6 h-6 border-[3px] border-darkBlue bg-mintGreen rounded-full flex items-center justify-center shadow">
                <span className="text-darkPink font-bold text-xs">S</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigační odkazy */}
      <div className="relative lg:absolute lg:top-[35%] lg:right-[5%] xl:right-[15%] w-full lg:w-auto flex flex-col justify-center gap-6 mt-12 lg:mt-0 z-30 px-6 max-w-sm lg:max-w-none mx-auto">
        {links.map((link) => (
          /* Zde je nový kontejner (rodič), kterým můžeš kontrolovat šířku tlačítek */
          <div key={link.linkName} className="w-full lg:w-[280px]">
            <a
              href={link.linkTo}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-beige text-darkBlue font-extrabold uppercase tracking-wider text-base md:text-lg py-4 px-8 rounded-[1.2rem] shadow-md hover:bg-darkPink hover:text-beige hover:scale-102 active:scale-98 transition-all duration-200"
            >
              {link.linkName}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Information
