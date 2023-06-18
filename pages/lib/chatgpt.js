// export default class ChatGPT {
//     url;
//     model;
//     temperature;
//     max_tokens;
//     top_p;
//     frequency_penalty;
//     presence_penalty;

//     constructor() {
//         this.url = "https://api.openai.com/v1";
//         this.model = "gpt-3.5-turbo";
//         this.temperature = 0;
//         this.max_tokens = 3000;
//         this.top_p = 0;
//         this.frequency_penalty = 0;
//         this.presence_penalty = 0;
//     }

//     async getCompletion(prompt) {
//         const path = `${this.url}/chat/completions`;
//         const response = await fetch(`${path}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
//             },
//             body: JSON.stringify({
//                 model: this.model,
//                 messages: [
//                     {
//                         role: "system",
//                         content: `Your task is to take the body of text generate a one line string that's a 3 question multiple choice quiz based on that content.
//                         Output the string in this exact format: "(question 1) (question 2) (question 3) / [A. choice1, B. choice2, C. choice3], [A. choice1, B. choice2, C. choice3], [A. choice1, B. choice2, C. choice3] / ABA". Everything in parenthesis is dynamic and should be determined based
//                         on the content given but everything outside the parenthesis should be in the same exact format. All the brackets, commas, slashes in that example format should exactly the same. Group each question's answer choices together by brackets.
//                          `,
//                     },
//                     { role: "user", content: prompt },
//                 ],
//                 temperature: this.temperature,
//                 max_tokens: this.max_tokens,
//                 top_p: this.top_p,
//                 frequency_penalty: this.frequency_penalty,
//                 presence_penalty: this.presence_penalty,
//             }),
//         });
//         try {
//             const data = await response.json();
//             console.log(data);
//             console.log(prompt);
//             return data.choices[0].message.content;
//         } catch (error) {
//             return `${error}`;
//         }
//     }
// }
export default function Test() {
    return <div>hi</div>;
}
