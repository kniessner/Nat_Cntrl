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
      <div id="nav_bar_top">

        <button className="icon_btn ghost" onClick={() => this.setState({expanded: !this.state.expanded})}>
            <Icon src="menu" style={{color:"white"}}/>
        </button>

        <nav className="sub_nav">
          <button className="turk">
            Übersicht
          </button>
          <button className="turk active">
            Kapitel
          </button>
          <button className="turk">
            Hintergründe
          </button>
          <button className="turk">
            Statisken
          </button>
          <button className="turk">
            Quellen
          </button>
          <button className="turk">
            Referenzen
          </button>
          <button className="turk">
            Medien
          </button>
            {this.props.children}
        </nav>


        <ExpanderContent className="nav_bar_expand" expanded={this.state.expanded}
                         onEntered={() => console.log('onEntered')}
                         onExited={() => console.log('onExited')}>
           <ul>
             <li className="w_50" ><Link to='/'>Home</Link></li>
             <li className="w_50"><Link to='/dashboard'>Try</Link></li>
             <li className="w_50"><Link to='/modules'>Modules</Link></li>
           </ul>
        </ExpanderContent>

      </div>
    )
  }
}

export default Navigation;
