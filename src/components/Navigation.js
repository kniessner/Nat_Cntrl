import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Collapse} from 'pui-react-collapse';
import {Icon} from 'pui-react-iconography';
import {ExpanderContent} from 'pui-react-expander';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div id="nav_bar_top">

        <button className="icon_btn ghost" onClick={() => this.setState({
          expanded: !this.state.expanded
        })}>
          <Icon src="menu" style={{
            color: "white"
          }}/>
        </button>

        <nav className="main_nav">
          {this.props.main_elements}
        </nav>

        <ExpanderContent className="nav_bar_expand" expanded={this.state.expanded} onEntered={() => console.log('onEntered')} onExited={() => console.log('onExited')}>
          <nav className="sub_nav">
            
          </nav>
        </ExpanderContent>

      </div>
    )
  }
}

export default Navigation;
