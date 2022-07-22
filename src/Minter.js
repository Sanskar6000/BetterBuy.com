import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from './utils/interact.js';

import Header from './components/Header.js';


const Minter = (props) => {
  const params = useParams();
  const { slug } = params;
  const [product, setProduct] = useState({});

  const URL = `http://localhost:8000/api/product/slug/${slug}`;
  console.log(URL);

  //Fetching Products
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axios
      .get(`${URL}`)
      .then((response) => {
        console.log(response);
        const allProducts = response.data;
        setProduct(allProducts);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  console.log(product);

  //State variables
  var currentdate = new Date();
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const url = product.image;
  const customerName = product.customername;
  const name = product.name;
  const SerialNumber = product.serialnumber;

  const IssueTime =
    currentdate.getDate() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getFullYear() +
    ' @ ' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds();

  const WarrantyDuration = product.warrantyduration;
  const WarrantyConditions = product.Warrantyconditions;

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus('👆🏽 Write a message in the text-field above.');
        } else {
          setWallet('');
          setStatus('🦊 Connect to Metamask using the top right button.');
        }
      });
    } else {
      setStatus(
        <p>
          {' '}
          🦊{' '}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  //Tackles Reload
  useEffect(() => {
    async function fetchWallet() {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
      addWalletListener();
    }
    fetchWallet();
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    const { status } = await mintNFT(
      name,
      url,
      customerName,
      SerialNumber,
      IssueTime,
      WarrantyDuration,
      WarrantyConditions
    );
    setStatus(status);

  };
const onmail=async()=>{
 
const res=await axios("http://localhost:8000/send")



}
  return (
    <div>
      <Header />
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          'Connected: ' +
          String(walletAddress).substring(0, 6) +
          '...' +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>

      {/* ----------------Product Screen-------------------- */}

      <div>
        {product.customerName}
        <img src={product.image} alt={product.slug} />
        {product.issuetime}
        {product.name}
        {product.price}
      </div>

      {/* ----------------Product Screen-------------------- */}
      <button id="mintButton" onClick={onMintPressed}>
        Buy Now
      </button>
      <button  onClick={onmail}>
        send
      </button>
     

    </div>
  );
};

export default Minter;
