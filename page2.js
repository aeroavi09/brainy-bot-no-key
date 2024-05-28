step = 1;

function next(){
    const newDiv = document.createElement("div");
    if (step == 1){//subject
        console.log("step 1 is complete");
        subject = document.getElementById('subjectInput').value;
        console.log("subject in need of help is "+subject);
        newDiv.innerHTML = `<div style="justify-content: center;align-items: center;align-content: center;text-align: center; margin: 40px;">
        <hr style="color: aliceblue;">
        <h2 style="color: white;">What type of questions for ${subject}?</h2>
        <hr style="color: aliceblue;">
        <h4 style="color: white;">Enter type:</h4>
        <input id="typeInput" placeholder="ex: Multiple Choice" style="margin-bottom: 40px;">
        <button type="button" class="btn btn-secondary" onclick="next()">Next</button>
      </div>`
        document.getElementById('holder').appendChild(newDiv);
        localStorage.setItem('subject', subject)
        step += 1;
        console.log("step 2 begins");
    }
    else if (step == 2){//type
        console.log("step 2 is complete");
        type = document.getElementById('typeInput').value;
        console.log("type of help is "+type);
        newDiv.innerHTML = `<div style="justify-content: center;align-items: center;align-content: center;text-align: center; margin: 40px;">
        <hr style="color: aliceblue;">
        <h2 style="color: white;">What topic do you need help with in ${subject}?</h2>
        <hr style="color: aliceblue;">
        <h4 style="color: white;">Enter type:</h4>
        <textarea id="topicInput" id="userInput" rows="2" cols="50" placeholder="ex: 1600s important events" style="margin-bottom: 40px;"></textarea>
        <button type="button" class="btn btn-secondary" onclick="next()">Next</button>
      </div>`
        document.getElementById('holder').appendChild(newDiv);
        localStorage.setItem('type', type)
        step += 1;
        console.log("step 3 begins");
    }
    else if (step == 3){//topic
        console.log("step 3 is complete");
        topic = document.getElementById('topicInput').value;
        console.log("topic of help is "+topic);
        localStorage.setItem('topic', topic)
        step += 1;
        console.log("study begins");
        window.open("study.html", "_blank");
    }
}