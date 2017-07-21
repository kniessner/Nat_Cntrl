var React = require('react');
//var CategoryList = require('./CategoryList.jsx');

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div>
				<h3>ReactNode</h3>
					{this.props.children}
	   </div>

		)
  }
};

module.exports = Layout;
