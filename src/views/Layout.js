var React = require('react');
//var CategoryList = require('./CategoryList.jsx');


var Layout = React.createClass({
	render: function() {
		return (
			<html>
				<head>
					<meta charSet='utf-8' />
					<title>{this.props.title}</title>
				</head>
				<body>
				<h3>ReactNode</h3>
					{this.props.children}
				</body>
				<script src='/bundle.js'></script>
			</html>
		);
	};
});
module.exports = Layout;
