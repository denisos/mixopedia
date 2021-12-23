import { NavLink } from "react-router-dom";
import { FormattedMessage} from 'react-intl'
import './MainNav.css';

function MainNav() {
  return (
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          <FormattedMessage id="nav.home" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about">
          <FormattedMessage id="nav.about" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/dashboard">
          <FormattedMessage id="nav.dashboard" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/schemaparser">
          <FormattedMessage id="nav.schemaparser" />
        </NavLink>
      </li>
    </ul>
  )
}

export default MainNav;