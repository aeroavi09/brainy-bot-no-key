async function question() {
  document.getElementById('question').innerText = 'loading..';
  document.getElementById('check').innerHTML = '';
  if(document.querySelector('#answerArea')){
  document.getElementById('answerArea').remove();
  document.getElementById('enterButton').remove();
  }
    const newTextArea = document.createElement("textarea");
    newTextArea.id = "answerArea";
    newTextArea.rows = "7";
    newTextArea.cols = "50";
    const newButton = document.createElement("button");
    newButton.id = "enterButton";
    newButton.className = "btn btn-secondary";
    newButton.textContent = "Check Answer"; // Optionally set the button text
    newButton.onclick = checkAnswer; // Assign the function directly
    grade = localStorage.getItem('grade');//grade
    type = localStorage.getItem('type');//type
    topic = localStorage.getItem('topic');//topic
    subject = localStorage.getItem('subject');//subject
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
          messages: [{"role": "user", "content":  "give me a question for a "+grade+"grader  on the subject of " + subject+" on the topic of " +topic+ " in a "+ type +" type"}]
        })
      });
  
      if (!response.ok) {
        console.log(response.error)
        throw new Error('Failed to fetch response from OpenAI API');
      }
  
      const responseData = await response.json();
      const generatedText = responseData.choices[0].message.content;
  
      document.getElementById('question').innerText = generatedText;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('question').innerText = 'Error generating text. Please try again later.';
    }
    document.getElementById('questionDiv').appendChild(newTextArea);
    document.getElementById('questionDiv').appendChild(document.createElement("br"));
    document.getElementById('questionDiv').appendChild(newButton);
  }

  async function checkAnswer() {

  answerVar = document.getElementById('answerArea').value;
  questionVar = document.getElementById('question').innerHTML;
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
          messages: [{"role": "user", "content":  "how accurate is the answer, '"+ answerVar+"' to the question, '"+ questionVar+"' in a short consise paragraph?"}]
        })
      });
  
      if (!response.ok) {
        console.log(response.error)
        throw new Error('Failed to fetch response from OpenAI API');
      }
  
      const responseData = await response.json();
      const generatedText = responseData.choices[0].message.content;
  
      document.getElementById('check').innerText = generatedText;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('check').innerText = 'Error generating text. Please try again later.';
    }
  }

  