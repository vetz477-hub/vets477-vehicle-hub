module.exports = [
  {
    id: "veh_001",
    vin: "WF0AXXGBB7GJ12345",
    registrationPlate: "AB12CDE",
    engineNumber: "FDO1234567",
    manufacturer: "Ford",
    model: "Focus",
    year: 2019,
    engineCode: "1.0 EcoBoost",
    fuelType: "Petrol",
    transmission: "Manual",
    power: "125 hp",
    torque: "170 Nm",
    bodyType: "Hatchback",
    driveType: "Front-wheel drive",
    specs: {
      displacement: "999 cc",
      cylinders: "3",
      drivetrain: "Front-wheel drive",
      transmission: "6-speed manual",
      bodyType: "Hatchback"
    },
    manuals: [
      {
        id: "m_001",
        title: "Owner Manual",
        type: "owner",
        url: "https://example.com/ford-focus-owner-manual.pdf",
        source: "OEM"
      },
      {
        id: "m_002",
        title: "Workshop Manual",
        type: "workshop",
        url: "https://example.com/ford-focus-workshop-manual.pdf",
        source: "OEM"
      }
    ],
    maintenance: [
      {
        id: "svc_001",
        title: "Oil change",
        interval: "10,000 km",
        description: "Replace oil and filter every 10,000 km."
      },
      {
        id: "svc_002",
        title: "Brake inspection",
        interval: "12 months",
        description: "Inspect brake pads, discs, and fluid condition."
      }
    ]
  },
  {
    id: "veh_002",
    vin: "WVWZZZ1JZMH123456",
    registrationPlate: "XY22LMN",
    engineNumber: "VWG7654321",
    manufacturer: "Volkswagen",
    model: "Golf",
    year: 2021,
    engineCode: "1.5 TSI",
    fuelType: "Petrol",
    transmission: "Automatic",
    power: "150 hp",
    torque: "250 Nm",
    bodyType: "Hatchback",
    driveType: "Front-wheel drive",
    specs: {
      displacement: "1498 cc",
      cylinders: "4",
      drivetrain: "Front-wheel drive",
      transmission: "7-speed DSG",
      bodyType: "Hatchback"
    },
    manuals: [
      {
        id: "m_003",
        title: "Owner Manual",
        type: "owner",
        url: "https://example.com/vw-golf-owner-manual.pdf",
        source: "OEM"
      }
    ],
    maintenance: [
      {
        id: "svc_003",
        title: "Timing belt check",
        interval: "60,000 km",
        description: "Inspect timing system and replace if required."
      }
    ]
  },
  {
    id: "veh_003",
    vin: "JT2BG22K0LJ123456",
    registrationPlate: "GH34QRT",
    engineNumber: "TOY9988776",
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2020,
    engineCode: "1.8 VVT-i",
    fuelType: "Petrol",
    transmission: "Automatic",
    power: "140 hp",
    torque: "177 Nm",
    bodyType: "Saloon",
    driveType: "Front-wheel drive",
    specs: {
      displacement: "1798 cc",
      cylinders: "4",
      drivetrain: "Front-wheel drive",
      transmission: "CVT",
      bodyType: "Saloon"
    },
    manuals: [
      {
        id: "m_004",
        title: "Owner Manual",
        type: "owner",
        url: "https://example.com/toyota-corolla-owner-manual.pdf",
        source: "OEM"
      }
    ],
    maintenance: [
      {
        id: "svc_004",
        title: "Battery check",
        interval: "12 months",
        description: "Inspect battery voltage and terminal condition."
      }
    ]
  }
];
