"use client";
import React, { useState } from "react";
import { BookOpen } from "lucide-react";

type Course = {
  name: string;
  grade: string;
  credit: number;
};

const gradePoints: { [key: string]: number } = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
};

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([{ name: "", grade: "A", credit: 3 }]);
  const [gpa, setGpa] = useState<string | null>(null);

  const handleCourseChange = (index: number, field: keyof Course, value: string | number) => {
    const updatedCourses = [...courses];
    updatedCourses[index] = {
      ...updatedCourses[index],
      [field]: field === "credit" ? Number(value) : (value as string),
    };
    setCourses(updatedCourses);
  };

  const addCourse = () => setCourses([...courses, { name: "", grade: "A", credit: 3 }]);
  const removeCourse = (index: number) => setCourses(courses.filter((_, i) => i !== index));

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const points = gradePoints[course.grade] || 0;
      const credit = Number(course.credit);
      totalPoints += points * credit;
      totalCredits += credit;
    });

    if (totalCredits === 0) {
      setGpa("Enter at least one course with credits.");
      return;
    }

    setGpa((totalPoints / totalCredits).toFixed(2));
  };

  const handleClear = () => {
    setCourses([{ name: "", grade: "A", credit: 3 }]);
    setGpa(null);
  };

  return (
    <div className="min-h-[92vh] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-cyan-600" />
          </div>
          <h1 className="text-2xl font-semibold text-slate-800">GPA Calculator</h1>
        </div>

        {/* Courses */}
        <div className="space-y-4 mb-4">
          {courses.map((course, index) => (
            <div key={index} className="grid grid-cols-12 gap-2 items-center">
              <input
                type="text"
                placeholder="Course Name"
                value={course.name}
                onChange={(e) => handleCourseChange(index, "name", e.target.value)}
                className="col-span-5 p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <select
                value={course.grade}
                onChange={(e) => handleCourseChange(index, "grade", e.target.value)}
                className="col-span-3 p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {Object.keys(gradePoints).map((grade) => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Credits"
                value={course.credit}
                onChange={(e) => handleCourseChange(index, "credit", Number(e.target.value))}
                className="col-span-2 p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {courses.length > 1 && (
                <button
                  onClick={() => removeCourse(index)}
                  className="col-span-2 py-2 px-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button
            onClick={addCourse}
            className="py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow hover:from-cyan-700 hover:to-blue-700 transition"
          >
            Add Course
          </button>
          <button
            onClick={calculateGPA}
            className="py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow hover:from-green-700 hover:to-emerald-700 transition"
          >
            Calculate GPA
          </button>
        </div>

        {/* Result */}
        {gpa && (
          <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 text-center font-medium text-slate-700 mb-3">
            Your GPA: {gpa}
          </div>
        )}

        {/* Clear */}
        <button
          onClick={handleClear}
          className="w-full py-3 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
