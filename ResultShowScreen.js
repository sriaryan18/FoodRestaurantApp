/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet,FlatList,Image} from 'react-native';
import yelp from './yelp';

const ResultShowScreen = ({route}) => {
    // navigation.getParam('id');
    const [result,setResult] = useState(null);
    const id = route.params.id;
    // console.log(result);
    const getResult = async (id)=>{
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    };
    useEffect(()=>{getResult(id);},[]);

    if (!result) {return null;}
    // console.log(result.photos);
    const pics=result.photos;
  return (
    <View >
      <View style={style.viewBackground}>
        <Text style={style.textStyle}>{result.name}</Text>
      </View>
     <FlatList
        data={pics}
        keyExtractor={id.id}
        renderItem={({item})=>{
          return <View>
            <Image
              source={{uri:item}}
              style={style.image}
            />
          </View>
        }}
     />
    </View>
  );
};

const style = StyleSheet.create({
  image:{
    height:250,
    width:250,
    margin:10
  },
  textStyle:{
    fontSize:20,
    fontWeight:'bold',
    margin:5,
    fontFamily:'tahoma',
    color:'black',

  },
  viewBackground:{
    backgroundColor:'white',
    margin:5
  }
});

export default ResultShowScreen;
