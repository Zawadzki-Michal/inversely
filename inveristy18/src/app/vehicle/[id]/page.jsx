import findVehicleDetails from "./findVehicleDetails";
import Image from "next/image";

export default async function VehicleDetails({ params }) {
  const carReg = await findVehicleDetails(params.id);
  return (


    <div className="bg-emerald-50 flex justify-center gap-24 p-24 min-h-screen">
      
      <div className="lg:text-2xl leading-loose">
      <h1>Your Vehicle Report:</h1>
      <div>
        <div>Make: {carReg.make}</div>
        <div>Model: {carReg.model}</div>
        <div>Year: {carReg.production_year}</div>
        <div>Mileage: {carReg.mileage}</div>
      </div>
      <div>Your battery health is {carReg.battery_health}</div>
      <div>{carReg.estimated_time_until_replacement}</div>
      <div>{carReg.number_of_cycles}</div>
      <div>{carReg.current_charge}</div>
        <div>{carReg.amount_of_co2_saved}</div>
      </div>
      <div>
      <Image
        src={carReg.url}
        alt="Car Image"
        width={500}
        height={500}
      />  
</div>
    </div>
  );
}
