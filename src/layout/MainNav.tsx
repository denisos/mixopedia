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
      <li>
        <NavLink exact to="/pokemon">
          <FormattedMessage id="nav.pokemon" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/context">
          <FormattedMessage id="nav.context" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/patterns">
          <FormattedMessage id="nav.patterns" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/useEffect">
          <FormattedMessage id="nav.useeffect" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/tasklist">
          <FormattedMessage id="nav.tasklist" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/formcontrols">
          <FormattedMessage id="nav.formcontrols" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/propsviewer">
          <FormattedMessage id="nav.propsviewer" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/tstypings">
          <FormattedMessage id="nav.tstypings" />
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/blockrenderer">
          <FormattedMessage id="nav.blockrenderer" />
        </NavLink>
      </li>
    </ul>
  )
}

export default MainNav;