import * as React from "react"
import '../components/main.css';

import { Link } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <main>
      <header className="container group">
        <h1 className="logo">
          <Link to="/">STYLES <br/> CONFERENCE</Link>
        </h1>
        <h3 className="tagline">August 24–26th — Chicago, IL</h3>
        <nav className="nav">
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/speakers">speakers</Link></li>
            <li><Link to="/schedule">schedule</Link></li>
            <li><Link to="/venue">venue</Link></li>
            <li><Link to="/register">register</Link></li>
          </ul>
        </nav>
      </header>
    </main>
  )
}

export default IndexPage
