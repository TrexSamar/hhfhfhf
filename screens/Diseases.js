import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
    {
      url:
        'https://raw.githubusercontent.com/TrexSamar/assets/main/assets/Why%20do%20we%20fall%20ill.png',
    },
     
  ];

export default class Diseases extends React.Component{

    
        
      render(){
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <ImageViewer imageUrls={images} renderIndicator={() => null} />
            </View>
          </SafeAreaView>
        );
      };
    }
      
      const styles = StyleSheet.create({
        container: {
          backgroundColor: '#F5FCFF',
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'contain'
        },
      });
    
      
       
    
      