import Header from '../ui/dashboard/header/header'
import Footer from '../ui/dashboard/footer/footer'


const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout