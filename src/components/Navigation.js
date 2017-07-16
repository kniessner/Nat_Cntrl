import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch ,Link  } from 'react-router-dom';
import {Collapse} from 'pui-react-collapse';
import {Icon} from 'pui-react-iconography';
import {ExpanderContent} from 'pui-react-expander';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  render() {
    return (
      <nav>

        <button className="btn ghost" onClick={() => this.setState({expanded: !this.state.expanded})}>
            <Icon src="menu" style={{color:"white"}}/>
        </button>


        <ExpanderContent expanded={this.state.expanded}
                         onEntered={() => console.log('onEntered')}
                         onExited={() => console.log('onExited')}>
                         <ul>
                           <li className="w_50" ><Link to='/'>Home</Link></li>
                           <li className="w_50"><Link to='/dashboard'>Try</Link></li>
                         </ul>
        </ExpanderContent>
      </nav>
    )
  }
}
/*
<li><Link to='/leap'>Leap</Link></li>
<li><Link to='/leap'>Camera</Link></li>
<li><Link to='/gestures'>Gestures</Link></li>
<li><Link to='/'>Widgets</Link></li>
<li><Link to='/'>Examples</Link></li>
<li><Link to='/track'>Tracking</Link></li>
<li><Link to='/'>Szenarios</Link></li>
<li><Link to='/'>Meyer Werft</Link></li>
<li><Link to='/'>Prostep GBL</Link></li>
<li><Link to='/doc'>Doc</Link></li>
<li><Link to='/style'>Style</Link></li>
 */

export default Navigation;
