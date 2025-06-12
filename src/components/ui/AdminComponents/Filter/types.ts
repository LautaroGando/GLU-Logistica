import { IFilter } from "@/interfaces/IFilter";

export interface IFilterProps {
  filter: IFilter[];
  onChange: (value: string) => void;
}
