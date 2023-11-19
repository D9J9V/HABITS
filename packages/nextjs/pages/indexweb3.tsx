import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Button from "~~/components/common/Button";
import NFTGrid from "~~/components/common/NFTGrid";
import TextField from "~~/components/common/TextField";
import { getNFT, mintNFT, transferCUSD } from "~~/utils/transactions";

export default function Home() {
  const { address, isConnected } = useAccount();

  const [loading, setLoading] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [nfts, setNfts] = useState<string[]>([]);
  const [nftUrl, setNftUrl] = useState<string>("");

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
      getNFT(address).then(nftUrls => {
        setNfts(nftUrls);
      });
    }
  }, [address, isConnected]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full flex flex-col justify-center items-start  px-7">
        <div className="h2 text-center mb-4">
          Your address: {userAddress.substring(0, 5)}...
          {userAddress.substring(userAddress.length - 4, userAddress.length)}
        </div>
        <Button
          text="Send 0.1 cUSD"
          loading={loading}
          onClick={async () => {
            setLoading(true);
            await transferCUSD("0xE1061b397cC3C381E95a411967e3F053A7c50E70", address as string);
            setLoading(false);
          }}
        />
        <hr className="w-full h-1 my-4 bg-gray-500 border-0 rounded md:my-10" />

        <TextField
          name="nftUrl"
          onChange={e => {
            setNftUrl(e.target.value);
          }}
          value={nftUrl}
        />
        <Button
          loading={loading}
          text="Mint NFT"
          onClick={async () => {
            setLoading(true);
            await mintNFT(nftUrl, address as string);
            const nftUrls = await getNFT(address as string);
            setNfts(nftUrls);
            setNftUrl("");
            setLoading(false);
          }}
        />

        <hr className="w-full h-1 my-4 bg-gray-500 border-0 rounded md:my-10" />
        <NFTGrid nfts={nfts} />
      </div>
    </div>
  );
}
