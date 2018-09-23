import  React, { Component } from "react";
import '../App.css'

class SymbolInfoContainer extends Component {

    constructor(props){
        super(props);
    }
    render(){
        return(
                <div className="card">
                    <label className="company-name">{this.props.companyName === undefined ? 'No result' : this.props.companyName}</label> 
                    {
                        this.props.website &&
                        <img src={`//logo.clearbit.com/${(new URL(this.props.website).hostname).split('.')[1]}.com?size=48`}></img>
                    }   
                    {
                        this.props.industry &&
                        <div>
                            <label className="company-info"><b>Industry: </b>{this.props.industry}</label>    
                        </div>
                    }
                    {
                        this.props.sector && 
                        <div>
                            <label className="company-info"><b>Sector: </b>{this.props.sector}</label>    
                        </div>
                    }
                    {
                        this.props.tags && 
                        <div style={{textAlign: 'center', display:'inline-block'}}>
                            {
                                this.props.tags.map((tag, i) => 
                                        <label
                                            style={{fontFamily: 'inherit'}}
                                            key={i}>
                                            {` #${tag.replace(' ', '_')}`}
                                        </label>
                                )
                            }
                        </div>
                    }
                </div>
            )
    }

}

export default SymbolInfoContainer;