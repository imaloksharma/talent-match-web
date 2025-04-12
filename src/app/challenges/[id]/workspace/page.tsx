"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface ChallengeWorkspaceProps {
  params: { id: string };
}

const ChallengeWorkspacePage: React.FC<ChallengeWorkspaceProps> = ({ params }) => {
  const [code, setCode] = useState("");

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    alert("Submitted!");
  };

  const handleSave = () => {
    alert("Saved!");
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">Challenge Workspace</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Instructions Panel */}
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold text-primary mb-2">Instructions</h2>
            <p className="text-muted-foreground">
              Implement a function that reverses a given string. The function should take a string as input and return the reversed string.
            </p>
          </CardContent>
        </Card>

        {/* Code Editor Panel */}
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold text-primary mb-2">Code Editor</h2>
            <Textarea
              placeholder="Enter your code here..."
              value={code}
              onChange={handleCodeChange}
              className="mb-4"
            />
            <div className="flex justify-end">
              <Button variant="secondary" className="mr-2" onClick={handleSave}>
                Save Draft
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChallengeWorkspacePage;
