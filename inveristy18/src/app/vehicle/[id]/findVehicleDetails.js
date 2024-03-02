import { promises as fs } from "fs";

export default async function findVehicleDetails(reg) {
  try {
    let file = await fs.readFile(
      process.cwd() + "/public/data lookup table.json",
      "utf8"
    );
    let vehicleDetails = JSON.parse(file);
    const result = vehicleDetails.find((x) => x.reg == reg);
    return result;
  } catch (error) {
    console.log(error);
  }
}
