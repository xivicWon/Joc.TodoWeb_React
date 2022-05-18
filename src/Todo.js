import React from 'react'
import { ListItem, ListItemText, InputBase, Checkbox, ListItemButton, ListItemSecondaryAction, IconButton } from "@mui/material"
import { DeleteOutlined } from '@mui/icons-material';


class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title : this.props.item.title,
            readOnly : true
        }
        this.editTodoItem = this.props.editTodoItem;
        this.removeTodoItem = this.props.removeTodoItem;
    }

    onChangeInput = e => {
        this.setState({title:e.target.value})
    }

    onClickInput = () => {
        this.setState({readOnly:false})
    }

    onPressEnter = e =>{
        const key = e.key  || e.keyCode;
        const {item} = this.props
        item.title = this.state.title
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
    onBlur = e => { 
        console.log("onBlur")
        const {item} = this.props
        item.title = this.state.title
        this.editTodoItem(item);
        this.setState({readOnly:true})
    }
    onDeleteTodo = e =>{
        const {item} = this.props;
        this.removeTodoItem(item);
    }

    componentDidMount() {
        console.log("Todo","componentDidMount")   
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.table("Todo","componentDidUpdate", prevProps, prevState , this.props, this.state, snapShot)   
        // this.setState({title  : this.props.item.title})
        if( prevProps.item.title !== this.props.item.title){
            this.setState({title : this.props.item.title })
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext ){
        console.log("Todo","shouldComponentUpdate")
        return true;
    }
    render(){
        const {item} = this.props;
        const {readOnly ,title} = this.state;
        const checkboxId = "todo-" + item.id
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
                            value={title}
                            multiline={false}
                            fullWidth={true}
                            readOnly={readOnly}
                            onKeyUp={this.onPressEnter}
                            onBlur={this.onBlur}
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
