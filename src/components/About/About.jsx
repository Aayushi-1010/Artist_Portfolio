import React from 'react'

function About() {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-900">About Me</h1>
        <p className="text-lg text-pink-800 mt-2">Discover my artistic journey and philosophy.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Biography</h2>
        <p className="text-gray-700">
          I am an artist based in [Your Location], specializing in [Your Medium/Style]. My journey began at a young age when I discovered my passion for [describe initial inspiration]. Over the years, I have developed my skills through [mention education, workshops, etc.].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Artistic Philosophy</h2>
        <p className="text-gray-700">
          My work is driven by [describe themes or concepts]. I believe that art should [explain what art means to you]. Each piece I create reflects my [emotions/thoughts/experiences].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Process and Techniques</h2>
        <p className="text-gray-700">
          I primarily work with [list materials/techniques]. My creative process involves [describe how you create your art]. Here’s a glimpse of me in action:
        </p>
        {/* Add an image or video of your process */}
        <img src="/path-to-your-image.jpg" alt="Artist at work" className="mt-4 rounded shadow-lg" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
          “This artist's work has profoundly impacted me.” – Collector Name
        </blockquote>
      </section>

      <footer className="text-center mt-8">
        <p>Interested in my work? Explore my portfolio or contact me for inquiries!</p>
        {/* Links to portfolio and contact */}
        <a href="/portfolio" className="text-blue-500 hover:underline">View Portfolio</a> | 
        <a href="/contact" className="text-blue-500 hover:underline"> Contact Me</a>
      </footer>
    </div>
  )
}

export default About
