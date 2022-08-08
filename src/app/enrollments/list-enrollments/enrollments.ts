import { Course } from "src/app/courses/courses";

export interface Enrollments {
    enrollmentId: number;
    studentId: number
    student: string;
    course: Course;
    grades:number[];


}