import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, StyleSheet, Platform, StatusBar,SafeAreaView} from 'react-native';
export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView 
                   style={styles.droidsafearea}
                   />
                   <ImageBackground source={require("../assets/bg_image.png")}
                   style={styles.backgroundImage}
                   >
                   <View style={styles.TitleBar}>
                <Text style={styles.titletext}>ISS Tracker App</Text>
                </View>
                <TouchableOpacity 
                style={styles.routeCard}
                onPress={()=>this.props.navigation.navigate("ISSLocation")}
                >
                    <Text style={styles.routeText}> ISSLocation</Text>
                    <Text style={styles.routeMore}> {"Know More--->"}</Text>
                    <Text style={styles.bgdigit}> 1</Text>
                    <Image
                    source={require("../assets/iss_icon.png")}style={styles.iconImage}/>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.routeCard}
                onPress={()=>this.props.navigation.navigate("Meteors")}
                >
                    <Text
                     style={styles.routeText}
                    >
                        Meteors
                    </Text>
                        <Text style={styles.routeMore}> {"Know More--->"}</Text>
                    <Text style={styles.bgdigit}>2</Text>
                    <Image
                    source={require("../assets/meteor_icon.png")}style={styles.iconImage}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
        },
        droidsafearea:{
            marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
        },
        titletext:{
            fontWeight:"bold",
fontSize:40,
color:"white"
        },
        TitleBar:{
            flex:0.15,
            justifyContent:"center",
            alignItems:"center"
        },
        routeCard:{
            flex:0.25,
            marginTop:50,
            marginLeft:50,
            marginRight:50,
            borderRadius:30,
            backgroundColor:"white",
            justifyContent:"center",
            alignItems:"center",


        },
        routeText:{
            fontSize:35,
            fontWeight:"bold",
            color:"black",
            marginTop:75,
            paddingLeft:30
        },
        backgroundImage:{
            flex:1,
            resizeMode:"cover"
        },
        routeMore:{
            paddingLeft:30,
            color:"red",
            fontSize:15
        },
        bgdigit:{
            position:"absolute",
            color:"grey",
            fontSize:150,
            right:20,
            bottom:-15,
            zIndex:-1
        },
        iconImage:{
            position:"absolute",
            height:200,
            width:200,
            resizeMode:"contain",
            right:20, 
            top:-18
        }
    }
)       