import React, { useState, useEffect } from "react"; // Added useEffect to the import statement
import "./Priority.css";
import nopriority from "../assets/nopriority.png";
import urgent from "../assets/urgent.png";
import high from "../assets/highpriority.png";
import medium from "../assets/mediumpriority.png";
import low from "../assets/lowpriority.png";
import add from "../assets/add.png";
import dot from "../assets/3dot.png";

// Sample API data
const apiData = {
  tickets: [
    {
      id: "CAM-1",
      title: "Update User Profile Page UI",
      tag: ["Feature request"],
      userId: "usr-1",
      status: "Todo",
      priority: 4,
    },
    {
      id: "CAM-2",
      title: "Add Multi-Language Support",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-3",
      title: "Optimize Database Queries for Performance",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "In progress",
      priority: 1,
    },
    {
      id: "CAM-4",
      title: "Implement Email Notification System",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-5",
      title: "Enhance Search Functionality",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "In progress",
      priority: 0,
    },
    {
      id: "CAM-6",
      title: "Third-Party Payment Gateway",
      tag: ["Feature Request"],
      userId: "usr-2",
      status: "Todo",
      priority: 1,
    },
    {
      id: "CAM-7",
      title: "Create Onboarding Tutorial for New Users",
      tag: ["Feature Request"],
      userId: "usr-1",
      status: "Backlog",
      priority: 2,
    },
    {
      id: "CAM-8",
      title: "Implement Role-Based Access Control (RBAC)",
      tag: ["Feature Request"],
      userId: "usr-3",
      status: "In progress",
      priority: 3,
    },
    {
      id: "CAM-9",
      title: "Upgrade Server Infrastructure",
      tag: ["Feature Request"],
      userId: "usr-5",
      status: "Todo",
      priority: 2,
    },
    {
      id: "CAM-10",
      title: "Conduct Security Vulnerability Assessment",
      tag: ["Feature Request"],
      userId: "usr-4",
      status: "Backlog",
      priority: 1,
    },
  ],
  users: [
    { id: "usr-1", name: "Anoop Sharma", available: false },
    { id: "usr-2", name: "Yogesh", available: true },
    { id: "usr-3", name: "Shankar Kumar", available: true },
    { id: "usr-4", name: "Ramesh", available: true },
    { id: "usr-5", name: "Suresh", available: true },
  ],
};

const Priority = () => {
  // Initialize tasks based on priority
  const [tasks, setTasks] = useState({
    noPriority: [],
    urgent: [],
    high: [],
    medium: [],
    low: [],
  });

  const groupedTasks = {
    noPriority: apiData.tickets.filter((task) => task.priority === 0),
    urgent: apiData.tickets.filter((task) => task.priority === 1),
    high: apiData.tickets.filter((task) => task.priority === 2),
    medium: apiData.tickets.filter((task) => task.priority === 3),
    low: apiData.tickets.filter((task) => task.priority === 4),
  };

  useEffect(() => {
    setTasks(groupedTasks);
  }, []);

  const priorities = [
    { name: "noPriority", label: "No Priority", img: nopriority },
    { name: "urgent", label: "Urgent", img: urgent },
    { name: "high", label: "High", img: high },
    { name: "medium", label: "Medium", img: medium },
    { name: "low", label: "Low", img: low },
  ];

  const toggleTask = (priority, index) => {
    setTasks((prevTasks) => {
      const newTasks = { ...prevTasks };
      const task = newTasks[priority][index];
      newTasks[priority][index] = { ...task, completed: !task.completed };
      return newTasks;
    });
  };

  return (
    <div className="priority-container">
      {priorities.map(({ name, label, img }) => (
        <div className="priority-item" key={name}>
          <div className="priority-header">
            <div>
              <img src={img} alt={`${label} Logo`} className="priority-logo" />
              {label}
              <span> {tasks[name].length}</span>
            </div>
            <div className="icons">
              <img src={add} alt="Add Icon" className="icon" />
              <img src={dot} alt="3 Dot Icon" className="icon" />
            </div>
          </div>
          <ul>
            {tasks[name].map((task, index) => (
              <li key={task.id} className="task-item">
                <span style={{ fontWeight: "bold" }}>{task.id}</span>
                <div
                  className={`custom-checkbox ${
                    task.completed ? "checked" : ""
                  }`}
                  onClick={() => toggleTask(name, index)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleTask(name, index);
                    }
                  }}
                  aria-label={`Toggle completion for task ${task.id}`}
                >
                  {task.completed && <div className="checkmark" />}
                </div>
                <span>{task.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Priority;
