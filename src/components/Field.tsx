// Labelled text input used on the auth forms.
export default function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="font-body text-sm font-medium leading-[1.2] text-gray-950">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="h-[52px] w-full rounded-[12px] border border-gray-100 bg-white px-6 font-body text-lg leading-[1.6] text-gray-950 placeholder:text-gray-400 focus:border-persian-blue focus:outline-none"
      />
    </label>
  );
}
