import React, { useEffect, useState } from 'react';
import "./Marketplace.css";
import { ElvWalletFrameClient } from "@eluvio/elv-wallet-frame-client";
    
function Marketplace () {
  const [walletFrameClient, setWalletFrameClient] = useState(null);

  useEffect(() => {
    async function initializeWalletFrameClient() {
      const walletFrameClient = await ElvWalletFrameClient.InitializeFrame({
        requestor: "My App",
        walletAppUrl: "https://wallet.contentfabric.io/?mid=iq__PoyQD1L385EWHguKYvGNUbpyXbP&hgm=/#/marketplace/iq__PoyQD1L385EWHguKYvGNUbpyXbP/store",
        target: document.getElementById("wallet-target")
      });
      setWalletFrameClient(walletFrameClient);
    }

    initializeWalletFrameClient().catch((error) => {
      // Handle any errors here
      console.error(error);
    });
  }, []);

  return (
    <main className="MainContainer" style={{minHeight: "100vh"}}>
      <section style={{minHeight: "100vh", width: "100%"}}>
      <iframe 
        id="wallet-target" 
        title="Eluvio Wallet" 
        style={{ width: "100%", minHeight: "100vh" }}>
      </iframe>
      </section>
    </main>
  )
}

export default Marketplace;