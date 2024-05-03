interface Props {
  label: string;
  type: string;
}

const PreAuthInput = ({ label, type }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="Email-id" className="text-base">
        {label}
      </label>
      <input type={type} className="h-8" />
    </div>
  );
};

export default PreAuthInput;
