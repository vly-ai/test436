"use client";
import Image from "next/image";
import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Task from "../components/generated/Task";
import TextDateEntry from "../components/TextDateEntry";
import DropdownEntry from "../components/DropdownEntry";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  const add = useMutation(api.tasks.add);

  const [isCompleted, setIsCompleted] = useState(false);
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen p-20">
      <div className="flex flex-col mx-auto w-fit items-center">
        <h1>Welcome to your task manager!</h1>
        <form
          className="flex flex-col"
          onSubmit={async (e) => {
            e.preventDefault();
            await add({ isCompleted: isCompleted, text: text });
            setIsCompleted(false);
            setText("");
          }}
        >
          <TextDateEntry
            text="Text"
            type="text"
            onChange={(e: any) => setText(e.target.value)}
            value={text}
          />
          <DropdownEntry
            text="Completed?"
            onChange={(e: any) =>
              setIsCompleted(e.target.value === "Complete" ? true : false)
            }
            value={isCompleted ? "Complete" : "Not Complete"}
            options={["Complete", "Not Complete"]}
          />
          <button className="p-2 rounded bg-blue-600 text-white">
            Add task
          </button>
        </form>
        {tasks?.map((task) => (
          <Task
            isCompleted={task.isCompleted}
            text={task.text}
            key={task._id}
          />
        ))}
      </div>
    </main>
  );
}
