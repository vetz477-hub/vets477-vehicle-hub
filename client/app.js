const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");
const queryEl = document.getElementById("query");
const searchBtn = document.getElementById("searchBtn");
const saveBtn = document.getElementById("saveBtn");

const vehicleTitle = document.getElementById("vehicleTitle");
const manufacturerEl = document.getElementById("manufacturer");
const modelEl = document.getElementById("model");
const yearEl = document.getElementById("year");
const engineCodeEl = document.getElementById("engineCode");
const transmissionEl = document.getElementById("transmission");
const powerEl = document.getElementById("power");
const torqueEl = document.getElementById("torque");
const plateEl = document.getElementById("plate");
const specListEl = document.getElementById("specList");
const manualListEl = document.getElementById("manualList");
const maintenanceListEl = document.getElementById("maintenanceList");

const API_BASE = "http://localhost:4000";

function showStatus(msg, type = "success") {
  statusEl.textContent = msg;
  statusEl.style.display = "block";
  statusEl.style.color = type === "error" ? "#b91c1c" : "#166534";
}

function renderSpecs(specs) {
  specListEl.innerHTML = "";
  Object.entries(specs).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.textContent = `${key}: ${value}`;
    specListEl.appendChild(li);
  });
}

function renderManuals(manuals) {
  manualListEl.innerHTML = "";
  manuals.forEach((manual) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = manual.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = `${manual.title} (${manual.type})`;
    li.appendChild(link);
    manualListEl.appendChild(li);
  });
}

function renderMaintenance(items) {
  maintenanceListEl.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.title} — ${item.interval}: ${item.description}`;
    maintenanceListEl.appendChild(li);
  });
}

async function searchVehicle() {
  const query = queryEl.value.trim();

  if (!query) {
    showStatus("Please enter a plate, VIN, or engine number.", "error");
    return;
  }

  try {
    showStatus("Searching...");

    const response = await fetch(`${API_BASE}/api/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });

    const payload = await response.json();

    if (!response.ok || !payload.success) {
      throw new Error(payload.message || "Vehicle not found.");
    }

    const vehicle = payload.data[0];

    vehicleTitle.textContent = `${vehicle.manufacturer} ${vehicle.model}`;
    manufacturerEl.textContent = vehicle.manufacturer;
    modelEl.textContent = vehicle.model;
    yearEl.textContent = vehicle.year;
    engineCodeEl.textContent = vehicle.engineCode;
    transmissionEl.textContent = vehicle.transmission;
    powerEl.textContent = vehicle.power;
    torqueEl.textContent = vehicle.torque;
    plateEl.textContent = vehicle.registrationPlate;

    renderSpecs(vehicle.specs);
    renderManuals(vehicle.manuals);
    renderMaintenance(vehicle.maintenance);

    resultEl.classList.remove("hidden");
    showStatus("Vehicle found successfully.");
  } catch (error) {
    resultEl.classList.add("hidden");
    showStatus(error.message || "Something went wrong.", "error");
  }
}

searchBtn.addEventListener("click", searchVehicle);
queryEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchVehicle();
  }
});

saveBtn.addEventListener("click", () => {
  const current = queryEl.value.trim();
  if (!current) {
    showStatus("Search for a vehicle before saving.", "error");
    return;
  }

  const saved = JSON.parse(localStorage.getItem("vets477_saved") || "[]");
  saved.push(current);
  localStorage.setItem("vets477_saved", JSON.stringify(saved));
  showStatus("Vehicle saved locally.");
});
