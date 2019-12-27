import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import Sub from './app/components/Sub';
import to from './app/components/to';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      inputValue:'',
      todos: []
  }

  componentWillMount() {
    this.getData()
  }

  storeData=()=>{
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.stats));
  }
  getData=()=>{
    AsyncStorage.getItem('@todo:stat').then((state) => {
      if(state !==null){
        this.setState(JSON.parse(state));
      }
    })
  }


  _makeTodoitem=({item, index}) => {}
    return (
      <list name = {item.title}
      iscomplete = {item.iscomplete}
      chanfeComplete = {()=> {
        const newTodo = [...this.state.todos]
        newTodo[index],iscomplete =!newTodo[index].iscomplete
        this.setState({todos:newTodo}, this.storeData)
      }}
      deleteitem = {()=> {
        const newTodo = [...this.state.todos]
        newTodo.splice(index, 1)
        this.setState({todos:newTodo}, this.storeData)
      }}/>
    )
    }

  _changeText=({Value}) => {
    this.setState({inputValue: Value});
  }

  _addTodoItem=({}) => {
    if(this.state,inputValue!== ""){
      const prevTodo =this.state.tidos

      const newTodo ={title: this.state.inputValue, iscomplete: false}

      this.setState({
        inputValue:'',
        todos : prevTodo.concat(newTodo)
      }, this.storeData)
    }
  }

  
  render() {
  return (
    <View style={styles.container}>
      <View style={styles.Headercontainer}>
        <Header/>
      </View>

      <View style={styles.Subpo}>
        <Sub title="해야 할 일"/>
        <Input
        Value = {this.state.inputValue}
        changeText = {this._changeText}
        addTodoItem = {this._addTodoItem}/>
      </View>

      <View style={styles.Subpo}>
        <Sub title="해야 할 일 목록"/>

        <FlatList
        data ={this.state.to}
        renderItem={this._makeTodo}
        keyExtractor={(item, index) => {return '$(index)'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  Headercenter: {
  alignItems: 'center',
  borderwith: 2,
  },
  Subpo: {
  margin: 50,
  },

});
