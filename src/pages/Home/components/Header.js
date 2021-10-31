import React from 'react'

export default function Header() {
  return (
    <header className="header">
        <div className="toolbar">
          <div className="">
            <a href='/'>Logo</a>
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
