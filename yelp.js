/* eslint-disable prettier/prettier */
import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ZBfkRY0asOxm37LaUvyCoIXPXK_o1WIzYXxVDs3PX-gtlJ67VpnFBPdWDrcm_cs85bLdJv5SP3ZwQ-tln4Hj-138IsNZPr8c_3E_2Qfzl_ieIqQc3gz8NZMxQr3jY3Yx',
  },
});