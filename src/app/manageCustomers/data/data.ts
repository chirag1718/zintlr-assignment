interface Asset {
  totalAmount: string;
  gold: string;
  silver: string;
  price: string;
}

interface Facilitator {
  b2bFieldExecutiveName: string;
  associateName: string;
}

interface ConsumerData {
  id: number;
  consumerName: string;
  notification?: number;
  assets: Asset;
  revenue: string;
  kycStatus: string;
  facilitator: Facilitator;
  zone: string;
  accountType: string;
  tpa: string;
}

export const data: ConsumerData[] = [
  {
    id: 1,
    consumerName: "Ragvendra Raga",
    notification: 3,
    assets: {
      totalAmount: "₹35,342",
      gold: "50.54g",
      silver: "34.2g",
      price: "₹242.5",
    },
    revenue: "₹35,342",
    kycStatus: "Done",
    facilitator: {
      b2bFieldExecutiveName: "Arun Jha",
      associateName: "Anika Singh",
    },
    zone: "South",
    accountType: "Business",
    tpa: "9876543210@trucard",
  },
  {
    id: 2,
    consumerName: "Samantha Smith",
    notification: 13,
    assets: {
      totalAmount: "₹45,678",
      gold: "20.12g",
      silver: "45.8g",
      price: "₹180.75",
    },
    revenue: "₹45,678",
    kycStatus: "Pending",
    facilitator: {
      b2bFieldExecutiveName: "Chris Johnson",
      associateName: "Emily Brown",
    },
    zone: "North",
    accountType: "Individual",
    tpa: "7654321098@trucard",
  },
  {
    id: 3,
    consumerName: "John Doe",
    notification: 9,
    assets: {
      totalAmount: "₹28,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹28,500",
    kycStatus: "Done",
    facilitator: {
      b2bFieldExecutiveName: "Mary Wilson",
      associateName: "David Johnson",
    },
    zone: "West",
    accountType: "Individual",
    tpa: "8765432109@trucard",
  },
  {
    id: 4,
    consumerName: "Tony Stark",
    notification: 1,

    assets: {
      totalAmount: "₹98,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹98,500",
    kycStatus: "Done",
    facilitator: {
      b2bFieldExecutiveName: "Pepper Pots",
      associateName: "Happy",
    },
    zone: "West",
    accountType: "Business",
    tpa: "7896542578@trucard",
  },
  {
    id: 5,
    consumerName: "Steve Rogers",
    assets: {
      totalAmount: "₹58,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹58,500",
    kycStatus: "Done",
    facilitator: {
      b2bFieldExecutiveName: "Becky Rogers",
      associateName: "Hydra",
    },
    zone: "East",
    accountType: "Individual",
    tpa: "3698547861@trucard",
  },
  {
    id: 6,
    consumerName: "Bruce Banner",
    assets: {
      totalAmount: "₹28,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹28,500",
    kycStatus: "Done",
    facilitator: {
      b2bFieldExecutiveName: "Natasha Romanova",
      associateName: "",
    },
    zone: "West",
    accountType: "Individual",
    tpa: "8765432109@trucard",
  },
  {
    id: 7,
    consumerName: "Thor",
    assets: {
      totalAmount: "₹99,999",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹99,999",
    kycStatus: "Done",
    facilitator: {
      b2bFieldExecutiveName: "Jane Foster",
      associateName: "Hela",
    },
    zone: "West",
    accountType: "Individual",
    tpa: "8765432109@trucard",
  },
  {
    id: 8,
    consumerName: "Spider Man",
    notification: 13,
    assets: {
      totalAmount: "₹9,000",
      gold: "1.2g",
      silver: "5.5g",
      price: "₹150.2",
    },
    revenue: "₹9,000",
    kycStatus: "Done",
    facilitator: {
      b2bFieldExecutiveName: "Mary Jane",
      associateName: "Ned Line",
    },
    zone: "West",
    accountType: "Individual",
    tpa: "8765432109@trucard",
  },
  // {
  //   id: 9,
  //   consumerName: "Thor",
  //   assets: {
  //     totalAmount: "₹99,999",
  //     gold: "40.2g",
  //     silver: "25.5g",
  //     price: "₹150.2",
  //   },
  //   revenue: "₹99,999",
  //   kycStatus: "Done",
  //   facilitator: {
  //     b2bFieldExecutiveName: "Jane Foster",
  //     associateName: "Hela",
  //   },
  //   zone: "West",
  //   accountType: "Individual",
  //   tpa: "8765432109@trucard",
  // },
  // {
  //   id: 10,
  //   consumerName: "Thor",
  //   assets: {
  //     totalAmount: "₹99,999",
  //     gold: "40.2g",
  //     silver: "25.5g",
  //     price: "₹150.2",
  //   },
  //   revenue: "₹99,999",
  //   kycStatus: "Done",
  //   facilitator: {
  //     b2bFieldExecutiveName: "Jane Foster",
  //     associateName: "Hela",
  //   },
  //   zone: "West",
  //   accountType: "Individual",
  //   tpa: "8765432109@trucard",
  // },
];
