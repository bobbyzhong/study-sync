import { useState } from "react";

export default function Clickable({
    letter,
    text,
    correct,
}: {
    letter: string;
    text: string;
    correct: string;
}) {
    let hoverColor = letter == correct ? "bg-green-300" : "bg-red-300";

    let [selected, setSelected] = useState<any>(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <button className="w-1/2 py-1" onClick={handleClick}>
            <div
                className={`${
                    selected ? hoverColor : ""
                } py-2 pl-2 flex items-center  rounded-lg`}
            >
                <p className=" ">
                    <b>{letter}.</b> {text}
                </p>
            </div>
        </button>
    );
}
