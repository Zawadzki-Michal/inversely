import findVehicleDetails from "./findVehicleDetails";

export default async function VehicleDetails({ params }) {
  const carReg = await findVehicleDetails(params.id);
  return (
    <>
      <h1>Your Vehicle Details</h1>
      <div>{carReg.reg}</div>
      <div>{carReg.make}</div>
      <div>{carReg.model}</div>
      <div>{carReg.production_year}</div>
      <div>{carReg.mileage}</div>
      <div>{carReg.battery_health}</div>
      <div>{carReg.estimated_time_until_replacement}</div>
      <div>{carReg.number_of_cycles}</div>
      <div>{carReg.current_charge}</div>
      <div>{carReg.amount_of_co2_saved}</div>
    </>
  );
}
