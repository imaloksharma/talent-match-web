"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Challenge } from "@/services/challenge";
import Link from "next/link";

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle>{challenge.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{challenge.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
            <Link href={`/challenges/${challenge.id}`}>Attempt</Link>
        </Button>
        <div className="text-sm text-muted-foreground">Difficulty: Hard</div>
      </CardFooter>
    </Card>
  );
};

const mockChallenges: Challenge[] = [
  {
    id: "1",
    title: "React Component Challenge",
    description: "Build a reusable React component.",
    instructions: "Follow the instructions to build the component.",
  },
  {
    id: "2",
    title: "Node.js API Challenge",
    description: "Create a RESTful API using Node.js.",
    instructions: "Implement the API endpoints as described.",
  },
  {
    id: "3",
    title: "Frontend Design Challenge",
    description: "Design a user interface for a web application.",
    instructions: "Create a visually appealing and user-friendly design.",
  },
];

export default function ChallengesPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (value: string) => {
    setSort(value);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">Explore Challenges</h1>

      {/* Search and Filter */}
      <div className="flex items-center justify-between mb-4">
        <Input
          type="search"
          placeholder="Search challenges..."
          value={search}
          onChange={handleSearchChange}
          className="w-1/3"
        />

        <Select value={sort} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            {/* Add more sorting options as needed */}
          </SelectContent>
        </Select>
      </div>

      {/* Challenge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
