import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'


interface Props {
  children: React.ReactNode
}


const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
