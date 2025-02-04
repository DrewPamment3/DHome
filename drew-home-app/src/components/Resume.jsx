import React, { useState, useEffect } from "react";

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/resume.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load resume data");
        }
        return response.json();
      })
      .then((data) => {
        if (data.resume) {
          setResumeData(data.resume);
        } else {
          throw new Error("Invalid resume data format");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white text-center">Loading resume...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto text-white bg-gray-900 shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold">{resumeData.name}</h1>
        <p className="text-lg text-gray-400">{resumeData.title}</p>
        <p className="mt-2 text-gray-300">{resumeData.summary}</p>
      </header>

      {/* Contact Info */}
      <section className="mt-6 text-center">
        <p>📧 <a href={`mailto:${resumeData.contact.email}`} className="text-blue-400 hover:underline">{resumeData.contact.email}</a></p>
        <p>📞 {resumeData.contact.phone}</p>
        <p>🔗 <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a></p>
        <p>💻 <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a></p>
      </section>

      {/* Education */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mt-4">
            <p className="text-lg font-medium">{edu.degree}</p>
            <p className="text-gray-400">{edu.institution} - {edu.location} ({edu.year})</p>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mt-4">
            <p className="text-lg font-medium">{exp.title} - {exp.company}</p>
            <p className="text-gray-400">{exp.location} ({exp.start_date} - {exp.end_date})</p>
            <ul className="list-disc ml-5 text-gray-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
        <p className="mt-2 text-gray-300">
          <strong>Technical:</strong> {resumeData.skills.technical.join(", ")}
        </p>
        <p className="mt-2 text-gray-300">
          <strong>Soft Skills:</strong> {resumeData.skills.soft.join(", ")}
        </p>
      </section>

      {/* Projects */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mt-4">
            <p className="text-lg font-medium">{project.name}</p>
            <p className="text-gray-400">{project.description}</p>
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repo</a>
            )}
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Certifications</h2>
        {resumeData.certifications.map((cert, index) => (
          <div key={index} className="mt-4">
            <p className="text-lg font-medium">{cert.name}</p>
            <p className="text-gray-400">{cert.issued_by} ({cert.year})</p>
          </div>
        ))}
      </section>

      {/* Languages */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b pb-2">Languages</h2>
        {resumeData.languages.map((lang, index) => (
          <p key={index} className="text-gray-300">
            {lang.language} - {lang.proficiency}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Resume;
