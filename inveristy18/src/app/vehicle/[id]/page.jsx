import findVehicleDetails from "./findVehicleDetails";

export default async function VehicleDetails({ params }) {
  const carReg = await findVehicleDetails(params.id);
  return (
    <>
      <h1>Your Vehicle Details</h1>
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
    </>
  );
}
