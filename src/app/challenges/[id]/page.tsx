"use client";

import { getChallenge, Challenge } from "@/services/challenge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ChallengeDetailPageProps {
  params: { id: string };
}

const mockChallenge: Challenge =   {
    id: '123',
    title: 'Sample Challenge',
    description: 'This is a sample challenge description.',
    instructions: 'Follow the instructions to complete the challenge.',
  };

const ChallengeDetailPage: React.FC<ChallengeDetailPageProps> = ({ params }) => {
  // const challenge = await getChallenge(params.id);
  const challenge = mockChallenge;

  return (
    <div className="container mx-auto py-8">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link href="/challenges" className="text-muted-foreground hover:text-primary">
          &larr; Back to dashboard
        </Link>
      </div>

      {/* Challenge Details */}
      <h1 className="text-3xl font-bold text-primary mb-2">{challenge.title}</h1>
      <div className="mb-4">
        <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2">
          Role
        </span>
        <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2">
          Skills
        </span>
        <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-primary">
          Difficulty
        </span>
      </div>
      <p className="text-lg text-muted-foreground mb-4">{challenge.description}</p>

      {/* Instructions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-primary mb-2">Instructions</h2>
        <p className="text-muted-foreground">{challenge.instructions}</p>
        {/* Add attachments display if needed */}
      </div>

      {/* Start Button */}
      <Button size="lg" asChild>
        <Link href={`/challenges/${challenge.id}/workspace`}>Start Challenge</Link>
      </Button>
    </div>
  );
};

export default ChallengeDetailPage;
