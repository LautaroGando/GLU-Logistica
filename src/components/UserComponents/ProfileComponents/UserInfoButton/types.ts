export interface IUserInfoButtonProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isSubmitting?: boolean;
  isValid?: boolean;
  submitForm?: () => void;
}
