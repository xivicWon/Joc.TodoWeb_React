import './App.css';
import * as React from 'react';
// import Button from '@mui/material/Button';
import Todo from "./Todo";
import { List, Paper, Container } from '@mui/material';
import AddTodo from "./AddTodo"

// jsx => JavaScript eXtention ES6+ (ECMAScript 2015+)
class App extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            items :  [
                { idx : 1 , done : false , title : 'sample' },
                { idx : 2 , done : true , title : 'sample2' },
                { idx : 3 , done : true , title : 'sample3' },
            ] 
        }
    }

    addTodoItem = (item) =>{
        const thisItems = this.state.items;
        const newitem =  {
            idx : thisItems.length + 1,
            title : item.title,
            done : false
        }
        thisItems.push(newitem)
        this.setState({items : thisItems})
    }

    editTodoItem = (item) => { 
        const thisItems = this.state.items;
        thisItems.filter((v)=> item.idx === v.idx )
            .forEach(v => { 
                v.title = item.title
                v.done = item.done
            })

        this.setState({items : thisItems});
    }

    removeTodoItem = (item) =>{
        const thisItems = this.state.items;
        console.log("old",thisItems)
        const newItems = thisItems.filter((v)=> item.idx !== v.idx )
        console.log("new",newItems)
        this.setState({items : newItems}, ()=>{
        });
    }

    componentDidMount() {
        console.log("App","componentDidMount")   
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