import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
export default class MeteorScreen extends Component {
    constructor(){
        super()
        this.state={
            meteors:{}
        }
    }
    getMeteors=()=>{
        axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=pcvRpSZ0Baxo1dcGKLpsadJcQQmAztiyacqJl4Te")
        .then(Response=>{
            this.setState({
                meteors:Response.data.near_earth_objects
            })
        })
    .catch(error=>{
        alert(error.message)
    })
    }
    componentDidMount(){
        this.getMeteors()
    }
    render() {
        if(Object.keys(this.state.meteors).length===0){
            return(
                <View style={styles.container}>
                    <Text>
                        loading...
                    </Text>
                </View>
            )
        }
        else{
            let meteorArr=Object.keys(this.state.meteors).map(meteor_date=>{
                return this.state.meteors[meteor_date]
            })
            let meteors=[].concat.apply([],meteorArr)
            meteors.forEach(function(element){
                let diameter=(element.estimated_diameter.kilometers.estimated_diameter_min+element.estimated_diameter.kilometers.estimated_diameter_max)/2
                let threatscore=(diameter/element.close_approach_data[0].miss_distance.kilometers)*1000000000
                element.threatscore=threatscore
            });
            return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Meteor Screen!</Text>
            </View>
        )
    }
}
 }