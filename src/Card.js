import React, { Component } from "react";
import Text from "./Text";

 class Card extends Component {
render() {
	return (
	<div
		style={{
		border: "2px solid green",
		margin: "5px",
		width: "40vw",
		padding: "5px",
		}}
	>
		<h3> {this.props.Topic} </h3>
		<Text>
		<a
			href={this.props.URL}
			style={{ textDecoration: "none", color: "red" }}
			target="_blank"
		>
			{this.props.title}
		</a>
		</Text>
	</div>
	);
}
}

export default Card;
