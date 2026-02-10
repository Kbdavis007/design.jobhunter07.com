"use client";

import React from 'react';

import { JobHunterTopNav } from './TopNav';
import { HeroSection } from './HeroSection';
import { ToolsSection } from './ToolsSection';
import './page.css';

export interface JobHunterPageProps {
  /** Optional main content to render below the header */
  children?: React.ReactNode;
}

export const JobHunterPage: React.FC<JobHunterPageProps> = ({ children }) => {
  return (
    <div className="jh07-page">
      <div className="jh07-page__overlay">
        <JobHunterTopNav />

        <main className="jh07-page__main" aria-label="JobHunter07 main content">
          {children ?? (
            <>
              <HeroSection />
              <ToolsSection />
            </>
          )}
        </main>
      </div>
    </div>
  );
};
