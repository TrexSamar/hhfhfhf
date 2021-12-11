import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SubjectScreen from '../screens/SubjectScreen';
import MathsTopicScreen from '../screens/MathsTopicScreen';
import PhysicsTopicScreen from '../screens/PhysicsTopicScreen';
import ChemistryTopicScreen from '../screens/ChemistryTopicScreen';
import BiologyTopicScreen from '../screens/BiologyTopicScreen';
import HistoryTopicScreen from '../screens/HistoryTopicScreen';
import CivicsTopicScreen from '../screens/CivicsTopicScreen';
import GeographyTopicScreen from '../screens/GeographyTopicScreen';
import EconomicsTopicScreen from '../screens/EconomicsTopicScreen';
import HindiTopicScreen from '../screens/HindiTopicScreen';
import EnglishTopicScreen from '../screens/EnglishTopicScreen';
import Motion from '../screens/Motion';
import LawsOfMotion from "../screens/LawsOfMotion";
import Gravitation from "../screens/Gravitation";
import WorkAndEnergy from "../screens/WorkAndEnergy";
import AtomsAndMolecules from "../screens/AtomsAndMolecules";
import IsMatterAroundUsPure from "../screens/IsMatterAroundUsPure";
import Matter from "../screens/Matter";
import Atom from "../screens/Atom";
import Tissues from "../screens/Tissues";
import Cell from "../screens/Cell";
import Diseases from "../screens/Diseases";
import History1 from "../screens/History1";
import Geo1 from "../screens/Geo1";
import History3 from "../screens/History3";


const Stack = createStackNavigator();

export default class StackNavigator extends React.Component{
    render(){
  return (
    <Stack.Navigator
      initialRouteName="Subjects"
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Subjects" component={SubjectScreen} />
        <Stack.Screen name="MathsTopics" component={MathsTopicScreen} />
        <Stack.Screen name="PhysicsTopics" component={PhysicsTopicScreen} />
        <Stack.Screen name="ChemistryTopics" component={ChemistryTopicScreen} />
        <Stack.Screen name="BiologyTopics" component={BiologyTopicScreen} />
        <Stack.Screen name="CivicsTopics" component={CivicsTopicScreen} />
        <Stack.Screen name="GeographyTopics" component={GeographyTopicScreen} />
        <Stack.Screen name="HistoryTopics" component={HistoryTopicScreen} />
        <Stack.Screen name="EconomicsTopics" component={EconomicsTopicScreen} />
        <Stack.Screen name="HindiTopics" component={HindiTopicScreen} />
        <Stack.Screen name="EnglishTopics" component={EnglishTopicScreen} />
        <Stack.Screen name="Motion" component={Motion} />
        <Stack.Screen name="LawsOfMotion" component={LawsOfMotion} />
        <Stack.Screen name="Gravitation" component={Gravitation} />
        <Stack.Screen name="WorkAndEnergy" component={WorkAndEnergy} />
        <Stack.Screen name="AtomsAndMolecules" component={AtomsAndMolecules} />
        <Stack.Screen name="IsMatterAroundUsPure" component={IsMatterAroundUsPure} />
        <Stack.Screen name="Matter" component={Matter} />
        <Stack.Screen name="Atom" component={Atom} />
        <Stack.Screen name="Cell" component={Cell} />
        <Stack.Screen name="Tissues" component={Tissues} />
        <Stack.Screen name="Diseases" component={Diseases} />
        <Stack.Screen name="History1" component={History1} />
        <Stack.Screen name="Geo1" component={Geo1} />
        <Stack.Screen name="History3" component={History3} />

    </Stack.Navigator>
  )
    }
}