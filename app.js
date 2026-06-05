function generate(){
  let topic = document.getElementById("topic").value;
  let keyword = document.getElementById("keyword").value;
  let output = document.getElementById("output");

  output.innerHTML = `
    <h3>SEO Title</h3>
    <p>${topic} - Complete Guide 2026</p>

    <h3>Meta Description</h3>
    <p>Learn everything about ${topic} using keyword ${keyword}.</p>

    <h3>Keywords</h3>
    <p>${keyword}, SEO, blog, ranking, AI writing</p>

    <h3>Outline</h3>
    <ul>
      <li>Introduction</li>
      <li>What is ${topic}</li>
      <li>Benefits</li>
      <li>How to use it</li>
      <li>Conclusion</li>
    </ul>

    <h3>SEO Score</h3>
    <p>85/100 🔥</p>
  `;
}
