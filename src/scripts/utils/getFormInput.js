import { dom_elements } from "../DOM-Elements/dom-element";

// accepts a form DOM node and  extracts user input
export const getFormInput = () => {
  let user_input = null;

  dom_elements.search_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let form_input_field = dom_elements.search_form[0];
    user_input = dom_elements.search_form[0].value;
    console.log(user_input);
    return user_input;
  });
};
