export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { message } = req.body;
  const apiKey = "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; 

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: message }],
      max_tokens: 150,
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
