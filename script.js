// You can add optional JavaScript here to handle clicks or other interactions with the items.
// For example, you could use event listeners to trigger actions when an item is clicked.

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('click', () => {
    // Add your click handling logic here
    console.log(item.textContent);
  });
});



