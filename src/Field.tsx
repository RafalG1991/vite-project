import {FieldErrors} from "./FieldErrors.tsx";
import {FormChangeEvent} from "./types/index.ts";

type FieldProps = {
  name: string;
  errors: string[];
  value: string;
  label: string;
  type: "text" | "password";
  onChange: (e: FormChangeEvent) => void;
}

export const Field = ({name, errors, value, label, type, onChange}: FieldProps) => {
  return <div>
    <label htmlFor={name}>{label}: </label>
    <input type={type} id={name} name={name} value={value} onChange={onChange}/>
    <FieldErrors errors={errors}/>
  </div>
}