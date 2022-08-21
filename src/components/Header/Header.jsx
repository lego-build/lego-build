import React from 'react'
import Search from "../Search/Search"

const Header = () => {
  return (
      <header>
          <div><h1>Browse Project Workflows</h1></div>
          <p>Check out different workflows and templates to fit your project’s needs. Try searching for ‘TypeScript’, or ‘hooks’.</p>
          <Search />
    </header>
  )
}

export default Header