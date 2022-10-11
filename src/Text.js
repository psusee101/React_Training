import React, { Component } from "react";

export class Text extends Component {
render() {
	return <h6>{this.props.children}</h6>;
}
}

export default Text;
