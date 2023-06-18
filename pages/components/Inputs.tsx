import { InputTypes } from "@/types/types";

export function InputBox({
    label,
    placeholder = "",
    className,
    type,
    name,
    initialValue,
    handleChange,
    statusCompleted,
    value,
}: any) {
    return (
        <div className=" flex flex-col ">
            <label className="">
                <span className="font-[250] text-sm">{label}</span>
            </label>
            <input
                className={`
               border-b py-2 px-4 
                ${statusCompleted ? "" : ""}  `}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                required={true}
            />
        </div>
    );
}

export function StaticBox({
    label,
    placeholder = "",
    className,
    type,
    name,
    initialValue,

    statusCompleted,
    value,
}: any) {
    return (
        <div className=" flex flex-col ">
            <label className="">
                <span className="font-[250] text-sm">{label}</span>
            </label>
            <input
                className={`
               border-b py-2 px-4 
                ${statusCompleted ? "" : ""}  `}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                required={true}
                readOnly={true}
            />
        </div>
    );
}

export function LargeInputBox({
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

export function LargeStaticBox({
    label,
    placeholder = "",
    className,
    type,
    name,
    value,

    statusCompleted,
}: any) {
    return (
        <div className=" flex flex-col ">
            <label className="">
                <span className="font-[250] text-sm ">{label}</span>
            </label>
            <textarea
                className={`mt-3
               border py-2 px-4 rounded-xl shadow-md}
                ${statusCompleted ? "" : ""}  `}
                name={name}
                placeholder={placeholder}
                readOnly={true}
                required={true}
                rows={7}
                value={value}
            />
        </div>
    );
}
