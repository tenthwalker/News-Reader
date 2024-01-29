import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className='main-component'>
      <h2>Oops! No news is good news?</h2>
      <p>Return to the feed:</p>
      <button className='nav-button'><Link to='/'>Home</Link></button>
    </div>
  )
}