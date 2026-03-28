interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "tel" | "email" | "password" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: Option[];
  rows?: number;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  className?: string;
}

const inputClasses =
  "w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all";

export default function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  options,
  rows = 3,
  value,
  onChange,
  className = "",
}: FormFieldProps) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-slate-700 mb-1.5 block">
        {label}
        {required && " *"}
      </label>
      {type === "select" ? (
        <select
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${inputClasses} bg-white`}
        >
          <option value="">{placeholder || "Chọn..."}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />
      )}
    </div>
  );
}
