async function sendToOpenAI() {
    const userInput = document.getElementById('userInput').value;
    
    try {

      //got the endpoint from https://platform.openai.com/docs/models/how-we-use-your-data
      //https://platform.openai.com/docs/api-reference/chat/create
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' // Replace with your OpenAI API key
        },
        body: JSON.stringify({
          temperature: 0.7,
          max_tokens: 100,
          model: "gpt-4",
          messages: [{"role": "user", "content":  userInput}]
        })
      });
  
      if (!response.ok) {
        console.log(response.error)
        throw new Error('Failed to fetch response from OpenAI API');
      }
  
      const responseData = await response.json();
      const generatedText = responseData.choices[0].message.content;
  
      document.getElementById('output').innerText = generatedText;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('output').innerText = 'Error generating text. Please try again later.';
    }
  }

  
