// Initialize your provider
import { ThirdwebProvider } from "@thirdweb-dev/react";

function Provider() {
  return (
    <ThirdwebProvider
      clientId="YOUR_CLIENT_ID" // You can get a client id from dashboard settings
      activeChain="goerli"
      >
      ...
    </ThirdwebProvider>
  );
}

// Upload files to IPFS
import { useStorageUpload } from "@thirdweb-dev/react";

function App() {
  const { mutateAsync: upload } = useStorageUpload();

  const uploadData = () => {
    // Get any data that you want to upload
    const dataToUpload = [...];

    // And upload the data with the upload function
    const uris = await upload({ data: dataToUpload });
  }
  ...
}

// Render files from IPFS
import { MediaRenderer } from "@thirdweb-dev/react";

function App() {
  return (
    // Supported types: image, video, audio, 3d model, html
    <MediaRenderer src="ipfs://QmamvVM5kvsYjQJYs7x8LXKYGFkwtGvuRvqZsuzvpHmQq9/0" />
  );
}