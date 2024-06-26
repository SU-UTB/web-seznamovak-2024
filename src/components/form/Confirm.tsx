import React from 'react'

interface ConfirmProps {
  turnus: string
}

const Confirm: React.FC<ConfirmProps> = ({ turnus }) => {
  return (
    <div className="confirm">
      <div className="confirmContainer">
        Registrace na {turnus}. turnus proběhla v pořádku. Lorem ipsum nějaké
        profi copy. Kurvy chlast a chlebíčky. Očekávejte potvrzovací e-mail.
      </div>
    </div>
  )
}
export default Confirm
