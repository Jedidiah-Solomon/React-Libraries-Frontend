import React from "react";
import StudentsCoursesStats from "./StudentsCoursesStats";
import CourseEnrollments from "./CourseEnrollments";
import StudentProportions from "./StudentProportions";
import EnrollmentTrends from "./EnrollmentTrends";

const Stats = () => {
  return (
    <>
      <StudentsCoursesStats />
      <CourseEnrollments />
      <StudentProportions />
      <EnrollmentTrends />
    </>
  );
};

export default Stats;
