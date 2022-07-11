import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { createChallengeFactory } from "../factories/createChallengeFactory";
import { createStudentFactory } from "../factories/createStudentFactory";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", async () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    createStudentFactory(
      Student.create(
        {
          name: "Test",
          email: "test@email.com",
          createdAt: new Date(),
        },
        "test-student-id"
      ),
      studentsRepository
    );

    createChallengeFactory(
      Challenge.create(
        {
          title: "Test Challenge",
          url: "https://test.com",
          createdAt: new Date(),
        },
        "test-challenge-id"
      ),
      challengesRepository
    );

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository
    );
    const res = await sut.execute({
      studentId: "test-student-id",
      challengeId: "test-challenge-id",
    });

    expect(res).toBeTruthy();
  });
});
