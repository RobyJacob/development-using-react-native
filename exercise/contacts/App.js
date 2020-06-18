import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';

import contacts from './contacts';
import SectionListContacts from './SectionListContacts';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import { createSwitchNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
},{
    initialRouteName: 'ContactList',
});

export default class App extends React.Component {
  state = {
      contacts
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <AppNavigator
	screenProps={{
	  contacts: this.state.contacts,
	  addContact: this.addContact
	}}
      />
    );
  };
}
