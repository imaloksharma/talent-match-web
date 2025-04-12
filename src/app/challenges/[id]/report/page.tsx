"use client";

import React from 'react';
import CustomRadarChart from '@/components/RadarChart';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockReportData = [
  { subject: 'Skill Match', A: 120, B: 110, fullMark: 150 },
  { subject: 'Personality', A: 88, B: 130, fullMark: 150 },
  { subject: 'Culture Fit', A: 90, B: 100, fullMark: 150 },
  { subject: 'Tech Skills', A: 68, B: 140, fullMark: 150 },
];

const AIRecipePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">AI Matching Report</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Summary of candidate strengths and fit based on challenge performance.
      </p>

      {/* Radar Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <CustomRadarChart data={mockReportData} />
        </CardContent>
      </Card>

      {/* Strengths/Highlights */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Strengths/Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Excellent problem-solving skills</li>
            <li>Strong understanding of React concepts</li>
            <li>Good communication and collaboration skills</li>
          </ul>
        </CardContent>
      </Card>

      {/* Feedback Summaries */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Feedback Summaries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <p className="text-muted-foreground">
                "The candidate demonstrated a solid understanding of React fundamentals and wrote clean, maintainable code."
              </p>
            </div>
            <div className="border rounded-md p-4">
              <p className="text-muted-foreground">
                "The candidate could improve on their time management skills, as they took longer than expected to complete the challenge."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Score Tag */}
      <div className="mb-6">
        <Badge className="bg-accent text-accent-foreground">
          Match Score: 85% - Top 15%
        </Badge>
      </div>
    </div>
  );
};

export default AIRecipePage;
