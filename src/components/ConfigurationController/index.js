// Write your code here
import './index.css'

const ConfigurationController = () => (
  <div className="layout-container">
    <h1>Layout</h1>
    <input
      type="checkbox"
      id="content"
      checked={showContent}
      onChange={this.onToggleShowContent}
    />
    <label htmlFor="content">Content</label> <br />
    <input
      type="checkbox"
      id="leftnavbar"
      checked={showLeftNavbar}
      onChange={this.onToggleShowLeftNavbar}
    />
    <label htmlFor="leftnavbar">Left Navbar</label> <br />
    <input
      type="checkbox"
      id="righttnavbar"
      checked={showRightNavbar}
      onChange={this.onToggleShowRightNavbar}
    />
    <label htmlFor="righttnavbar">Right Navbar</label> <br />
  </div>
)

export default ConfigurationController
