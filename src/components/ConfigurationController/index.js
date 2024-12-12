// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="layout-container">
          <h1>Layout</h1>
          <input
            type="checkbox"
            id="content"
            checked={showContent}
            onChange={onToggleShowContent}
          />
          <label htmlFor="content">Content</label> <br />
          <input
            type="checkbox"
            id="leftnavbar"
            checked={showLeftNavbar}
            onChange={onToggleShowLeftNavbar}
          />
          <label htmlFor="leftnavbar">Left Navbar</label> <br />
          <input
            type="checkbox"
            id="righttnavbar"
            checked={showRightNavbar}
            onChange={onToggleShowRightNavbar}
          />
          <label htmlFor="righttnavbar">Right Navbar</label> <br />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
