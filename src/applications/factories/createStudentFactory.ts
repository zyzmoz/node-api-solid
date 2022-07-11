import { Student } from "../../domain/entities/student";
import { StudentRepository } from "../repositories/StudentsRepository";

export const createStudentFactory = async (
  student: Student,
  repository: StudentRepository
): Promise<Student | null> => {
  return repository.add(student);
};
