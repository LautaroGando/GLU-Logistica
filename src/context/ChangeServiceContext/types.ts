export interface IChangeServiceContextProps {
  idServiceMotorcycle: number;
  idServiceFreight: number;
  handleServiceMotorcycle: (id: number) => void;
  handleServiceFreight: (id: number) => void;
}
