import react from 'react';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class SubjectScreen extends React.Component{

    render(){
        return(

             <ScrollView style = {styles.container}>
                 <LinearGradient locations = {[0.1, 0.3, 1]} colors ={["white", "skyblue", 'navy']} style = {styles.linearGradient}>
                  

                <Text style={styles.headingText}>Subjects</Text>
                <View style ={styles.lowerContainer}>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('MathsTopics')}}
                    >

                        <Text style ={styles.subjectText}>Maths</Text>


                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('PhysicsTopics')}}
                    >

                        <Text style ={styles.subjectText}>Physics</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('ChemistryTopics')}}
                    >

                        <Text style ={styles.subjectText}>Chemistry</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('BiologyTopics')}}
                    >

                        <Text style ={styles.subjectText}>Biology</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('HistoryTopics')}}
                    >

                        <Text style ={styles.subjectText}>History</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('CivicsTopics')}}
                    >

                        <Text style ={styles.subjectText}>Civics</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('GeographyTopics')}}
                    >

                        <Text style ={styles.subjectText}>Geography</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('EconomicsTopics')}}
                    >

                        <Text style ={styles.subjectText}>Economics</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('HindiTopics')}}
                    >

                        <Text style ={styles.subjectText}>हिंदी</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.subjectContainer}
                    onPress = {()=>{this.props.navigation.navigate('EnglishTopics')}}
                    >

                        <Text style ={styles.subjectText}>English</Text>

                    </TouchableOpacity>

                </View>
                </LinearGradient>
             </ScrollView>

        )
    }
}

const styles = StyleSheet.create({

    container:{

        flex: 1,
        backgroundColor: "white"

    },

    headingText:{

        color: "#15193c",
        fontSize: 30,
        textAlign: "center",
        justifyContent: "center",
        fontWeight: "bold",
        marginTop: 20

    },

    subjectContainer:{

        justifyContent: 'center',
        marginTop: 40,
        borderRadius: 10,
        backgroundColor: "#15193c",
        width: "50%",
        height: 50

    },

    lowerContainer:{

        flex: 0.5,
        alignItems: "center"

    },

    subjectText:{

        color: "white",
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },

    linearGradient:{

        flex: 1

    }

})