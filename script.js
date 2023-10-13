
const parent = document.querySelector(".bars-container");
const days = document.querySelectorAll(".bars-container > div");
const today = new Date();
const options = { weekday: 'long' };
const dayName = today.toLocaleDateString('en-US', options).toLowerCase();



fetch('./expenses-chart-component-main/data.json')

    .then(response => response.json())
    .then(data => {
        // Step 2: Map the data array and create a div for each item
        const divs = data.map((item, index) => {
            const div = document.createElement('div');
            const span = document.createElement("span");
            span.innerText = `$${item.amount}`
            div.style.height = item.amount * 2.86478227655 + "px";

            const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
            const dayOfWeek = daysOfWeek[index % 7]; // Get the corresponding day of the week

            div.classList.add(dayOfWeek);
            div.appendChild(span) // Add the class representing the day of the week
            return div;
        });

        // Step 3: Append the divs to the body
        divs.forEach(div => {
            parent.appendChild(div);
            
            if (div.classList.contains(dayName)) {
              console.log(div.classList.add("current-day"))
            }
          });
    })
    .catch(error => {
        console.error('Error:', error);
    });
   