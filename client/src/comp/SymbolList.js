import React from 'react';

const style = {
    marginTop:'5px',
    width: '50%',
    border: '1px solid black',
    padding: '10px',
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

class SymbolList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            chart: []
        }
        this.renderItem = this.renderItem.bind(this);
    }



    // renderItem() {
    //     return (
    //         this.props.symbolsFromMain.map((symbol, index) => 
    //         <div
    //             key={index}> {symbol.symbol}
    //         </div>
    //         ));
    //   }

    renderItem = () => {
        
    }

    render(){
        return(
                <div style={style}/>
        )
    }

}

export default SymbolList;