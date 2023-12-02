import { dom_elements } from "./DOM-Elements/dom-element";
import { getFormInput } from "./utils/getFormInput";
import { getDefinition } from "./utils/getDefinition";

dom_elements.search_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let input_field = dom_elements.search_form[0];
  let form_input_text = getFormInput(input_field);
  let definition = await getDefinition(form_input_text);
  console.log("Definition", definition);
});
