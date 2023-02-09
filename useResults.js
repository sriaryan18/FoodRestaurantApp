/* eslint-disable prettier/prettier */
/* eslint-disable no-catch-shadow */
import React from 'react';
import {useState, useEffect} from 'react';
import { err } from 'react-native-svg/lib/typescript/xml';
import yelp from './yelp';

const useResults= () => {
  
  const [result, setResult] = useState('pasta');
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    // console.log('searching');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      //
      setResult(response.data.businesses);
      setErrorMessage('');
      // console.log("1");
    } catch (err) {
      console.log(err);
      setErrorMessage('Something Went Wrong');
      setResult([]);
    }
  };
  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);
  return [searchApi, result, errorMessage];
};
export default useResults;