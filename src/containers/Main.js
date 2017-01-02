import React from "react";
import { Link } from "react-router";
import { Provider, observer } from 'mobx-react';
import Top from '../components/Top';
import Menu from '../components/Menu';
import SSE from '../stores/SSE';

let SSEStore = new SSE;

@observer
class Main extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			menu: false
		}
	}

	toggleMenu() {
		this.setState({
			menu: !this.state.menu
		});
	}

	render () {
		return (
				<Provider ssestore={SSEStore}>
					<html lang="en">
						<head>
							<meta charSet="UTF-8" />
							<meta name="viewport" content="width=device-width" />
							<title>Home</title>
							<link rel="manifest" href="/manifest.webmanifest" />
							<link rel="stylesheet" href="css/main.css" type="text/css" />
						</head>
						<body>
							<Menu open={this.state.menu} toggle={this.toggleMenu.bind(this)} />
							<Top toggle={this.toggleMenu.bind(this)} />
							<div id="app">{this.props.children}</div>
							<script src="/serviceWorkerInstaller.js"></script>
							<script type="text/javascript" src="/client.js"></script>
						</body>
					</html>
				</Provider>
			);
	}

}
export default Main;
