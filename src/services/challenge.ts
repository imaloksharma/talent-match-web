/**
 * Represents a challenge with its details.
 */
export interface Challenge {
  /**
   * The unique identifier for the challenge.
   */
  id: string;
  /**
   * The title of the challenge.
   */
  title: string;
  /**
   * The description of the challenge.
   */
  description: string;
  /**
   * Instructions for the challenge.
   */
  instructions: string;
}

/**
 * Asynchronously retrieves details for a given challenge ID.
 *
 * @param challengeId The ID of the challenge to retrieve.
 * @returns A promise that resolves to a Challenge object.
 */
export async function getChallenge(challengeId: string): Promise<Challenge> {
  // TODO: Implement this by calling an API.

  return {
    id: '123',
    title: 'Sample Challenge',
    description: 'This is a sample challenge description.',
    instructions: 'Follow the instructions to complete the challenge.',
  };
}
