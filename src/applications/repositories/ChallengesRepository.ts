import { Challenge } from "../../domain/entities/challenge";

export interface ChallengeRepository {
  findById(id: string): Promise<Challenge | null>;
  add(student: Challenge): Promise<Challenge | null>;

}