import React, {Component} from 'react'
import Chart from 'react-chartjs-2'

// const style = {
//     margin: '15px'
// }

class GraphOneMonth extends Component{

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
        let min = []

        this.props.graph.forEach(element => {
            labels.push(element.label);
            max.push(element.high); 
            min.push(element.low);
        });

        let data= {
            labels: labels,
            datasets: [{
                label: "Daily high",
                borderColor: 'rgb(255, 99, 132)',
                data: max
            },
            {
                label: "Daily low",
                borderColor: 'rgb(0, 99, 132)',
                data: min
            }]
        }
        return data;
    }
    

    render(){
        return(
                <Chart 
                  type='line' 
                  data={this.chartData} />
        )
    }

}

export default GraphOneMonth;

//http://www.chartjs.org/docs/latest/charts/line.html