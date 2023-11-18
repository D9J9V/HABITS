import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex space-x-2 pointer-events-auto">
            <RainbowKitCustomConnectButton />
          </div>
        </div>
      </div>

      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full">
            <div>
              <p className="m-0 text-center">
                Open{" "}
                <a
                  href="https://github.com/D9J9V/HABITS"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  Source Code
                </a>
              </p>
            </div>
            <span>·</span>

            <div>
              <p className="m-0 text-center">
                Running on{" "}
                <a
                  href="https://ethereum.org/en/developers/docs/evm/A"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  EVM
                </a>
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
