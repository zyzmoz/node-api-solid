import { StudentRepository } from "../../src/applications/repositories/StudentsRepository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentRepository {
  public items: Student[] = [];

  async findById(id: string): Promise<Student | null> {
    return this.items.find((s) => s.id === id) ?? null;
  }

  async add(student: Student): Promise<Student | null> {
    this.items.push(student);
    return this.items[this.items.length - 1];
  }
}
