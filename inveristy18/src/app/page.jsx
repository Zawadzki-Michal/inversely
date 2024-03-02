import Image from "next/image";
import Link from "next/link";
import VehicleReg from "./components/vehicleReg";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="lg:min-h-screen w-screen bg-emerald-50">
      <div className="lg:flex lg:flex-row lg:px-24 justify-center py-2">
        <Image
          src="/Designer2.png"
          alt="EVHealthCheck.com"
          width={600}
          height={600}
        />
        <span className="lg:px-12 lg:my-12">
          <h1 className="lg:text-6xl font-bold text-center text-black pb-6">
            Welcome to EVHealthCheck.com
          </h1>
          <h2 className="lg:text-2xl max-w-2/3">
            Unlock the Power of Peace of Mind! Is that used EV a gem or a
            gamble? Enter your vehicle registration below and let
            EVHealthCheck.com reveal the secret life of your electric companion!
          </h2>
          <h2 className="lg:text-4xl text-lg max-w-5/6 font-bold text-center text-black py-6">
            Enter your vehicle registration below to get started!
          </h2>
          <VehicleReg />
        </span>
      </div>
      <div className="flex flex-col justify-center"></div>
    </main>
  );
}
