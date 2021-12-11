import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_image: "",
      name: ""
    };
  }

  async fetchUser() {
    let name, image;
    await firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function (snapshot) {
        
        name = `${snapshot.val().first_name} ${snapshot.val().last_name}`;
        image = snapshot.val().profile_picture;
      });
    this.setState({
     
      name: name,
      profile_image: image
    });
  }

  render(){
    return(
  <View
          style={
           styles.container
          }
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/mindMapLogo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                   styles.appTitleText
                }
              >
                Mind Map App
              </Text>
            </View>
          </View>
          <View style={styles.screenContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: this.state.profile_image }}
                style={styles.profileImage}
              ></Image>
              <Text
                style={
                  styles.nameText
                }
              >
                {this.state.name}
              </Text>
            </View>
            <View>
            <TouchableOpacity style = {styles.logoutContainer}
               onPress={()=>{firebase.auth().signOut()}}
              >
              <Text style= {styles.logoutText}>Logout</Text>
              </TouchableOpacity>
              </View>
            
            <View style={{ flex: 0.3 }} />
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  
  },
  
  screenContainer: {
    flex: 0.85
  },
  profileImageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70)
  },

  nameText: {
    color: "white",
    fontSize: RFValue(40),
    
    marginTop: RFValue(10)
  },

  logoutContainer:{
    
    justifyContent: "center",
    alignItems: "center",
    marginTop:40,
    borderRadius: 10,
    borderWidth: 4,
    backgroundColor: "skyblue",
    width: "50%",
    height: 50,
    resizeMode: "contain",
    marginLeft: "26%"
    
},
logoutText:{
    color: "white",
    fontSize: 24,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
},
  
  
});