import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/header'
import Form from './Form/form'
import Footer from './Footer/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
  <Form/>
  <Footer/>
  </React.StrictMode>,
)
