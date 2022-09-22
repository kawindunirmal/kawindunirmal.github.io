import React from "react";
import SkillBar from "react-skillbars";

const SKILLS6 = [
  {
    type: "CSS/HTML",
    level: 100,
    color: { bar: "#3498db", title: { text: "#fff", background: "#2980b9" } },
  },
  {
    type: "Javascript",
    level: 95,
    color: { bar: "#4288d0", title: { text: "#fff", background: "#124e8c" } },
  },
  {
    type: "ReactJs",
    level: 90,
    color: { bar: "#2c3e50", title: { text: "#fff", background: "#2c3e50" } },
  },
  {
    type: "NodeJs",
    level: 90,
    color: { bar: "#3C873A", title: { text: "#fff", background: "#3C873A" } },
  },
  {
    type: "PHP",
    level: 80,
    color: { bar: "#5a68a5", title: { text: "#fff", background: "#46465e" } },
  },
  {
    type: "Laravel",
    level: 65,
    color: { bar: "#525252", title: { text: "#fff", background: "#333333" } },
  },
  {
    type: "Codeigniter",
    level: 60,
    color: { bar: "black", title: { text: "#111", background: "#fff" } },
  },
  {
    type: "Ruby",
    level: 10,
    color: {
      bar: "rgb(137 5 5)",
      title: { text: "#fff", background: "rgb(224 17 17)" },
    },
  },
];

const Skill = () => <SkillBar skills={SKILLS6} />;

export default Skill;
