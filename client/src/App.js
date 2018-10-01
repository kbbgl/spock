import React, { Component } from 'react';
import SearchBar from './comp/SearchBar';
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'
import SymbolInfoContainer from './comp/SymbolInfoContainer';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import SymbolList from './comp/SymbolList';

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      symbol: undefined
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateSymbol = this.updateSymbol.bind(this);
    this.getChart = this.getChart.bind(this);
  }

  componentDidMount = () => {
    const hostname = window.location.hostname;
    console.info(`app launched on ${hostname}`);
  }

  updateSymbol = (symbol) => {

    if(!symbol){
      this.props.alert.show('Alert test');
    }
    this.setState({
      symbol: symbol.data
    })
    console.info('set state:', this.state.symbol);
    this.getChart()
  }

  getChart = () => {
    
    axios.get(`http://${window.location.hostname}:5000/chart`, {
      params: {
        q: this.state.symbol.symbol
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    })
    
  }

  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Spock</h1>
            <h2 className="App-subtitle">Everything you need to know about your stocks</h2>
          </header>
          <SearchBar parentCallback={this.updateSymbol}/>
          {
            this.state.symbol && 
            <SymbolInfoContainer 
              symb={this.state.symbol}
              companyName={this.state.symbol.companyName}
              website={this.state.symbol.website}
              industry={this.state.symbol.industry}
              sector={this.state.symbol.sector}
              tags={this.state.symbol.tags}/>
          }
        </div>
      </AlertProvider>
    );
  }
}

export default App;
