import React from 'react'
import ReactDOM from 'react-dom/client'


const anotherUser = 'Tushar'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'Clik me',
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
