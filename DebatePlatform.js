import React, { useState } from 'react';

const DebatePlatform = () => {
  const [topics, setTopics] = useState([
    {
      title: "Should traditional homework be replaced with project-based learning?",
      category: "Education",
      participants: 10,
      sources: [{ title: "Education Week", url: "https://www.edweek.org" }],
      votes: 15,
      responses: [
        { user: "Alice", comment: "Project-based learning fosters critical thinking." },
        { user: "Bob", comment: "Homework builds discipline." }
      ]
    },
    // Add more topics as needed
  ]);

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="debate-platform">
      <header>
        <h1>SkysTheLimit Debates</h1>
        <input
          type="text"
          placeholder="Search topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </header>
      <section className="topics">
        <h2>Debates</h2>
        <div className="topic-categories">
          <button>Education</button>
          <button>Politics</button>
          <button>School Life</button>
          <button>Culture</button>
          <button>Technology</button>
        </div>
        <div className="featured-debate">
          <h3>Featured Debate</h3>
          {selectedTopic && (
            <div className="debate-card">
              <h4>{selectedTopic.title}</h4>
              <p>Participants: {selectedTopic.participants}</p>
              <p>Votes: {selectedTopic.votes}</p>
              <ul>
                {selectedTopic.sources.map((source, index) => (
                  <li key={index}><a href={source.url}>{source.title}</a></li>
                ))}
              </ul>
              <div className="responses">
                {selectedTopic.responses.map((response, index) => (
                  <div key={index} className="response">
                    <strong>{response.user}:</strong> {response.comment}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="active-debates">
          <h3>Active Debates</h3>
          <div className="debate-grid">
            {topics.map((topic, index) => (
              <div key={index} className="debate-card">
                <h4>{topic.title}</h4>
                <p>Category: {topic.category}</p>
                <button onClick={() => setSelectedTopic(topic)}>View</button>
                <button>Share</button>
                <button>Flag</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <p>Remember to support your arguments with credible sources and respect others' opinions.</p>
      </footer>
    </div>
  );
};

export default DebatePlatform;
