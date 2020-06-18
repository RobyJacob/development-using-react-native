import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SectionListContacts from '../SectionListContacts';
import Constants from 'expo-constants';

export default class ContactListScreen extends React.Component {
    state = {
	showContacts: true,
    }

    toggleContacts = () => {
	this.setState(prevState => ({ showContacts: !prevState.showContacts }));
    };

    showForm = () => {
	this.props.navigation.navigate('AddContact');
    }

    render() {
    	return (
	    <View style={styles.container}>
		<Button title="toggle contacts" onPress={this.toggleContacts} />
		<Button title="add contacts" onPress={this.showForm}/>
		{this.state.showContacts && ( 
		    <SectionListContacts contacts={this.props.screenProps.contacts} />
		)}
	    </View>
	);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
