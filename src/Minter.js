import { useEffect, useState } from 'react';

import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from './utils/interact.js';

const Minter = (props) => {
  //State variables
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');
  const url =
    'https://images-na.ssl-images-amazon.com/images/I/81oqkwrsmxL.jpg';
  const customerName = 'Ankit Ayush';
  const name = 'Toy';
  const SerialNumber = '1234-5678';
  const IssueTime = 'Issue Time';
  const WarrantyDuration = '5 months';
  const WarrantyConditions = 'conditions';

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

  return (
    <div className="Minter">
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

      <button id="mintButton" onClick={onMintPressed}>
        Buy Now
      </button>
      <p id="status">{status}</p>
    </div>
  );
};

export default Minter;
