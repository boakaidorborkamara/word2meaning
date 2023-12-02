let word_section = document.getElementById("word-section");
let noun_section = document.getElementById("noun-section");
let verb_section = document.getElementById("verb-section");

export const displayDefinition = () => {
  console.log("word section", word_section);
  word_section.classList.remove("d-none");
  noun_section.classList.remove("d-none");
  verb_section.classList.remove("d-none");
};
