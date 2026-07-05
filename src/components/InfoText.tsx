const InfoText = () => {
  return (
    /* Šířka zvětšena na 85% na velkých obrazovkách a max-w posunuto na 6xl */
    <div className="info-text relative py-12 mb-20 px-8 md:px-16 mt-16 mx-4 sm:w-[90%] lg:w-[85%] max-w-6xl sm:mx-auto bg-[#FBAACA] rounded-[50px] md:rounded-[80px] text-darkBlue text-lg text-center select-none">
      
      <p className="mb-4">
        Právě se rozmýšlíš nad nejlepším rozhodnutím svého života. Jo, jakože
        FAKT!
      </p>
      <p className="mb-4">
        <span className="font-bold">Celouniverzitní Seznamovák UTB</span> již 9.
        rokem přichází na scénu. Tuto nabombenou akci pod záštitou Univerzity
        Tomáše Bati ve Zlíně pro Tebe připravuje
        <span className="font-bold">&nbsp;Studentská unie UTB</span> - parta
        pohodových lidí, kteří se postarají o nezapomenutelnou tečku za koncem
        léta.
      </p>
      <p className="mb-4">
        Je libo kamarády na celý život? Zážitky, kterými se můžeš chlubit
        kámošům u piva? Či letní nečekanou lásku? U nás můžeš dělat co chceš,
        jít spát kdy chceš a hlavně...
        <span className="font-bold">&nbsp;Být sám sebou!</span>
      </p>
      <p className="mb-4">
        Po Seznamováku zcela jistě zjistíš, že Zlín byla ta správná volba. Město
        studentů, talentovaných lidí, ale hlavně to bude tvůj domov, ze kterého
        se ti bude těžce odjíždět.
      </p>
      <p className="mb-6">
        Jdeš do toho, že jo? Tak pošli přihlášku a dojeď za námi na Bystřičku. My
        se Tě už nemůžeme dočkat!
      </p>
      <p className="font-black tracking-wide">Začíná to UTeBe, začíná to na Seznamováku!</p>
    </div>
  )
}
export default InfoText