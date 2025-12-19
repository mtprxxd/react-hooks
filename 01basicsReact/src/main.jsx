import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App | pune</h1>
//         </div>
//     )
// }
const otherElement = (
    <a href='https: //instagram.com' target='_blank'>Visit Instagram</a>
)
const reactElement = React.createElement(
    'a',
    {href: 'https: //instagram.com', target: '_blank'},
    'visit INSTAGRAM'

)


  ReactDOM.createRoot(document.getElementById('root')).render(
 
    // otherElement
    <App />
  
)