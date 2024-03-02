export default function VehicleDetails({ params }) {
  const carReg = params.id;
  return (
    <>
      <h1>Your Vehicle Details</h1>
      <div>{carReg}</div>
    </>
  );
}
