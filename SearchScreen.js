/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import SearchBar from './Searchbar';
import useResults from './useResults';
import ResultList from './ResultsList';
import ErrorScreen from './ErrorScreen';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
  const [term, setTerm] = useState('');

  const [searchApi,result,errorMessage] = useResults();
 
  const filterResultByPrice = (price) => {
    // console.log(result);
    try{
      // {for (var i=0;i<1000000;i++){}}
      var x=result.filter((re)=>re.price===price);
      // console.log(x);
      return x;

    }
    catch{
      // console.log('Not fetched');
      return [];
    }
  };
  // console.log(props);
  // filterResultByPrice('$');
  return (
    
    <>
      <SearchBar 
       term={term}
        onTermChange={newTerm => {setTerm(newTerm);}}
        onTermSubmit={()=>{searchApi(term);}}
        />
        <ScrollView>
     {errorMessage?<Text>{errorMessage}</Text>:null}
      {result.length?null:<Text>No result found</Text>}
      {result.length?<View>
        
        <ResultList results= {filterResultByPrice('$')} title="Cost Effective" />
        <ResultList results= {filterResultByPrice('$$')} title="Bit Pricey" />
        <ResultList results= {filterResultByPrice('$$$')} title="Big Spender"/>
        
      </View>: <Text>NO RESULTS FOUND</Text>}
      </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
