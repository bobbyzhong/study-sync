export default class ChatGPT {
    url: string;
    model: string;
    temperature: number;
    max_tokens: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    apiKey: string;
    constructor() {
        this.url = "https://api.openai.com/v1";
        this.model = "gpt-3.5-turbo";
        this.temperature = 0.9;
        this.max_tokens = 2048;
        this.top_p = 0;
        this.frequency_penalty = 0;
        this.presence_penalty = 0;
        this.apiKey = "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"!;
    }

    async getCompletion(prompt: string) {
        const path = `${this.url}/chat/completions`;
        const response = await fetch(`${path}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.apiKey}`,
            },
            body: JSON.stringify({
                model: this.model,
                messages: [
                    {
                        role: "system",
                        content: `Your task is to take the body of text I give you and give me a 5 question multiple choice quiz based on that content. Structure your response as json with three arrays: array with the questions, array with all answer choices, array with correct answers. Give each question 3 answer choices and one correct answer. 
                         `,
                    },
                    { role: "user", content: prompt },
                ],
                temperature: this.temperature,
                max_tokens: this.max_tokens,
                top_p: this.top_p,
                frequency_penalty: this.frequency_penalty,
                presence_penalty: this.presence_penalty,
            }),
        });
        try {
            const data = await response.json();
            console.log(data);
            console.log(prompt);
            return data.choices[0].message.content;
        } catch (error) {
            return `${error}`;
        }
    }
}
