class QAItem {

    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }

    toggleAnswer(answerElement, iconElement){
        answerElement.classList.toggle("show");

        if(answerElement.classList.contains("show")){
            iconElement.textContent = "-";
        } else {
            iconElement.textContent = "+";
        }
    }

    render(){

        const container = document.createElement("div");
        container.className = "qa-item";

        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        const questionText = document.createElement("span");
        questionText.textContent = this.question;

        const icon = document.createElement("span");
        icon.className = "icon";
        icon.textContent = "+";

        const answerDiv = document.createElement("div");
        answerDiv.className = "answer";
        answerDiv.textContent = this.answer;

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(icon);

        container.appendChild(questionDiv);
        container.appendChild(answerDiv);

        questionDiv.addEventListener("click", () => {
            this.toggleAnswer(answerDiv, icon);
        });

        return container;
    }
}



const qaData = [
    new QAItem(
        "What is JavaScript?",
        "JavaScript (JS) is a high-level, dynamic programming language that enables interactive features and dynamic content on web pages. It is one of the three core technologies of the World Wide Web, working alongside HTML (structure) and CSS (style) to create complete web experiences."
    ),

    new QAItem(
        "What is OOP?",
        "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which contain data (attributes) and code (methods). It structures software around real-world entities, making code more modular, reusable, and maintainable."
    ),

    new QAItem(
        "What is DOM?",
        "DOM stands for Document Object Model which represents HTML elements as objectsThe Document Object Model (DOM) is a programming interface for web documents, representing HTML or XML as a tree structure of objects. It allows languages like JavaScript to dynamically access, add, remove, or modify the structure, content, and style of a web page after it has loaded."
    )
];



const faqContainer = document.getElementById("faq-container");

qaData.forEach(item => {
    faqContainer.appendChild(item.render());
});