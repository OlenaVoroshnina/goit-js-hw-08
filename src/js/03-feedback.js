const contactFormEl = document.querySelector('.feedback-form');
const userInfo = {};

const fillContactFormFields = () => {
    try {
        const userInfoFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));
        
        if (userInfoFromLS === null) {
            return;
        };

        console.log(userInfoFromLS);

        for (const prop in userInfoFromLS) {
            contactFormEl.elements[prop].value = userInfoFromLS[prop];
        }

    } catch (error) {
        console.log(error);
    };

};

fillContactFormFields();

const onContactFormInput = event => {
    const { target } = event;

    const fieldValue = target.value;
    const fieldName = target.name;

    userInfo[fieldName] = fieldValue;

    localStorage.setItem("feedback-form-state", JSON.stringify(userInfo));

};

const onContactFormSubmit = event => {
    event.preventDefault();

    contactFormEl.reset();
    localStorage.removeItem("feedback-form-state");
};

contactFormEl.addEventListener('input', onContactFormInput);
contactFormEl.addEventListener('submit', onContactFormSubmit);


