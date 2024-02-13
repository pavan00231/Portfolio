import React, { useState } from 'react'
import Header from './Header'
import SearchComp from './Search'
import Conversation from './Conversation'
const Menu = () => {
  const [text,setText] = useState('')
  return (
    <div>
        <Header />
        <SearchComp setText={setText} />
        <Conversation text={text} />
    </div>
  )
}

export default Menu