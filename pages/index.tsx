import { useState, useEffect } from "react";
import LargeInputBox from "./components/Inputs";
import Clickable from "@/components/Clickable";

// import ChatGPT from "./lib/chatgpt";
function App() {
    const [response, setResponse] = useState<any>("");
    const [currQuest, setCurrQuest] = useState(0);
    const [questions, setQuestions] = useState<any>([]);
    const [choices, setChoices] = useState<any>([]);
    const [content, setContent] = useState("");
    const [firstChoices, setFirstChoices] = useState<any>([]);
    const [secChoices, setSecChoices] = useState<any>([]);
    const [thirdChoices, setThirdChoices] = useState<any>([]);
    const [answers, setAnswers] = useState<any>([]);
    const [quizReq, setQuizReq] = useState<any>(false);

    async function getSummary() {
        // const response = await new ChatGPT().getCompletion(content);

        const response =
            "Where do penguins generally live? [A. Islands and remote continental regions, B. Forests and jungles, C. Deserts] / What are penguins adapted to? [A. Living on land, B. Living in the sea, C. Flying] / In what type of climate do emperor penguins thrive? [A. Tropical, B. Arctic, C. Antarctic] / ABC";

        console.log(response);
        let sections = response.split("/");
        let q1 = sections[0].split("?")[0];
        let q2 = sections[1].split("?")[0];
        let q3 = sections[2].split("?")[0];
        let questions = [q1, q2, q3];
        let choices = sections[1]
            .split("],")
            .map((item: string) =>
                item.trim().replace("(", "").replace(")", "")
            );
        let choices1 = sections[0]
            .split("?")[1]
            .trim()
            .slice(1, sections[0].split("?")[1].length - 3)
            .split(",");

        let choices2 = sections[1]
            .split("?")[1]
            .trim()
            .slice(1, sections[1].split("?")[1].length - 3)
            .split(",");
        let choices3 = sections[2]
            .split("?")[1]
            .trim()
            .slice(1, sections[2].split("?")[1].length - 3)
            .split(",");
        let answers = sections[3].trim();
        setResponse(response);
        setQuestions(questions);
        setFirstChoices(choices1);
        setSecChoices(choices2);
        setThirdChoices(choices3);
        // setSecChoices(finalChoices[1]);
        // setThirdChoices(finalChoices[2]);
        setAnswers(answers);
        setQuizReq(true);
    }
    console.log(answers);

    const forward = () => {
        setCurrQuest(currQuest + 1);
    };

    const backward = () => {
        setCurrQuest(currQuest - 1);
    };
    // const summaryList = summary.split("•");

    return (
        <div className="App p-6 h-72">
            <div className="mb-2 font-bold ">StudySync</div>
            <hr className="border-b-3 py-2"></hr>

            <div className="px-20">
                <div className="font-medium">
                    Having some issues with nextjs deployment so results are
                    based on the following content:
                </div>
                <div>
                    Penguins generally live on islands and remote continental
                    regions free from land predators, where their inability to
                    fly is not detrimental to their survival. These highly
                    specialized marine birds are adapted to living at sea — some
                    species spend months at a time at sea. Penguins are usually
                    found near nutrient-rich, cold-water currents that provide
                    an abundant supply of food. Different species thrive in
                    varying climates, ranging from Galápagos penguins on
                    tropical islands at the equator to emperor penguins
                    restricted to the pack ice and waters of Antarctica.
                </div>
                <div className=" ">
                    <LargeInputBox
                        label="Create an AI generated quiz!"
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
                        Generate Quiz
                    </button>
                </div>

                <div className="summarySection">
                    {quizReq ? (
                        <div className="border px-16 py-10 rounded-lg">
                            {currQuest == 0 ? (
                                <div className=" ">
                                    <h1 className="text-xl mb-3">
                                        1. {questions[0]}?
                                    </h1>

                                    {firstChoices.map((choice: any) =>
                                        choice.length != 0 ? (
                                            <>
                                                <Clickable
                                                    letter={choice.trim()[0]}
                                                    text={choice
                                                        .trim()
                                                        .slice(2)}
                                                    correct={answers[0]}
                                                />
                                                <div></div>
                                            </>
                                        ) : (
                                            ""
                                        )
                                    )}
                                    <div className="flex flex-row space-x-10 ml-2">
                                        <button onClick={backward}>Back</button>

                                        <button onClick={forward}>Next</button>
                                    </div>
                                </div>
                            ) : currQuest == 1 ? (
                                <div>
                                    <h1>2. {questions[1]}?</h1>

                                    {secChoices.map((choice: any) =>
                                        choice.length != 0 ? (
                                            <div className="flex flex-col">
                                                <Clickable
                                                    letter={choice.trim()[0]}
                                                    text={choice
                                                        .trim()
                                                        .slice(2)}
                                                    correct={answers[1]}
                                                />
                                            </div>
                                        ) : (
                                            ""
                                        )
                                    )}
                                    <div className="flex flex-row space-x-10 ml-2">
                                        <button onClick={backward}>Back</button>

                                        <button onClick={forward}>Next</button>
                                    </div>
                                </div>
                            ) : currQuest == 2 ? (
                                <div>
                                    <div>3. {questions[2]}?</div>
                                    <div>
                                        {thirdChoices.map((choice: any) =>
                                            choice.length != 0 ? (
                                                <div className="flex flex-col">
                                                    <Clickable
                                                        letter={
                                                            choice.trim()[0]
                                                        }
                                                        text={choice
                                                            .trim()
                                                            .slice(2)}
                                                        correct={answers[2]}
                                                    />
                                                </div>
                                            ) : (
                                                ""
                                            )
                                        )}
                                        <div className="flex flex-row space-x-10 ml-2">
                                            <button onClick={backward}>
                                                Back
                                            </button>

                                            <button onClick={forward}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>Great work!</div>
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
