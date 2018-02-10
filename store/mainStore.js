import { observable, action } from 'mobx';
import { Alert } from 'react-native';

export default class Store {
  @observable query = '';
  @observable array = [
    { name: "nbn", secondName: "everstov" },
    { name: "kynat", secondName: "okoneshnikov" }
  ];
  @observable fireBaseConfig = {
    apiKey: "AIzaSyDwqV2DunSWgJIhBA-prQ0H1A_ClFtWUps",
    authDomain: "idea-bag.firebaseapp.com",
    databaseURL: "https://idea-bag.firebaseio.com",
    projectId: "idea-bag",
    storageBucket: "idea-bag.appspot.com",
    messagingSenderId: "183868654064"
  }

  @action addItem = (name) => {
    this.array.unshift({
      name: name,
      id: Date.now()
    })
  }
}
