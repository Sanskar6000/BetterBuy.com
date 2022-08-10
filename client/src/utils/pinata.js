require('dotenv').config();
const key = '1bedb3b4850c2230f9f4';
const secret =
  'b25382635271b12933c89b1502c9bd3bd88dfc135809ccb95eaec58e8130f631';

// API Key: 1bedb3b4850c2230f9f4
// API Secret: b25382635271b12933c89b1502c9bd3bd88dfc135809ccb95eaec58e8130f631
// JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjNGY5MGVjYy1jNDNiLTQ4ODAtYTgzOS0zZDYwNzUyZTNiYWIiLCJlbWFpbCI6InNhbnNrYXJ5ZXJhd2FyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIxYmVkYjNiNDg1MGMyMjMwZjlmNCIsInNjb3BlZEtleVNlY3JldCI6ImIyNTM4MjYzNTI3MWIxMjkzM2M4OWIxNTAyYzliZDNiZDg4ZGZjMTM1ODA5Y2NiOTVlYWVjNThlODEzMGY2MzEiLCJpYXQiOjE2NTg3NjE1MzR9.tGbTTYJ68zTNXLQxql_KWZaqCVUtMxhJvKDeiT-X54U

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
