import {FieldErrors} from "./FieldErrors.tsx";
import {FormChangeEvent} from "./types/index.ts";

type CheckProps = {
  name: string;
  errors: string[];
  checked: boolean;
  label: string;
  onChange: (e: FormChangeEvent) => void;
}

export const Checkbox = ({name, errors, checked, label, onChange}: CheckProps) => {
  return <div>
    <label htmlFor={name}>{label}: </label>
    <input type="checkbox" id={name} name={name} checked={checked} onChange={onChange}/>
    <FieldErrors errors={errors}/>
  </div>
}