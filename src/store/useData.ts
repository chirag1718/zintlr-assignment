import { ConsumerData, mockData } from "@/app/manageCustomers/data/data";
import { create } from "zustand";
type DataType = {
  data: ConsumerData[];
  selectedStatus: string[];
  selectedZone: string[];
  selectedAccountType: string[];
  updateSelectedStatus: (status: string) => void;
  updateSelectedZone: (zone: string) => void;
  updateSelectedAccountType: (acc: string) => void;
  setData: (newData: ConsumerData[]) => void;
  filteredData: (searchQuery: string) => void;
};
const useData = create<DataType>((set) => ({
  data: mockData,
  selectedStatus: [],
  selectedZone: [],
  selectedAccountType: [],
  setData: (newData) => {
    set((state) => ({
      ...state,
      data: newData,
    }));
  },
  filteredData: (searchQuery) => {
    if (!searchQuery) {
      set((state) => ({
        ...state,
        data: mockData,
      }));
    } else
      set((state) => ({
        ...state,
        data: state.data.filter(
          (el) =>
            el.consumerName.toLowerCase().includes(searchQuery) || // filtering on the basis of consumer name
            el.facilitator.b2bFieldExecutiveName
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) || // filtering on the basis of b2b executive name
            el.facilitator.associateName
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) || // filtering on the basis of associate name
            el.zone.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }));
  },
  updateSelectedStatus: (status) => {
    // if status is not in selectedStatus then push it otherwise remove it
    set((state) => {
      if (!state.selectedStatus.includes(status)) {
        const newStatus = [...state.selectedStatus, status];
        return {
          ...state,
          data: state.data.filter((el) => {
            if (newStatus.length === 0) {
              return true;
            }
            return newStatus.includes(el.kycStatus);
          }),
          selectedStatus: newStatus,
        };
      } else {
        const newStatus = state.selectedStatus.filter((el) => el != status);

        return {
          ...state,
          selectedStatus: newStatus,
          data: !state.selectedStatus
            ? state.data
            : state.data.filter((el) => {
                if (newStatus.length === 0) {
                  return true;
                }
                return newStatus.includes(el.kycStatus);
              }),
          // data:
        };
      }
    });
  },
  updateSelectedZone: (zone) => {
    // if status is not in selectedStatus then push it otherwise remove it
    set((state) => {
      if (!state.selectedZone.includes(zone)) {
        const newZone = [...state.selectedZone, zone];
        return {
          ...state,
          data: state.data.filter((el) => {
            if (newZone.length === 0) {
              return true;
            }
            return newZone.includes(el.zone);
          }),
          selectedZone: newZone,
        };
      } else {
        const newZone = state.selectedZone.filter((el) => el != zone);

        return {
          ...state,
          selectedZone: newZone,
          data: !state.selectedZone
            ? state.data
            : state.data.filter((el) => {
                if (newZone.length === 0) {
                  return true;
                }
                return newZone.includes(el.zone);
              }),
          // data:
        };
      }
    });
  },
  updateSelectedAccountType: (accountType) => {
    // if status is not in selectedStatus then push it otherwise remove it
    set((state) => {
      if (!state.selectedAccountType.includes(accountType)) {
        const newAcc = [...state.selectedAccountType, accountType];
        return {
          ...state,
          data: state.data.filter((el) => {
            if (newAcc.length === 0) {
              return true;
            }
            return newAcc.includes(el.accountType.type);
          }),
          selectedAccountType: newAcc,
        };
      } else {
        const newAcc = state.selectedAccountType.filter(
          (el) => el != accountType
        );

        return {
          ...state,
          selectedAccountType: newAcc,
          data: !state.selectedAccountType
            ? state.data
            : state.data.filter((el) => {
                if (newAcc.length === 0) {
                  return true;
                }
                return newAcc.includes(el.accountType.type);
              }),
          // data:
        };
      }
    });
  },
}));

export { useData };
