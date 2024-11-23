// Write your code here
import './index.css'

const Body = () => (
  <div className="body-container">
    <div className="left">
      <h1>Left Navbar Menu</h1>
      <ul className="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
    <div className="content">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </div>
    <div className="right">
      <h1>Right</h1>
      <div className="ad">
        <p>Ad 1</p>
      </div>
      <div className="ad">
        <p>Ad 2</p>
      </div>
    </div>
  </div>
)

export default Body
