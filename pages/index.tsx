import { useState, useEffect } from "react";
import { LargeInputBox } from "./components/Inputs";

import ChatGPT from "./lib/chatgpt";
function App() {
    const [summary, setSummary] = useState<any>("");
    const [currQuest, setCurrQuest] = useState(0);
    const [questions, setQuestions] = useState<any>([]);
    const [content, setContent] = useState("");

    async function getSummary() {
        // const response = await new ChatGPT().getCompletion(content);
        const response = {
            questions: [
                "What is the primary habitat of penguins?",
                "What is the unique characteristic of penguin wings?",
                "What is the comical challenge that penguins face on land?",
                "What is the reason for penguins' popularity?",
                "What is the symbolic representation of penguins?",
            ],
            answer_choices: [
                ["A. Arctic region", "B. Antarctic region", "C. Tundra"],
                [
                    "A. They are colorful",
                    "B. They have evolved into flippers",
                    "C. They are featherless",
                ],
                [
                    "A. They can't swim",
                    "B. They can't fly",
                    "C. They can't waddle",
                ],
                [
                    "A. Their short legs",
                    "B. Their upright posture",
                    "C. Their resilience and determination",
                ],
                [
                    "A. Resilience and determination",
                    "B. Intelligence",
                    "C. Speed and agility",
                ],
            ],
            correct_answers: ["B", "B", "C", "C", "A"],
        };

        setQuestions(response.questions);
        console.log(response);
        // call getCompletion(prompt) from the text state and set the summary state to the result
    }

    // const summaryList = summary.split("•");

    return (
        <div className="App w-[30rem] p-6 h-72  ">
            <div className="mb-2 font-bold ">StudySync</div>
            <hr className="border-b-3 py-2"></hr>
            <div className="flex flex-col items-start gap-2 mb-5">
                <LargeInputBox
                    label="Enter content here"
                    name="content"
                    placeholder="Text to summarize"
                    type="textarea"
                    value={content}
                    statusCompleted={content ? true : false}
                    handleChange={(e: any) => setContent(e.target.value)}
                />

                <button
                    className="btn text-xs w-full  rounded-sm bg-neutral-800 p-2 text-neutral-50"
                    onClick={getSummary}
                >
                    Get Quiz
                </button>
            </div>

            <div className="summarySection">
                <h1 className="text-xl mb-3">Summary</h1>
                <ul>{questions[0]}</ul>
            </div>
        </div>
    );
}

export default App;
