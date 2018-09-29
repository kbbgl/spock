import  React, { Component } from "react";
import '../App.css'

class StockInfoContainer extends Component {

    constructor(props){
        super(props);
        this.state = {}

        this.hashtagContainer = this.hashtagContainer.bind(this);
    }

    componentDidMount = () => {

    }

    hashtagContainer = () => {

        let hashtags = this.props.tags;

        hashtags = hashtags.map(hashtag => `#${hashtag.replace(' ', '_')}`);

        return(
            <div className="hashtags-container">
                <p>{hashtags.join(', ')}</p>
            </div>
        )

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
                        this.hashtagContainer()
                    }
                </div>
            )
    }

}

export default StockInfoContainer;