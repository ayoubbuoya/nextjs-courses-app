import { useEffect, useState } from "react";
import {useClient} from "next"
import supabase from "@/lib/supabase";

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const client = useClient(); 

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    try {
      const { data: courses, error } = await supabase
        .from("courses")
        .select("*");
      if (error) throw new Error(error.message);
      setCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    }
  }

  return (
    <div>
      <h1>All Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Category: {course.category}</p>
            <p>Price: {course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
