import { InputTypes } from "@/types/types";

export default function LargeInputBox({
    label,
    placeholder = "",
    className,
    type,
    name,
    value,
    handleChange,
    statusCompleted,
}: any) {
    return (
        <div className=" flex flex-col ">
            <label className="">
                <span className="font-[250] text-sm ">{label}</span>
            </label>
            <textarea
                className={`mt-3
               border py-2 px-4 rounded-xl shadow-md  }
                ${statusCompleted ? "" : ""}  `}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                required={true}
                rows={12}
                value={value}
            />
        </div>
    );
}
