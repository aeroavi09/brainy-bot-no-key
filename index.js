localStorage.clear();

function nextPage(){
    grade = document.getElementById('gradeInput').value;
    if (grade === "")
        {
            alert("grade cannot be empty. Try again.")
        }else{
            window.open("page2.html", "_blank");
            console.log("the grade level of user is "+grade);
            localStorage.setItem('grade', grade);
        }

}