import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ShowImageScreen = ({result}) => {
  //   console.log(result);
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: result.image_url}} />
      <Text style={style.textStyle}>{result.name}</Text>
      <Text>
        {result.rating} stars                                             {result.review_count} Reviews
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    margin: 2,
    fontSize: 14.7,
    fontWeight: '600',
  },
  container: {
    marginLeft: 15,
  },
  image: {height: 150, width: 300, borderRadius: 10},
});

export default ShowImageScreen;
