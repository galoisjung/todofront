import React from "react";
import './App.css';
import Todo from "./Todo";
import {Container, List, ListItemText, Paper} from "@material-ui/core";
import AddTodo from "./AddTodo";

class App extends React.Component {
    // componentDidMount() {
    //     const requestOptions = {
    //         method: "GET",
    //         headers: {"Content-Type": "application/json"}
    //     };
    //
    //     fetch("http://localhost:8080/todo", requestOptions)
    //         .then((response) = response.json())
    //         .then(
    //             (response) =>
    //                 this.setState({
    //                     items: response.data,
    //                 });
    // }


add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items: thisItems});
    console.log("items: ", this.state.items);
}

delete = (item) => {
    const thisItems = this.state.items;
    console.log("Before Update Items : ", this.state.items)
    const newItems = thisItems.filter(e => e.id !== item.id);
    this.setState({items: newItems}, () => {
        console.log("Update Items : ", this.state.items)
    });
}

render()
{
    let todoItems = this.state.items.length > 0 && (
        <Paper style={{margin: 16}}>
            <List>
                {this.state.items.map((item, idx) => (
                    <Todo item={item} key={item.id} delete={this.delete}/>))}
            </List>
        </Paper>
    );
    return (
        <div className="App">
            <Container maxWidth="md">
                <AddTodo add={this.add}/>
                <div className="TodoList">{todoItems}</div>
            </Container>
        </div>
    );
}
}

export default App;
