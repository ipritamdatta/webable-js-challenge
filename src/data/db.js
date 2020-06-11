const shipments = [
  {
    id: "S1000",
    name: "T-shirts(Summer2018) from Shanghai to Hamburg",
    cargo: [
      {
        id: 1,
        type: "Fabric",
        description: "1000 Blue T-shirts",
        volume: "2",
      },
      {
        id: 2,
        type: "Fabric",
        description: "2000 Green T-shirts",
        volume: "3",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Saarbrücker Str. 38, 10405 Berlin",
    origin: "Shanghai Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "1000",
    status: "ACTIVE",
    userId: "U1000",
  },
  {
    id: "S1001",
    name: "New spring collection(2018)",
    cargo: [
      {
        id: 1,
        type: "Furniture",
        description: "300 Tables",
        volume: "20",
      },
      {
        id: 2,
        type: "Furniture",
        description: "1500 Chairs",
        volume: "15",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Saarbrücker Str. 38, 10405 Berlin",
    origin: "Ningbo port",
    services: [
      {
        id: 1,
        type: "customs",
      },
      {
        id: 2,
        type: "insurance",
        value: "100",
      },
    ],
    total: "3000",
    status: "ACTIVE",
    userId: "U1002",
  },
  {
    id: "S1002",
    name: "PO89634, PO27X",
    cargo: [
      {
        id: 1,
        type: "Bikes model 27X",
        description: "100 Bikes model 27X",
        volume: "100",
      },
    ],
    mode: "air",
    type: "LCL",
    destination: "Saarbrücker Str. 38, 10405 Berlin",
    origin: "Shanghai Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "10000",
    status: "COMPLETED",
    userId: "U1001",
  },
  {
    id: "S1003",
    name: "New Furnitures from Shengen(2018)",
    cargo: [
      {
        id: 1,
        type: "Couch22 White",
        description: "103 Couch model Couch22",
        volume: "103",
      },
    ],
    mode: "sea",
    type: "LCL",
    destination: "Mullerstr 6, 13353 Berlin",
    origin: "Shengen Port",
    services: [
      {
        id: 1,
        type: "insurance",
      },
    ],
    total: "10000",
    status: "COMPLETED",
    userId: "U5312",
  },
  {
    id: "S1004",
    name: "New Furnitures from Shengen",
    cargo: [
      {
        id: 1,
        type: "Couch22 White",
        description: "103 Couch model Couch22",
        volume: "103",
      },
    ],
    mode: "air",
    type: "LCL",
    destination: "Mullerstr 6, 13353 Berlin",
    origin: "Shengen Port",
    services: [
      {
        id: 1,
        type: "insurance",
      },
    ],
    total: "10000",
    status: "NEW",
    userId: "U5312",
  },
  {
    id: "S1005",
    name: "New Furnitures From Chittagong",
    cargo: [
      {
        id: 1,
        type: "Couch22 White",
        description: "103 Couch model Couch22",
        volume: "103",
      },
      {
        id: 2,
        type: "Couch22 Black",
        description: "103 Couch model Couch22",
        volume: "103",
      },
    ],
    mode: "air",
    type: "FCL",
    destination: "Mullerstr 6, 13353 Berlin",
    origin: "Chittagong Port",
    services: [
      {
        id: 1,
        type: "insurance",
      },
    ],
    total: "1000",
    status: "NEW",
    userId: "U5312",
  },
  {
    id: "S1006",
    name: "Vacuum Cleaners",
    cargo: [
      {
        id: 1,
        type: "TVAC515",
        description: "555 TVAC515 120V",
        volume: "555",
      },
      {
        id: 2,
        type: "Couch22 Black",
        description: "555 TVAC515 240V",
        volume: "555",
      },
    ],
    mode: "air",
    type: "FCL",
    destination: "Tughlakabad Port",
    origin: "Hamburg Port",
    services: [
      {
        id: 1,
        type: "insurance",
      },
      {
        id: 2,
        type: "customs",
      },
    ],
    total: "100000",
    status: "ACTIVE",
    userId: "U531221",
  },
  {
    id: "S1007",
    name: "Mattress",
    cargo: [
      {
        id: 1,
        type: "MAT128",
        description: "MAT12ftx82ft",
        volume: "666",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Shengen Port",
    origin: "Bremerhaven Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "101010",
    status: "ACTIVE",
    userId: "U531222",
  },
  {
    id: "S1008",
    name: "Scooters",
    cargo: [
      {
        id: 1,
        type: "Gororo",
        description: "Gororo Type B",
        volume: "150",
      },
    ],
    mode: "air",
    type: "FCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "60120120",
    status: "COMPLETED",
    userId: "U1337",
  },
  {
    id: "S1009",
    name: "Helmets",
    cargo: [
      {
        id: 1,
        type: "HelmGoro",
        description: "HelmGoro Red",
        volume: "150",
      },
    ],
    mode: "air",
    type: "LCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "60120120",
    status: "COMPLETED",
    userId: "U1337",
  },
  {
    id: "S1010",
    name: "Neukrit 5a Cable",
    cargo: [
      {
        id: 1,
        type: "Neukrit5a",
        description: "Cable with phantom support",
        volume: "80",
      },
    ],
    mode: "air",
    type: "LCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "420420",
    status: "ACTIVE",
    userId: "U0002",
  },
  {
    id: "S1011",
    name: "Neukrit Phantom3",
    cargo: [
      {
        id: 1,
        type: "NeukritPh3",
        description: "Phantom Plug Gold Plated",
        volume: "100",
      },
    ],
    mode: "sea",
    type: "LCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "420420",
    status: "ACTIVE",
    userId: "U0002",
  },
  {
    id: "S1012",
    name: "T-shirts(Spring 2018) from Shanghai to Hamburg",
    cargo: [
      {
        id: 1,
        type: "Fabric",
        description: "1000 Blue T-shirts",
        volume: "2",
      },
      {
        id: 2,
        type: "Fabric",
        description: "2000 Green T-shirts",
        volume: "3",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Saarbrücker Str. 38, 10405 Berlin",
    origin: "Shanghai Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "1000",
    status: "COMPLETED",
    userId: "U1000",
  },
  {
    id: "S1013",
    name: "New spring furniture collection(2018)",
    cargo: [
      {
        id: 1,
        type: "Furniture",
        description: "300 Tables",
        volume: "20",
      },
      {
        id: 2,
        type: "Furniture",
        description: "1500 Chairs",
        volume: "15",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Saarbrücker Str. 38, 10405 Berlin",
    origin: "Ningbo port",
    services: [
      {
        id: 1,
        type: "customs",
      },
      {
        id: 2,
        type: "insurance",
        value: "100",
      },
    ],
    total: "3000",
    status: "COMPLETED",
    userId: "U1002",
  },
  {
    id: "S1014",
    name: "New Furnitures from Shengen(Rosewood)",
    cargo: [
      {
        id: 1,
        type: "Couch22 White",
        description: "103 Couch model Couch22",
        volume: "103",
      },
    ],
    mode: "air",
    type: "LCL",
    destination: "Mullerstr 6, 13353 Berlin",
    origin: "Shengen Port",
    services: [
      {
        id: 1,
        type: "insurance",
      },
    ],
    total: "10000",
    status: "COMPLETED",
    userId: "U5312",
  },
  {
    id: "S1015",
    name: "New Furnitures From Chittagong(Sisou)",
    cargo: [
      {
        id: 1,
        type: "Couch22 White",
        description: "103 Couch model Couch22",
        volume: "103",
      },
      {
        id: 2,
        type: "Couch22 Black",
        description: "103 Couch model Couch22",
        volume: "103",
      },
    ],
    mode: "air",
    type: "FCL",
    destination: "Mullerstr 6, 13353 Berlin",
    origin: "Chittagong Port",
    services: [
      {
        id: 1,
        type: "insurance",
      },
    ],
    total: "1000",
    status: "NEW",
    userId: "U5312",
  },
  {
    id: "S1016",
    name: "Vacuum Cleaners",
    cargo: [
      {
        id: 1,
        type: "TVAC515",
        description: "555 TVAC515 120V",
        volume: "555",
      },
      {
        id: 2,
        type: "Couch22 Black",
        description: "555 TVAC515 240V",
        volume: "555",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Tughlakabad Port",
    origin: "Hamburg Port",
    services: [
      {
        id: 1,
        type: "insurance",
      },
      {
        id: 2,
        type: "customs",
      },
    ],
    total: "100000",
    status: "COMPLETED",
    userId: "U531221",
  },
  {
    id: "S1017",
    name: "Mattress(Medium)",
    cargo: [
      {
        id: 1,
        type: "MAT128",
        description: "MAT12ftx82ft",
        volume: "666",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Shengen Port",
    origin: "Bremerhaven Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "101010",
    status: "ACTIVE",
    userId: "U531222",
  },
  {
    id: "S1018",
    name: "Scooters Blue/Green",
    cargo: [
      {
        id: 1,
        type: "Gororo",
        description: "Gororo Type B",
        volume: "150",
      },
    ],
    mode: "air",
    type: "FCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "60120120",
    status: "COMPLETED",
    userId: "U1337",
  },
  {
    id: "S1019",
    name: "Helmets(Round)",
    cargo: [
      {
        id: 1,
        type: "HelmGoro",
        description: "HelmGoro Red",
        volume: "150",
      },
    ],
    mode: "air",
    type: "LCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "60120120",
    status: "COMPLETED",
    userId: "U1337",
  },
  {
    id: "S1020",
    name: "Neukrit 5a Cable",
    cargo: [
      {
        id: 1,
        type: "Neukrit5a",
        description: "Cable with phantom support",
        volume: "80",
      },
    ],
    mode: "air",
    type: "LCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "420420",
    status: "ACTIVE",
    userId: "U0002",
  },
  {
    id: "S1021",
    name: "Neukrit Phantom3",
    cargo: [
      {
        id: 1,
        type: "NeukritPh3",
        description: "Phantom Plug Gold Plated",
        volume: "100",
      },
    ],
    mode: "sea",
    type: "LCL",
    destination: "Rotterdam Port",
    origin: "Xianbou Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "420420",
    status: "ACTIVE",
    userId: "U0002",
  },
  {
    id: "S1022",
    name: "T-shirts(Spring 2019) from Shanghai to Hamburg",
    cargo: [
      {
        id: 1,
        type: "Fabric",
        description: "1000 Blue T-shirts",
        volume: "2",
      },
      {
        id: 2,
        type: "Fabric",
        description: "2000 Green T-shirts",
        volume: "3",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Saarbrücker Str. 38, 10405 Berlin",
    origin: "Shanghai Port",
    services: [
      {
        id: 1,
        type: "customs",
      },
    ],
    total: "1000",
    status: "ACTIVE",
    userId: "U1000",
  },
  {
    id: "S1023",
    name: "New spring collection(2019)",
    cargo: [
      {
        id: 1,
        type: "Furniture",
        description: "300 Tables",
        volume: "20",
      },
      {
        id: 2,
        type: "Furniture",
        description: "1500 Chairs",
        volume: "15",
      },
    ],
    mode: "sea",
    type: "FCL",
    destination: "Saarbrücker Str. 38, 10405 Berlin",
    origin: "Ningbo port",
    services: [
      {
        id: 1,
        type: "customs",
      },
      {
        id: 2,
        type: "insurance",
        value: "100",
      },
    ],
    total: "3000",
    status: "ACTIVE",
    userId: "U1002",
  },
];

export default shipments;
