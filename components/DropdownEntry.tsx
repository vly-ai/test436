const DropdownEntry = ({
  text,
  onChange,
  value,
  options,
}: {
  text: string;
  onChange: (e: any) => void;
  value: string;
  options: Array<string>;
}) => {
  return (
    <div className="w-full">
      <label className="text-lg">{text}</label>
      <select
        className="p-2 w-full bg-gray-100 rounded"
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option} className="">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownEntry;
