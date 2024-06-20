import ContactTitle from '../atoms/ContactTitle'
import EmailLink from '../atoms/EmailLink'

const Organiser = () => {
  return (
    <div className="organiser mb-12">
      <ContactTitle title="POŘADATEL" color="#222B45" />
      <div className="info font-medium text-blue">
        <p className="mb-3">Studentská unie UTB, z.s</p>
        <p className="mb-3">Růmy 4046, 760 01 Zlín</p>
        <EmailLink email="seznamovak@sutb.cz" />
        <p className="mb-3">Prezident Studentské unie: Karel Kratochvil</p>
        <EmailLink email="prezident@sutb.cz" />
      </div>
    </div>
  )
}

export default Organiser
