/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import ShowImageScreen from './ShowImageText';

const ResultList = ({title, results}) => {
  // console.log(navigation);
  if(!results.length) return null;

  try{
    const navigation=useNavigation();
    // console.log(results);
    return (
    <View style={styles.backGround}>
      <Text style={styles.textStyle}>{title}</Text>
     <FlatList
     horizontal
     data={results}
     keyExtractor={(results)=>results.id}
     showsHorizontalScrollIndicator={false}
     renderItem={({item})=>{return( 
      <TouchableOpacity 
      onPress={()=> navigation.navigate('Results',{id:item.id})}

      >
       <ShowImageScreen result={item}/>
        </TouchableOpacity>


    )}}
     />
     
    </View>
  );
  }
  catch(err){
    return <Text>LoadingScreen</Text>
  }
};


// image_ur

const styles = StyleSheet.create({
  backGround: {
   marginBottom:15,
    borderColor:'black'
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:15,
    marginBottom:15

  },
});

export default ResultList;
