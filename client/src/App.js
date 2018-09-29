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
      symbol: undefined,
      symbols: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateSymbol = this.updateSymbol.bind(this);
  }

  componentDidMount = () => {
    const hostname = window.location.hostname;
    console.info(`app launched on ${hostname}`);

    axios.get(`http://${hostname}:5000/symbols`)
      .then(symbols => {

        console.log(symbols);
        this.setState({
          symbols: symbols.data
        })

        console.info(`${this.state.symbols.length} symbols returned`);
      })
  }

  updateSymbol = (symbol) => {

    if(!symbol){
      this.props.alert.show('Alert test');
    }
    this.setState({
      symbol
    })
    console.info('set state:', this.state.symbol);
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
              companyName={this.state.symbol.data.companyName}
              website={this.state.symbol.data.website}
              industry={this.state.symbol.data.industry}
              sector={this.state.symbol.data.sector}
              tags={this.state.symbol.data.tags}/>
          }
        </div>
        <SymbolList
          symbolsFromMain={this.state.symbols}/>
      </AlertProvider>
    );
  }
}

export default App;
