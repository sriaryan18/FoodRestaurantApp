/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import { Search } from 'react-native-feather';

  

const Searchbar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
      {/* <View style={styles.iconStyle}> */}
     <Search color="black" width={39} height={50} strokeWidth={1} />
     {/* </View> */}
     <TextInput placeholder="Search" 
     autoCapitalize='none'
     autoCorrect={false}
     style={styles.inputStyle}
     value={term}
     onChangeText={onTermChange}
     onEndEditing={onTermSubmit}
      />
    
    </View>
  );
};
const styles=StyleSheet.create({
  background:{
    marginTop:10,
    marginBottom:10,
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    marginVertical:5,  
    flexDirection:'row',
  },
  inputStyle:{
    
    flex:1,
    fontSize:16
  
  },
  iconStyle:{
    fontSize:45,
    // alignSelf:'flex-start'
  }

});
export default Searchbar;
