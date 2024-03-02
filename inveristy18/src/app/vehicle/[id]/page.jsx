import findVehicleDetails from "./findVehicleDetails";
import Image from "next/image";

export default async function VehicleDetails({ params }) {
  const carReg = await findVehicleDetails(params.id);
  return (


    <div className="bg-emerald-50 flex flex-col-reverse md:flex-row-reverse p-4 justify-center gap-24 lg:p-24 min-h-screen">
      
      <div className="lg:text-2xl text-lg font-semibold  leading-loose">
      <h1>Your Vehicle Report</h1>
      <div className="leading-relaxed">
        <p>Make: {carReg.make}</p>
        <p>Model: {carReg.model}</p>
        <p>Year: {carReg.production_year}</p>
        <p>Mileage: {carReg.mileage}</p>
        </div>
        <div className="leading-relaxed">
      <p>Your battery health is: {carReg.battery_health}</p>
      <p>Estimated time until battery replacement (months): {carReg.estimated_time_until_replacement}</p>
      <p>Number of battery cycles {carReg.number_of_cycles}</p>
      <p>Current charge level: {carReg.current_charge}%</p>
          <p>Amount of CO2 saved: {carReg.amount_of_co2_saved}KG</p>
          </div>
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
