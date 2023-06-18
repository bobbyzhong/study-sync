import { useState, useEffect } from "react";
import { LargeInputBox } from "../components/Inputs";
import Clickable from "@/components/Clickable";

import ChatGPT from "../lib/chatgptsum";
function App() {
    const [response, setResponse] = useState<any>("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");

    async function getSummary() {
        const response = await new ChatGPT().getCompletion(content);

        // const response =
        //     "Penguins live in areas free from land predators and near nutrient-rich, cold-water currents. They are adapted to living at sea and some species spend months at a time there. Different species thrive in varying climates, ranging from tropical islands to the pack ice and waters of Antarctica. / The seasons of the Southern Hemisphere are opposite those of the Northern Hemisphere. / The most southerly penguin colony in the world are a group of Adélies that regularly nest near Camp Royds, Antarctica.";

        setSummary(response);
        console.log(response);
    }

    const summaryList = summary.split("/");

    return (
        <div className="App p-6 h-72">
            <div className="mb-2 font-bold ">StudySync</div>
            <hr className="border-b-3 py-2"></hr>
            <div className="px-20">
                <div className=" ">
                    <LargeInputBox
                        label="Summarize content with AI!"
                        name="content"
                        placeholder="Type or Paste (Ctrl + V) Your Text Here"
                        type="textarea"
                        value={content}
                        statusCompleted={content ? true : false}
                        handleChange={(e: any) => setContent(e.target.value)}
                    />

                    <button
                        className="btn text-sm w-full mt-3  mb-8 rounded-lg bg-neutral-800 p-2 text-neutral-50"
                        onClick={getSummary}
                    >
                        Generate Summary
                    </button>
                </div>

                <div className="summarySection">
                    {summaryList.map((summary) =>
                        summary.length != 0 ? <li>{summary}</li> : ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
