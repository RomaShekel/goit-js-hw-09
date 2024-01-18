

const STOREGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");



try {
    const initialFormValue = JSON.parse(localStorage.getItem(STOREGE_KEY));

    Array.from(form.elements).forEach(element => {
        const storageValue = initialFormValue[element.name];

        if (storageValue) {
            element.value = storageValue;
        };
        
    })

} catch {
    console.log("PARSE ERROR");
};



const formObject = {};

form.addEventListener("input", () => {

    const formValue = new FormData(form);

    
    formValue.forEach((value, key) => {
        formObject[key] = value;
    }) 

    localStorage.setItem(STOREGE_KEY, JSON.stringify(formObject));
});



form.addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();

    console.log(JSON.parse(localStorage.getItem(STOREGE_KEY)))
    localStorage.removeItem(STOREGE_KEY);
    form.reset();
});





