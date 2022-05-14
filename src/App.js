import './App.css';
import * as React from 'react';
// import Button from '@mui/material/Button';
import Todo from "./Todo";
import { List, Paper, Container } from '@mui/material';
import AddTodo from "./AddTodo"
import { call } from "./service/ApiService";
// jsx => JavaScript eXtention ES6+ (ECMAScript 2015+)
class App extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            items :  [] 
        }
    }

    addTodoItem = (item) =>{
        call("/service/todo", "POST" , item)
        .then(
            res => { 
                console.log("POST /service/todo", res)
                this.setState({items : res})
            },
            error =>  {
                // this.setState({error : error })
            }
        )
    }

    editTodoItem = (item) => { 
        call("/service/todo", "PUT" , item)
        .then(
            res => { 
                console.log("PUT /service/todo", res)
                this.setState({items : res})
            },
            error =>  {
                // this.setState({error : error })
            }
        )
    }

    removeTodoItem = (item) =>{
        call("/service/todo", "DELETE" , item)
        .then(
            res => { 
                console.log("DELETE /service/todo", res)
                this.setState({items : res})
            },
            error =>  {
                // this.setState({error : error })
            }
        )
    }

    componentDidMount() {
        console.log("App","componentDidMount")   
        call("/service/todo", "GET" , null)
        .then(
            res => { 
                console.log("GET /service/todo", res)
                this.setState({items : res})
            },
            error =>  {
                // this.setState({error : error })
            }
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("App","componentDidUpdate")   
    }
    shouldComponentUpdate(nextProps, nextState, nextContext ){
        console.log("App","shouldComponentUpdate")   
        return true;
    }
    componentWillUnmount(){
        console.log("App","componentWillUnmount")   
    }
    render() {
        // JSX -> 표준 JS (Babel -> Transfiling )
        // Webpack -> 모듈 Bundling

        // const todos = () => {
        //     const result = []
        //     for( let i = 0 ; i < sampleData.length; i++){
        //         result.push(<Todo item={sampleData[i]} key={i}></Todo>)
        //     }
        //     return result;
        // } ;


        // const items = this.state.items
        //     // .filter((item)=>item.done)
        //     .map((item , i)=><Todo item={item} key={i}></Todo>) 
        
        const {items} = this.state;
        console.log("App Render", items)
        return (
            <div className='App'>
                <Container maxWidth="md">
                    <AddTodo addTodoItem={this.addTodoItem}></AddTodo>
                    <div className='TodoList'>
                        <Paper style={{margin:16}} elevation={20}>
                            <List>
                                {items.map( (item , i ) => 
                                    <Todo item={item} 
                                        editTodoItem={this.editTodoItem} 
                                        removeTodoItem={this.removeTodoItem}
                                        key={i}></Todo>
                                )}
                            </List>
                        </Paper>
                    </div>
                </Container>
            </div>
        )
    }
}

export default App;