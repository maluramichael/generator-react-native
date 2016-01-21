let React = require('react-native');

let {
	Text,
	View,
	Component,
} = React;

export default class <%= name %> extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<View>
				<Text><%= name %></Text>
			</View>
		)
	}
}
