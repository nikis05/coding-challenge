### Question 2
How would you design an infinite scroll view, like feed on Facebook?

### My answer
For example, first 30 cards (or anything else) are rendered on the page, then using the intersection observer, something is implemented that when the user watches the last rendered cards, we fetch another 30 cards again and continue the same things on the page. We are adding it.