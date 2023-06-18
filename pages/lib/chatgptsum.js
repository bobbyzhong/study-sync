// export default class ChatGPT {
//     url;
//     model;
//     temperature;
//     max_tokens;
//     top_p;
//     frequency_penalty;
//     presence_penalty;
//     // apiKey: string;
//     constructor() {
//         this.url = "https://api.openai.com/v1";
//         this.model = "gpt-3.5-turbo";
//         this.temperature = 0.9;
//         this.max_tokens = 3000;
//         this.top_p = 0;
//         this.frequency_penalty = 0;
//         this.presence_penalty = 0;
//         // this.apiKey = process.env.OPENAI_API_KEY ?? "";
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
//                         content: `Your task is to take the body of text I give you and generate a three bullet summary of the content. Separate each bullet by a '/' character`,
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
