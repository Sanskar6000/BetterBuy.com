import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  /* -----Sending Email -------*/
  const [email, setEmail] = useState();
  const [text, setText] = useState('');

  const onChangeInput = (e) => {
    const { value } = e.target;
    setEmail(value);
    // setUser({ ...user, text: status });
    console.log(email);
  };

  const mailSubmit = (e) => {
    e.preventDefault();
    setText(status);

    console.log('From mailSubmit:', email);
    console.log('From mailSubmit:', text);

    axios
      .post('http://localhost:8000/create', {
        email: email,
        text: text,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  /* -----Sending Email -------*/

  const onmail = async () => {
    const res = await axios('http://localhost:8000/send');
  };

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

         <div className='desc-container'>
     <div className='img-container'>
        <img src={product.image}
        height={400}
        widtgh={400}
        
        />
    <button className='buy_button' onClick={onMintPressed}>
        Buy Now
      </button>
     </div>
     <div className='content-container'> 
        <h3>{product.name}</h3>
        <h2>{product.stars}        {product.rating}</h2>
        <h3>Only {product.countInStock} left Hurry up!</h3>
        <h1>₹ {product.price} </h1>
        <h4>About this Item</h4>
        <ul>
          <li>{product.description}</li>
          
        </ul>
     </div>
     </div>
    
    
      {/* ----------------Product Screen-------------------- */}
      
      <p>{status}</p>
      <form onSubmit={mailSubmit}>
        <input
          name="email"
          required
          value={email}
          onChange={onChangeInput}
          placeholder="email"
        />
        <button type="submit">submit</button>
      </form>

      <button onClick={onmail}>send</button>
    </div>
  );
};

export default Minter;
