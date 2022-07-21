require('dotenv').config();
const key = '8e089e01159787ec5aa4';
const secret =
  '11d9fab9b24c7192b2124b8bd87bbef9be8337ff879a0b136e570f69b63e6144';

//   API Key: fd031d996a073da4a008
//  API Secret: 0900ab6b25ef154e72b895e87e0677642c2178227b2364117e39baea92e894ae
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjNGY5MGVjYy1jNDNiLTQ4ODAtYTgzOS0zZDYwNzUyZTNiYWIiLCJlbWFpbCI6InNhbnNrYXJ5ZXJhd2FyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJmZDAzMWQ5OTZhMDczZGE0YTAwOCIsInNjb3BlZEtleVNlY3JldCI6IjA5MDBhYjZiMjVlZjE1NGU3MmI4OTVlODdlMDY3NzY0MmMyMTc4MjI3YjIzNjQxMTdlMzliYWVhOTJlODk0YWUiLCJpYXQiOjE2NTgzOTg2MDF9.WyCgUnm0mbPRJlKA6WEORdIpxz4AmzlF2Eg8HfaFqE4
// API Key: fc6a1cad3bc6fe58e9b3
//  API Secret: d7491f22edd13c85f1c17cc4e688882018b68d2d285a3b1063ed322a2c418144
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjNGY5MGVjYy1jNDNiLTQ4ODAtYTgzOS0zZDYwNzUyZTNiYWIiLCJlbWFpbCI6InNhbnNrYXJ5ZXJhd2FyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJmYzZhMWNhZDNiYzZmZTU4ZTliMyIsInNjb3BlZEtleVNlY3JldCI6ImQ3NDkxZjIyZWRkMTNjODVmMWMxN2NjNGU2ODg4ODIwMThiNjhkMmQyODVhM2IxMDYzZWQzMjJhMmM0MTgxNDQiLCJpYXQiOjE2NTgzOTQ1MTh9.7_FtyRpj_17fzOJp-g5Ippxq-M9JSNJ8ijduwW4kOUQ

// API Key: 8e089e01159787ec5aa4
//  API Secret: 11d9fab9b24c7192b2124b8bd87bbef9be8337ff879a0b136e570f69b63e6144
//  JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjNGY5MGVjYy1jNDNiLTQ4ODAtYTgzOS0zZDYwNzUyZTNiYWIiLCJlbWFpbCI6InNhbnNrYXJ5ZXJhd2FyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI4ZTA4OWUwMTE1OTc4N2VjNWFhNCIsInNjb3BlZEtleVNlY3JldCI6IjExZDlmYWI5YjI0YzcxOTJiMjEyNGI4YmQ4N2JiZWY5YmU4MzM3ZmY4NzlhMGIxMzZlNTcwZjY5YjYzZTYxNDQiLCJpYXQiOjE2NTg0MDA4Mjd9.7XB30PKwHg_j6k0ShjiJPnGBdmAPcBE38C5dMQmy8Zw

const axios = require('axios');

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  //making axios POST request to Pinata ⬇️
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl:
          'https://gateway.pinata.cloud/ipfs/' + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
