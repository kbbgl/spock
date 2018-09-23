import React, { Component } from 'react';
import {withAlert} from 'react-alert';
import axios from 'axios';
import '../App.css'
class SearchBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      // detects search text change
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      // handles submission of stock search
      handleSubmit(event) {
        console.info('A name was submitted: ' + this.state.value);
        if(this.state.value !== ''){
            axios.get(`http://${window.location.hostname}:5000/search`, {
            params: {
                q: this.state.value
            }
            }).then((res) => {
                this.props.parentCallback(res);
            }).catch((error) => {
                console.log(error);
            })
            this.setState({
                value: this.state.value.toUpperCase()
            })
        }
        else{
            this.props.alert.show('Please enter a symbol (i.e. AAPL)');
        }
        event.preventDefault();
      }

    render(){
        return (
            <div
                className="searchbar-container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        size={24}
                        autoComplete="on"
                        autoFocus={true}
                        maxLength={5}
                        placeholder="Search for a stock symbol" 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.handleChange} />    
                </form>
            </div>
        )
    }
}


export default withAlert(SearchBar);