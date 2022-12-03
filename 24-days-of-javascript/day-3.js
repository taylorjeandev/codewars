/* Challenge 1: Favorite Foods

4. Set the innerHTML content of the meals <section> to a paragraph
that states what your favorite foods are for breakfast, lunch, and supper.
Use a template literal to construct the string.

E.g.
For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝, 
and for supper I want usually want pizza 🍕.
*/

const faveFoods = {
  breakfast: "croissants 🥐",
  lunch: "pasta 🍝",
  supper: "pizza 🍕",
};

const { breakfast, lunch, supper } = faveFoods;

const meals = document.getElementById("meals");

meals.innerHTML = `<p> For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper, I usually want ${supper}.</p>`;
