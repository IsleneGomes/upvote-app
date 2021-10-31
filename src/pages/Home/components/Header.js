import React from 'react';
import logotipo from '../components/download.jpeg'

export default function Header() {
  return (
    <header className="header">
        <div className="toolbar">
          <div className="">
            <a href='/'>
            <img src={ logotipo } alt='logotipo da Segware do Brasil' width='50px' />
            </a>
          </div>
          <div className="">
            <button>Novo Post</button>
            <span>img1</span>
            <span>img2</span>
          </div>
        </div>
      </header>
  )
}
