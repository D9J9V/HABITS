import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Login: NextPage = () => {
  const [transition1Enabled, setTransition1Enabled] = useState(true);
  const [transition2Enabled, setTransition2Enabled] = useState(true);

  return (
    <>
      <MetaHeader />

      <div className="bg-base-100 flex flex-col min-h-screen justify-center items-center">
        <div>
          <Image src="/logo.svg" width={250} height={100} alt="logo" />
        </div>

        <div className="p-4 w-full flex flex-col items-center justify-center">
          <button
            className="btn btn-ghost w-1/2 h-1/4 relative"
            onClick={() => setTransition1Enabled(!transition1Enabled)}
          >
            <Image
              src={transition1Enabled ? "/assets/login.svg" : "/assets/loginpress.svg"}
              layout="fill"
              objectFit="contain"
              alt="Login"
            />
          </button>

          <button
            className="btn btn-ghost w-1/2 h-1/4 relative mt-4"
            onClick={() => setTransition2Enabled(!transition2Enabled)}
          >
            <Image
              src={transition2Enabled ? "/assets/signup.svg" : "/assets/signuppress.svg"}
              layout="fill"
              objectFit="contain"
              alt="Sign Up"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
