import React from 'react'
import { ListItem, ListItemText, InputBase, Checkbox, ListItemButton, ListItemSecondaryAction, IconButton } from "@mui/material"
import { DeleteOutlined } from '@mui/icons-material';


class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            readOnly : true
        }
        this.editTodoItem = this.props.editTodoItem;
        this.removeTodoItem = this.props.removeTodoItem;
    }

    onChangeInput = e => {
        const thisItem = this.props.item;
        thisItem.title = e.target.value;
        this.editTodoItem(thisItem);
        // this.setState({item:thisItem})
    }

    onClickInput = () => {
        this.setState({readOnly:false})
    }

    onPressEnter = e =>{
        const key = e.key  || e.keyCode;
        const {item} = this.props
        if( key === "Enter" || key === 13){
            this.editTodoItem(item);
            this.setState({readOnly:true})
        }
    }

    onClickCheckBox = e => {
        // 구조 분해 할당
        const {item} = this.props;
        item.done = !item.done
        this.editTodoItem(item);
    } 

    onDeleteTodo = e =>{
        const {item} = this.props;
        this.removeTodoItem(item);
    }

    componentDidMount() {
        console.log("Todo","componentDidMount")   
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("Todo","componentDidUpdate")   
    }

    shouldComponentUpdate(nextProps, nextState, nextContext ){
        console.log("Todo","shouldComponentUpdate")
        return true;
    }
    render(){
        const {item} = this.props;
        const {readOnly} = this.state;
        const checkboxId = "todo-" + item.idx
        return (
            <ListItem>
                <ListItemButton>
                    <Checkbox checked={item.done}
                        onClick={this.onClickCheckBox} 
                        />
                    <ListItemText>
                        <InputBase 
                            inputProps={{"arial-label":"naked"}}
                            type="text"
                            id={checkboxId}
                            name={checkboxId}
                            value={item.title}
                            multiline={false}
                            fullWidth={true}
                            readOnly={readOnly}
                            onKeyUp={this.onPressEnter}
                            onChange={this.onChangeInput}
                            onClick={this.onClickInput}
                        />
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete Todo" onClick={this.onDeleteTodo}>
                            <DeleteOutlined ></DeleteOutlined>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItemButton>
            </ListItem>
        )
    }
}

export default Todo;
