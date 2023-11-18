import { useState } from "react";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  const [transition1Enabled, setTransition1Enabled] = useState(true);
  const [transition2Enabled, setTransition2Enabled] = useState(true);
  const [transition3Enabled, setTransition3Enabled] = useState(true);

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-5">
        <div className="px-5">
          <h1 className="text-center mb-4">
            <span className="block text-2xl font-bold">DAILY TASKS</span>
          </h1>
          <h2>
            <span>Complete your challenges for the day</span>
          </h2>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-4 px-8 py-4">
          <div className="flex justify-center items-center gap-0 flex-col sm:flex-row">
            <div className="w-full relative" style={{ paddingTop: "50%" }}>
              <button
                className="btn btn-ghost absolute top-0 left-0 w-full h-full bg-center bg-contain bg-no-repeat bg-[url('/assets/workout.svg')] rounded-none"
                onClick={() => {
                  setTransition1Enabled(!transition1Enabled);
                }}
              >
                <div
                  className={`absolute inset-0 bg-center bg-contain bg-no-repeat bg-[url('/assets/workoutpress.svg')] transition-opacity ${
                    transition1Enabled ? "opacity-0" : "opacity-100"
                  }`}
                />
              </button>
            </div>

            <div className="w-full relative" style={{ paddingTop: "50%" }}>
              <button
                className="btn btn-ghost absolute top-0 left-0 w-full h-full bg-center bg-contain bg-no-repeat bg-[url('/assets/savings.svg')] rounded-none"
                onClick={() => {
                  setTransition2Enabled(!transition2Enabled);
                }}
              >
                <div
                  className={`absolute inset-0 bg-center bg-contain bg-no-repeat bg-[url('/assets/savingspress.svg')] transition-opacity ${
                    transition2Enabled ? "opacity-0" : "opacity-100"
                  }`}
                />
              </button>
            </div>

            <div className="w-full relative" style={{ paddingTop: "50%" }}>
              <button
                className="btn btn-ghost absolute top-0 left-0 w-full h-full bg-center bg-contain bg-no-repeat bg-[url('/assets/flow.svg')] rounded-none"
                onClick={() => {
                  setTransition3Enabled(!transition3Enabled);
                }}
              >
                <div
                  className={`absolute inset-0 bg-center bg-contain bg-no-repeat bg-[url('/assets/flowpress.svg')] transition-opacity ${
                    transition3Enabled ? "opacity-0" : "opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
