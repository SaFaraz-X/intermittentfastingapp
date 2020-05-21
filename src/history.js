import React, { Component } from 'react';
import './App.css';
import {Bar, Charts, defaults} from 'react-chartjs-2';


class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Not sure if this is the correct way to set up
            // the state for 'time' and 'date' since we are
            // obtaining these values from a Firebase dataset
            chartData:{
                date: "",
                time: ""
            }
        }
    }

    // Source: https://www.youtube.com/watch?v=p4XTMvagQ2Q
    // This method shows the inital dataset (ex: a user will have a dataset with no values)
    // componentDidMount() {
    //     const rootRef = firebase.database().ref().child('react'); // Whatever is inside '.child()' argument is the root of the database
    //     const timeRef = rootRef.child('time');
        
    //     // Note: the '.on' method allows us to synchronize data in real-time
    //     timeRef.on('value', snap => {
    //         this.setState({
    //             time: snap.val()
    //         });
    //     });

    //     const dateRef = rootRef.child('date');
    //     dateRef.on('value', snap => {
    //         this.setState({
    //             date: snap.val()
    //         });
    //     });
    // }

    // // React life cycle hooks with firebase updates
    // // This method shows the dataset after it's updated (ex: a user will have values in their dataset after using the timer)
    // componentDidUpdate(prevProp, prevState) {
    //     const rootRef = firebase.database().ref().child('react'); // Whatever is inside '.child()' argument is the root of the database
    //     const timeRef = rootRef.child('time');
        
    //     // Note: the '.on' method allows us to synchronize data in real-time
    //     if(prevState.time != this.state.time){
    //         timeRef.on('value', snap => {
    //             this.setState({
    //                 time: snap.val()
    //             });
    //         });
    //     }

    //     if(prevState.date != this.state.date){
    //         const dateRef = rootRef.child('date');
    //         dateRef.on('value', snap => {
    //             this.setState({
    //                 date: snap.val()
    //             });
    //         });
    //     }

    // }

    render(){
        return (
            <div classname='Chart'>
            <Bar 
                data={this.state.chartData}
                width={50}
                height={250}
                options={{
                    maintainAspectRatio: false,
                    scales:{
                        xAxes:[{
                            stacked: true,
                            type: 'time',
                            time:{
                                unit: 'week',
                                displayFormats:{
                                    week: 'll'
                                }
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            type: 'time',
                            time:{
                                displayFormats: {
                                    minute: 'h:mm a'
                                }
                            }
                        }]
                    },
                }}
                />
            </div>
        )
    }
}



export default History;
