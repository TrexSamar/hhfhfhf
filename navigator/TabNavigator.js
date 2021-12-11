import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import StackNavigator from './StackNavigator';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render() {
        return (
          <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                }
                return (
                  <Ionicons
                    name={iconName}
                    size={RFValue(25)}
                    color={color}
                    style={styles.icons}
                  />
                );
              }
            })}
            activeColor={"#ee8249"}
            inactiveColor={"gray"}
          >
            <Tab.Screen
              name="Home"
              component={StackNavigator}
              options={{ unmountOnBlur: true }}
              
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              
            />

                      
          </Tab.Navigator>
        );
      }
    }
    
    const styles = StyleSheet.create({
        bottomTabStyle: {
            backgroundColor: "#15193c",
            height: "10%",
            borderTopLeftRadius: RFValue(30),
            borderTopRightRadius: RFValue(30),
            overflow: "hidden",
            position: "absolute"
          },
          icons: {
            width: RFValue(30),
            height: RFValue(30)
          }
    })