import Image from "next/image";
import CoursesList from "@/components/CoursesList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CoursesList />
    </main>
  );
}
