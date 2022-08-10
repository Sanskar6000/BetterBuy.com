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
  const paramId = useParams().id;

  const [isBuy, setisBuy] = useState(false);

  const [product, setProduct] = useState({
    id: '',
    image: '',
    name: '',
    stars: '',
    rating: '',
    price: '',
    slug: '',
    description: '',
    countInStock: '',
    customername: '',
    serialnumber: '',
    issuetime: '',
    warrantyduration: '',
    warrantyconditions: '',
  });

  //State variables
  var currentdate = new Date();
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const url = product.image;
  const customerName = `${walletAddress}(Wallet Address)`;
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

  // const URL = `http://localhost:8000/api/product/slug/${slug}`;
  console.log(URL);

  //Fetching Products
  useEffect(() => {
    const getEntry = async () => {
      if (paramId) {
        const res = await axios.get(`/api/entries/${paramId}`);
        setProduct({
          id: res.data.id,
          image: res.data.image,
          name: res.data.name,
          stars: res.data.stars,
          rating: res.data.rating,
          price: res.data.price,
          slug: res.data.slug,
          description: res.data.description,
          countInStock: res.data.countInStock,
          customername: res.data.customername,
          serialnumber: res.data.serialnumber,
          issuetime: res.data.issuetime,
          warrantyduration: res.data.warrantyduration,
          warrantyconditions: res.data.warrantyconditions,
          id: res.data._id,
        });
      }
    };
    getEntry();
  }, [paramId]);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus('👇 Write your email address in the text-field .');
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
    setisBuy(true);
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
      .post('/create', {
        email: email,
        text: status,
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
    const res = await axios('/send');
  };

  return (
    <div>
      <Header />
      <div className="img-container wallet_button">
        <button
          id="walletButton"
          onClick={connectWalletPressed}
          className="btnn buy_button "
        >
          {walletAddress.length > 0 ? (
            'Connected: ' +
            String(walletAddress).substring(0, 6) +
            '...' +
            String(walletAddress).substring(38)
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      </div>

      <br></br>

      {/* ----------------Product Screen-------------------- */}

      <div className="desc-container">
        <div className="img-container">
          <img src={product.image} height={400} widtgh={400} />
          <button className="buy_button" onClick={onMintPressed}>
            Buy Now
          </button>
        </div>
        <div className="content-container">
          <h3>{product.name}</h3>
          <h2>
            {product.stars} {product.rating}
          </h2>
          <h3>Only {product.countInStock} left Hurry up!</h3>
          <h1>₹ {product.price} </h1>
          <h4>About this Item</h4>
          <ul>
            <li>{product.description}</li>
          </ul>
        </div>
      </div>

      {/* ----------------Product Screen-------------------- */}

      {isBuy && (
        <div>
          {' '}
          <div className="mail">
            <p>{status}</p>{' '}
            <form onSubmit={mailSubmit}>
              <input
                name="email"
                required
                value={email}
                onChange={onChangeInput}
                placeholder="email"
              />

              <button type="submit" className="buy_button btn1 ">
                submit
              </button>
            </form>
            <button onClick={onmail} className="buy_button btn2">
              send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Minter;
