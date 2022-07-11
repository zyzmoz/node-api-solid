import { Submission } from "../../domain/entities/submission";
import { ChallengeRepository } from "../repositories/ChallengesRepository";
import { StudentRepository } from "../repositories/StudentsRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
};

export class CreateChallengeSubmission {
  constructor(
    private studentRepository: StudentRepository,
    private challengesRepository: ChallengeRepository
  ) {}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = await this.studentRepository.findById(studentId);

    if (!student) {
      throw new Error("Student doesn't exist");
    }

    const challenge = await this.challengesRepository.findById(challengeId);

    if (!challenge) {
      throw new Error("Challenge doesn't exist");
    }

    const submission = Submission.create({
      studentId,
      challengeId,
    });

    return submission;
  }
}
