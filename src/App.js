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
                { id : 1 , done : false , title : 'sample' },
                { id : 2 , done : true , title : 'sample2' },
                { id : 3 , done : true , title : 'sample2' },
            ] 
        }
    }

    addTodoItem = (item) =>{
        if( item.title.trim() === ''){
            alert('Todo 제목을 입력해 주세요')
        } else {
            const thisItems = this.state.items;
            const newitem =  {
                id : thisItems.length + 1,
                title : item.title,
                done : false
            }
            thisItems.push(newitem)
            this.setState({items : thisItems})
        }
    }

    editTodoItem = (item) => { 
        console.log(item)
        const thisItems = this.state.items;
        thisItems.filter((v)=> item.id === v.id )
            .forEach(v => { 
                v.title = item.title
                v.done = item.done
            })

        this.setState({items : thisItems});
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
        return (
            <div className='App'>
                <Container maxWidth="md">
                    <AddTodo addTodoItem={this.addTodoItem}></AddTodo>
                    <div className='TodoList'>
                        <Paper style={{margin:16}}>
                            <List>
                                {items.map( (item , i ) => 
                                    <Todo item={item} editTodoItem={this.editTodoItem} key={i}></Todo>
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