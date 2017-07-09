/**
 * @file
 * INDEX
 *
 * Settings up routes to subpages and include navbar
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch ,Link  } from 'react-router-dom'
import {Collapse} from 'pui-react-collapse';
import {Icon} from 'pui-react-iconography';
import {ExpanderContent} from 'pui-react-expander';

 import './assets/stylesheets/nav.scss';


import App from './views/App/App';
import About from './views/About';
import NotFound from './views/NotFound';
import Leap from './views/Leap/Leap';
import Track from './views/Track';
import Dashboard from './views/Dashboard';

/**
 * A shape.
 * NOTE Test
 */

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/app' component={App}/>
      <Route path='/leap' component={Leap}/>
      <Route path='/track' component={Track}/>
    </Switch>
  </main>
)



class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  render() {
    return (
      <div>

        <button className="btn ghost" onClick={() => this.setState({expanded: !this.state.expanded})}>
            <Icon src="menu" style={{color:"white"}}/>
        </button>

        <ExpanderContent expanded={this.state.expanded}
                         onEntered={() => console.log('onEntered')}
                         onExited={() => console.log('onExited')}>
                         <ul>
                           <li><Link to='/'>App</Link></li>
                           <li><Link to='/dashboard'>Dashboard</Link></li>
                           <li><hr/></li>
                           <li><Link to='/leap'>Leap</Link></li>
                           <li><Link to='/leap'>Camera</Link></li>
                           <li><hr/></li>
                           <li><Link to='/gestures'>Gestures</Link></li>
                           <li><Link to='/'>Widgets</Link></li>
                           <li><hr/></li>
                           <li><Link to='/'>Examples</Link></li>
                           <li><Link to='/track'>Tracking</Link></li>
                           <li><Link to='/'>Szenarios</Link></li>

                           <li><hr/></li>
                           <li><Link to='/'>Meyer Werft</Link></li>
                           <li><Link to='/'>Prostep GBL</Link></li>
                           <li><hr/></li>

                           <li><Link to='/doc'>Doc</Link></li>
                           <li><Link to='/style'>Style</Link></li>

                         </ul>
        </ExpanderContent>
      </div>
    )
  }
}
const Nav = () => (
  <nav>
    <MenuButton/>
    </nav>
)

const Routes = () => (
  <div>
    <Nav />
    <Main />
  </div>
)

ReactDOM.render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('root'))
