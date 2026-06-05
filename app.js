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
<p>87/100 🚀</p>

<h3>Article</h3>

<p>
${topic} is becoming one of the most important subjects in today's digital world.
Many businesses and content creators use ${keyword} strategies to improve visibility,
increase traffic, and reach a larger audience.

Understanding the fundamentals of ${topic} can help beginners and professionals
achieve better results. By following best practices and avoiding common mistakes,
it becomes easier to build long-term success.

One of the biggest advantages of ${topic} is its flexibility and scalability.
Whether you are a blogger, marketer, or entrepreneur, applying these techniques
can significantly improve performance.

In conclusion, learning and implementing ${topic} effectively can provide a strong
competitive advantage in 2026 and beyond.
</p>
  
