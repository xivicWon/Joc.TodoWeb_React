import React from 'react'
import { ListItem, ListItemText, InputBase, Checkbox } from "@mui/material"

class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            item : props.item , 
            editTodoItem : props.editTodoItem
        };
        
        this.state.readOnly = true
    }

    onChangeInput = e => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem})
    }

    onClickInput = () => {
        this.setState({readOnly:false})
    }

    onPressEnter = e =>{
        const key = e.key  || e.keyCode;
        const {editTodoItem, item} = this.state
        if( key === "Enter" || key === 13){
            editTodoItem(item);
            this.setState({readOnly:true})
        }
    }

    onClickCheckBox = e => {
        // 구조 분해 할당
        // const {edit: editTodoItem , item } = this.state;
        const {editTodoItem, item} = this.state;
        // item.done = e.target.checked
        item.done = !item.done
        this.setState({item:item})
        editTodoItem(item);
    } 

    render(){
        const {item} = this.state
        const {readOnly} = this.state
        const checkboxId = "todo-" + item.id
        return (
            <ListItem>
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
            </ListItem>
        )
    }
}

export default Todo;