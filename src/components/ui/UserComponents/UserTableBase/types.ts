export interface ITableBaseProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  rowHight?: string;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyMessage?: string;
}
