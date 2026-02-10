"use client";

import React from 'react';

import './page.css';

const TOOLS: { id: string; title: string; description: string }[] = [
  {
    id: 'job-tracker',
    title: 'JOB TRACKER',
    description:
      'Keep your applications, follow-ups, and offers in one organized timeline so you never miss a step.',
  },
  {
    id: 'company-scout',
    title: 'COMPANY SCOUT',
    description:
      'Research target companies, save notes, and spot patterns that help you find the best fit faster.',
  },
  {
    id: 'cv-ambush',
    title: 'CV AMBUSH',
    description:
      'Tailor each resume and cover letter to the role with reusable templates and quick tweaks.',
  },
];

export const ToolsSection: React.FC = () => {
  return (
    <section className="jh07-tools" aria-labelledby="jh07-tools-title">
      <div className="jh07-tools__inner">
        <h2 id="jh07-tools-title" className="jh07-tools__title">
          Tools
        </h2>
        <div className="jh07-tools__grid">
          {TOOLS.map((tool) => (
            <article key={tool.id} className="jh07-tools__card">
              <div className="jh07-tools__icon" aria-hidden="true" />
              <h3 className="jh07-tools__card-title">{tool.title}</h3>
              <p className="jh07-tools__card-body">{tool.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
