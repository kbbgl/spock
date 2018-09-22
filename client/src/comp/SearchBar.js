import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
class SearchBar extends Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value)
      }
    
      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);

        axios.get(`http://${window.location.hostname}:5000/search`, {
            params: {
                q: this.state.value
            }
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })

        event.preventDefault();
      }

    render(){
        return (
            <div style={{marginTop: '10px'}}>
                <form onSubmit={this.handleSubmit}>
                    <label >
                    Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default SearchBar;