// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <>
          <Header showContent={showContent} />
          <Body showLeftNavbar={showLeftNavbar} />
          <Footer showRightNavbar={showRightNavbar} />
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
