import { ChallengeRepository } from "../../src/applications/repositories/ChallengesRepository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengeRepository {
  public items: Challenge[] = [];

  async findById(id: string): Promise<Challenge | null> {
    return this.items.find(c => c.id === id) ?? null; 
  }

  async add(challenge: Challenge): Promise<Challenge | null> {
    this.items.push(challenge);
    return this.items[this.items.length - 1];
  }
}