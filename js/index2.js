const hour = new Date().getHours();
let greetings;

if (hour < 12) {
  greetings = "Good Morning!";
} else if (hour < 18) {
  greetings = "Good Afternoon!";
} else {
  greetings = "Good Evening!";
}

document.getElementById("greet").innerHTML = greetings;

// project form

document.getElementById("projectform").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  const pname = formData.get("pname");
  const pdesc = formData.get("pdesc");
  const pimg = formData.get("pimg");
  const purl = formData.get("purl");
  const purlr = formData.get("purlr");

// send to server
  fetch ("https://github.com/Maxbwoy/portfolio/", {
    method: "POST",
    body: formData,
  })
  .then((response) => {
    if (!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("success", data);
  


  const projectList = document.getElementById('project-list');
  const project = document.createElement('div');
  project.classList.add("project");

  const projectImage = document.createElement('img');
  projectImage.src = data.imageUrl || URL.createObjectURL(pimg);

  const projectName = document.createElement('h2');
  projectName.textContent = pname;

  const projectdescription = document.createElement('p');
  projectdescription.textContent = pdesc;


  const viewProject = document.createElement('a');
  viewProject.href = purl;
  viewProject.textContent = "View Project";
  viewProject.target = "_blank";
  viewProject.classList.add("project-a");

  const viewReport = document.createElement('a');
  viewReport.href = purlr;
  viewReport.target = "_blank";
  viewReport.textContent = "View Report";
  viewReport.classList.add("project-r");

  project.appendChild(projectImage);
  project.appendChild(projectname);
  project.appendChild(projectdescription);
  project.appendChild(viewProject);
  project.appendChild(viewReport);

  projectList.appendChild(project);
  })
  .catch((error) => {
    console.error("Error:", error);

    const errorDisplay = document.createElement("p");
      errorDisplay.textContent = `An error occurred: ${error.message}`;
      errorDisplay.style.color = "red";
      document.getElementById("projectform").appendChild(errorDisplay);
  });
});

/* document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get form values
  const name = document.getElementById("name").value;
  const color = document.getElementById("color").value;

  // Get the output container
  const outputDiv = document.getElementById("output");

  // Create a new element (e.g., a paragraph) with the form data
  const paragraph = document.createElement("p");
  paragraph.textContent = `Hello, ${name}! Your favorite color is ${color}.`;
  paragraph.style.color = color; // Set the text color dynamically

  // Append the new element to the output container
  outputDiv.appendChild(paragraph);

  // Optionally, clear the form
  event.target.reset();
});
*/
