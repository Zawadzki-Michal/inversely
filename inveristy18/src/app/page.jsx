import Image from "next/image";
import Link from "next/link";
import VehicleReg from "./components/vehicleReg";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Image
        src="/vehicle.jpg"
        alt="EVHealthCheck.com"
        width={600}
        height={600}
      />
      <h1 className="text-6xl font-bold text-center text-black">
        Welcome to EVHealthCheck.com
      </h1>
      <h2>Unlock the Power of Peace of Mind! Is that used EV a gem or a gamble? Enter your vehicle registration below and let EVHealthCheck.com reveal the secret life of your electric companion!</h2>
      <VehicleReg />
      
    </main>
  );
}
  