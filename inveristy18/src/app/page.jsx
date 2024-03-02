import Image from "next/image";
import Link from "next/link";
import VehicleReg from "./components/vehicleReg";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-emerald-50">
      <Header />
      <div className="lg:flex lg:flex-row px-24 justify-center">
      <Image
        src="/Designer2.png"
        alt="EVHealthCheck.com"
        width={600}
        height={600}
        />
        <span className="lg:px-12 lg:my-12">
      <h1 className="text-6xl font-bold text-center text-black pb-12">
        Welcome to EVHealthCheck.com
      </h1>
          <h2 className="lg:text-2xl max-w-2/3">Unlock the Power of Peace of Mind! Is that used EV a gem or a gamble? Enter your vehicle registration below and let EVHealthCheck.com reveal the secret life of your electric companion!</h2>
          </span>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-center text-black py-12">
          Enter your vehicle registration below to get started!
        </h2>
        <VehicleReg />
      </div>
    </main>
  );
}
  