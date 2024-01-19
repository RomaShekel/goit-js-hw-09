
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");



if(localStorage.getItem(STORAGE_KEY) !== null){
try {

    const initialFormValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
        
     Array.from(form.elements).forEach(element => {
        const storageValue = initialFormValue[element.name];

        if (storageValue) {
            element.value = storageValue;
        };        
    })
} catch {
    console.log("LOCAL STORAGE IS EMPTY OR PARSE ERROR");
};
}

let formObject = {};
form.addEventListener("input", () => {
    const formValue = new FormData(form);

    formValue.forEach((value, key) => {
        formObject[key] = value;
    }) 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formObject.trim()));
});


form.addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

