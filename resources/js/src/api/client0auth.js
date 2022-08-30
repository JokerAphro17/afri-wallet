import axios from 'axios';

const HTTP_CLIENT_2 = axios.create({
    baseURL: 'https://api.twitter.com/2/',
    timeout: 10000,
  });
  
  HTTP_CLIENT_2.interceptors.request.use(
    config => {
                config.headers.authorization = `OAuth oauth_consumer_key="uaqat3S26P5PyEgPGbWpgO8tb", oauth_nonce="vuAZGBnm1vqn87N0D3MN5Z3ZjMIKyRaj", oauth_signature="GjdEmb5XxVhg5W0exzmLCGFhlWY%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1660957572", oauth_token="1515698480001470466-1yVzwBwF51FRt2F4u1KCABZOTUBQig", oauth_version="1.0"`
                config.headers.whithcredentials = true;
                config.headers['Access-Control-Allow-Origin'] = '*';
                
              console.log(config);
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  export default HTTP_CLIENT_2;