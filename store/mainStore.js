import { observable, action } from 'mobx';
import { Alert } from 'react-native';

export default class Store {
  @observable query = '';
  
  @observable array = [
    { name: "nbn", secondName: "everstov" },
    { name: "kynat", secondName: "okoneshnikov" }
  ];

  @action navigateFunc = (name) => {
    alert(name)
  }
}
