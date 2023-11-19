/* eslint-disable @next/next/no-img-element */
type Props = {
  nfts: string[];
};

function NFTGrid({ nfts }: Props) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {nfts.map((nft, index) => {
          return (
            <div key={index}>
              <img className="h-auto max-w-full rounded-lg" src={nft} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NFTGrid;
