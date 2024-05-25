import React from 'react'

const Footer = () => {
  return (
    <footer className='font-DM-Sans text-blue-olinger-c1 py-10 md:py-17.5 bg-blue-olinger-c10 bg-olinger-footer bg-no-repeat bg-center md:bg-bottom bg-contain'>
      <div className="container flex flex-col items-center">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4">
            <img src="/img/logo-olinger-white.svg" alt="Logotipo branco da Olinger" className='w-44 h-full object-contain' />
            <div className="flex items-center flex-col gap-3">
              <p className='text-sm'>Acompanhe nossas redes sociais</p>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/malhariaolinger?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noreferrer" target='_blank'><img src="/img/instagram-icon.svg" alt="Ícone do Instagram" className='w-6 h-6 object-contain' /></a>
                <a href="https://www.facebook.com/share/Y2DLANDrigA6GmZ5/?mibextid=LQQJ4d" rel="noreferrer" target='_blank'><img src="/img/facebook-icon.svg" alt="Ícone do Facebook" className='w-6 h-6 object-contain' /></a>
              </div>
            </div>    
          </div>
          <p className='text-center'>R. Sen. Flávio C. Guimarães, 1600 - Boa Vista, Ponta Grossa - PR, 84070-460</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer