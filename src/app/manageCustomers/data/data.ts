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

export interface ConsumerData {
  id: number;
  consumerName: string;
  notification?: number;
  assets: Asset;
  revenue: string;
  kycStatus: string;
  facilitator: Facilitator;
  zone: string;
  accountType: {
    type: "Salary" | "Earner" | "Individual" | "Pay and Use" | "Business";
    subtType?: {
      minor?: "(Minor)";
      major?: "(Major)";
    };
  };
  tpa: string;
}

export const mockData: ConsumerData[] = [
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
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
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
    accountType: { type: "Salary" },
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
    accountType: {
      type: "Pay and Use",
      subtType: {
        major: "(Major)",
      },
    },
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
    zone: "East",
    accountType: {
      type: "Pay and Use",
      subtType: {
        major: "(Major)",
      },
    },
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
    kycStatus: "In Progress",
    facilitator: {
      b2bFieldExecutiveName: "Becky Rogers",
      associateName: "Hydra",
    },
    zone: "South",
    accountType: { type: "Individual" },
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
    kycStatus: "Rejected",
    facilitator: {
      b2bFieldExecutiveName: "Natasha Romanova",
      associateName: "",
    },
    zone: "North",
    accountType: { type: "Earner" },
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
    zone: "East",
    accountType: { type: "Salary" },
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
    zone: "South",
    accountType: { type: "Business" },
    tpa: "8765432109@trucard",
  },
  {
    id: 9,
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
    zone: "North",
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "8765432109@trucard",
  },
  {
    id: 10,
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
    accountType: { type: "Individual" },
    tpa: "8765432109@trucard",
  },
  // ! NEW ENTRIES
  {
    id: 11,
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
    accountType: { type: "Earner" },
    tpa: "9876543210@trucard",
  },
  {
    id: 12,
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
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "7654321098@trucard",
  },
  {
    id: 13,
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
    accountType: { type: "Individual" },
    tpa: "8765432109@trucard",
  },
  {
    id: 14,
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
    zone: "East",
    accountType: { type: "Business" },
    tpa: "7896542578@trucard",
  },
  {
    id: 15,
    consumerName: "Steve Rogers",
    assets: {
      totalAmount: "₹58,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹58,500",
    kycStatus: "In Progress",
    facilitator: {
      b2bFieldExecutiveName: "Becky Rogers",
      associateName: "Hydra",
    },
    zone: "East",
    accountType: { type: "Salary" },
    tpa: "3698547861@trucard",
  },
  {
    id: 16,
    consumerName: "Bruce Banner",
    assets: {
      totalAmount: "₹28,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹28,500",
    kycStatus: "Rejected",
    facilitator: {
      b2bFieldExecutiveName: "Natasha Romanova",
      associateName: "",
    },
    zone: "West",
    accountType: { type: "Earner" },
    tpa: "8765432109@trucard",
  },
  {
    id: 17,
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
    zone: "South",
    accountType: { type: "Earner" },
    tpa: "8765432109@trucard",
  },
  {
    id: 18,
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
    zone: "North",
    accountType: { type: "Earner" },
    tpa: "8765432109@trucard",
  },
  {
    id: 19,
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
    zone: "East",
    accountType: { type: "Earner" },
    tpa: "8765432109@trucard",
  },
  {
    id: 20,
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
    accountType: { type: "Earner" },
    tpa: "8765432109@trucard",
  },
  // ! NEW NEW ENTRIES
  {
    id: 21,
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
    accountType: { type: "Business" },
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
    accountType: { type: "Earner" },
    tpa: "7654321098@trucard",
  },
  {
    id: 23,
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
    accountType: { type: "Earner" },
    tpa: "8765432109@trucard",
  },
  {
    id: 24,
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
    zone: "South",
    accountType: { type: "Business" },
    tpa: "7896542578@trucard",
  },
  {
    id: 25,
    consumerName: "Steve Rogers",
    assets: {
      totalAmount: "₹58,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹58,500",
    kycStatus: "In Progress",
    facilitator: {
      b2bFieldExecutiveName: "Becky Rogers",
      associateName: "Hydra",
    },
    zone: "East",
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "3698547861@trucard",
  },
  {
    id: 26,
    consumerName: "Bruce Banner",
    assets: {
      totalAmount: "₹28,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹28,500",
    kycStatus: "Rejected",
    facilitator: {
      b2bFieldExecutiveName: "Natasha Romanova",
      associateName: "",
    },
    zone: "West",
    accountType: {
      type: "Pay and Use",
      subtType: {
        major: "(Major)",
      },
    },
    tpa: "8765432109@trucard",
  },
  {
    id: 27,
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
    zone: "North",
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "8765432109@trucard",
  },
  {
    id: 28,
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
    zone: "South",
    accountType: {
      type: "Pay and Use",
      subtType: {
        major: "(Major)",
      },
    },
    tpa: "8765432109@trucard",
  },
  {
    id: 29,
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
    zone: "South",
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "8765432109@trucard",
  },
  {
    id: 30,
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
    zone: "East",
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "8765432109@trucard",
  },
  // ! NEW NEW NEW ENTRIES
  {
    id: 41,
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
    accountType: { type: "Business" },
    tpa: "9876543210@trucard",
  },
  {
    id: 42,
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
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "7654321098@trucard",
  },
  {
    id: 43,
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
    accountType: {
      type: "Pay and Use",
      subtType: {
        minor: "(Minor)",
      },
    },
    tpa: "8765432109@trucard",
  },
  {
    id: 44,
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
    zone: "North",
    accountType: { type: "Business" },
    tpa: "7896542578@trucard",
  },
  {
    id: 45,
    consumerName: "Steve Rogers",
    assets: {
      totalAmount: "₹58,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹58,500",
    kycStatus: "In Progress",
    facilitator: {
      b2bFieldExecutiveName: "Becky Rogers",
      associateName: "Hydra",
    },
    zone: "East",
    accountType: { type: "Salary" },
    tpa: "3698547861@trucard",
  },
  {
    id: 46,
    consumerName: "Bruce Banner",
    assets: {
      totalAmount: "₹28,500",
      gold: "40.2g",
      silver: "25.5g",
      price: "₹150.2",
    },
    revenue: "₹28,500",
    kycStatus: "Rejected",
    facilitator: {
      b2bFieldExecutiveName: "Natasha Romanova",
      associateName: "",
    },
    zone: "East",
    accountType: { type: "Salary" },
    tpa: "8765432109@trucard",
  },
  {
    id: 47,
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
    zone: "North",
    accountType: { type: "Salary" },
    tpa: "8765432109@trucard",
  },
  {
    id: 48,
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
    accountType: { type: "Salary" },
    tpa: "8765432109@trucard",
  },
  {
    id: 49,
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
    zone: "East",
    accountType: { type: "Salary" },
    tpa: "8765432109@trucard",
  },
  {
    id: 50,
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
    zone: "South",
    accountType: { type: "Salary" },
    tpa: "8765432109@trucard",
  },
];
