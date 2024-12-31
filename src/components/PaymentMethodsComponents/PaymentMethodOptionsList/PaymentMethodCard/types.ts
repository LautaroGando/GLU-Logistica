import { IMethod } from "../../utils/payment-methods";

interface IPaymentMethodCardProps {
  method: IMethod;
  selectedMethod: string | null;
  onSelectMethod: (method: string, label: string) => void;
}

export default IPaymentMethodCardProps;
