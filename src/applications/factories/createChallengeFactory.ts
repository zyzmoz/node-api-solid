import { Challenge } from "../../domain/entities/challenge";
import { ChallengeRepository } from "../repositories/ChallengesRepository";

export const createChallengeFactory = async (
  challenge: Challenge,
  repository: ChallengeRepository
): Promise<Challenge | null> => {
  return repository.add(challenge);
};
