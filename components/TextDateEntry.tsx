const TextDateEntry = ({
  text,
  type,
  onChange,
  value,
}: {
  text: string;
  type: string;
  onChange: (e: any) => void;
  value: string;
}) => {
  return (
    <div className="w-full">
      <label className="text-lg">{text}</label>
      <input
        className="p-2 w-full bg-gray-100 rounded"
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextDateEntry;
