const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const vehicles = require("./data/vehicles");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

function normalize(value) {
  return (value || "")
    .toString()
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

app.get("/health", (_req, res) => {
  res.json({ status: "ok", app: "vets477-api" });
});

app.post("/api/search", (req, res) => {
  const query = (req.body && req.body.query) || "";
  const normalizedQuery = normalize(query);

  if (!normalizedQuery || normalizedQuery.length < 2) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid registration plate, VIN, or engine number."
    });
  }

  const matches = vehicles.filter((vehicle) => {
    const plate = normalize(vehicle.registrationPlate);
    const engine = normalize(vehicle.engineNumber);
    const vin = normalize(vehicle.vin);
    const model = normalize(vehicle.model);
    const manufacturer = normalize(vehicle.manufacturer);

    return (
      plate.includes(normalizedQuery) ||
      engine.includes(normalizedQuery) ||
      vin.includes(normalizedQuery) ||
      model.includes(normalizedQuery) ||
      manufacturer.includes(normalizedQuery)
    );
  });

  if (matches.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No matching vehicle found."
    });
  }

  return res.json({ success: true, data: matches });
});

app.get("/api/vehicle/:id", (req, res) => {
  const vehicle = vehicles.find((item) => item.id === req.params.id);

  if (!vehicle) {
    return res.status(404).json({
      success: false,
      message: "Vehicle not found."
    });
  }

  return res.json({ success: true, data: vehicle });
});

app.listen(PORT, () => {
  console.log(`vets477 API running on http://localhost:${PORT}`);
});
