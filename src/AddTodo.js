import React from "react";
import {TextField, Paper, Button, Grid} from "@mui/material"

class AddTodo extends React.Component{

    constructor(props){
        super(props)
        this.state = {item : {title : ""}}
        this.addTodoItem = props.addTodoItem
    }

    onButtonClick = () => { 
        const {title} = this.state.item;
        if( title.trim() === ''){
            alert('Todo 제목을 입력해 주세요')
        } else {
            this.addTodoItem(this.state.item)
        }
        this.setState({item:{title : ""}})
    }

    onInputChange = e => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem})
    }

    onEnterPress = e =>{
        const key = e.key || e.keyCode;
        if( key === "Enter" || key === 13){
            this.onButtonClick();
        }
    }

    render(){
        const {item} = this.state;
        return (
            <Paper style={{margin : 16, padding :16 }} elevation={20}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}} >
                        <TextField 
                            placeholder="Add Todo Here" 
                            value={item.title}
                            onKeyUp={this.onEnterPress}
                            onChange={this.onInputChange}
                            fullWidth
                            hiddenLabel
                            size="small"
                            variant="filled"
                            />
                    </Grid>
                    <Grid xs={1} md={1} item >
                        <Button 
                            onClick={this.onButtonClick}
                            color="secondary"
                            variant="outlined"
                            >+</Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default AddTodo;