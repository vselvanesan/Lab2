/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function () {
    "use strict"

    // About Button Click event handler
    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";
        
        let paragraph = document.getElementById("paragraph");
        let mySentence = "This is my future about paragaraph .....wait and see .....Don’t surprise..!";
        paragraph.textContent = mySentence;

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function ReturnPI() {
        return Math.PI;
    }
// <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    function AboutContent() {
        let myNumber = ReturnPI();
        console.log("My Funky Number: " + myNumber);

        let paragraph = document.getElementById("paragraph");

        let mySentence = "This is my future home paragaraph .... wait and see...Don’t surprise..!";

        paragraph.textContent = mySentence;
    }

    function Start() {
        // local variable
        let title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);

        switch (title) {
            case "COMP125 - Home":
                HomeContent();
                break;

            case "COMP125 - About":
                AboutContent();
                break;

            default:
                break;
        }
    }

    //window.onload = Start;

    window.addEventListener("load", Start);
})();