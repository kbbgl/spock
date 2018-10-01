import React, {Component} from 'react'
import Chart from 'react-chartjs-2'

// const style = {
//     margin: '15px'
// }

const chartOptions = {
    maintainAspectRatio : false
}

const style = {
    border: '1px black solid',
    margin: '30px'
}
class GraphOneMonthCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            graphData: []
        }
    }

    chartData = () => {

        console.log(this.props.graph);
        let labels = [];
        let max = [];
        let min = [];
        let vwap = [];

        this.props.graph.forEach(element => {
            labels.push(element.label);
            max.push(element.high); 
            min.push(element.low);
            vwap.push(element.vwap);
        });

        let data= {
            labels: labels,
            datasets: [{
                label: "High",
                borderColor: 'rgb(255, 99, 132)',
                data: max
            },
            {
                label: "Low",
                borderColor: 'rgb(0, 99, 132)',
                data: min
            },
            {
                label: "Volume-weighted average price",
                borderColor: 'rgb(124, 99, 132)',
                data: vwap
            }]
        }
        return data;
    }
    

    render(){
        return(
            <div style={style}>
                <label style={{fontFamily: 'Economica, sans-serif', fontSize: '1.0em'}}>Last month</label>
                <Chart 
                    type='line' 
                    data={this.chartData}
                    //   options={chartOptions}
                      height={200}
                      width={400} 
                    />
            </div>
        )
    }

}

export default GraphOneMonthCard;

//http://www.chartjs.org/docs/latest/charts/line.html