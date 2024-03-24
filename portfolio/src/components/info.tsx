import React from "react";
import Image from "next/image";

const SkillSection = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="border-2 border-gray-300 p-5 rounded-xl bg-white opacity-100 shadow-lg">
    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-700">{title}</h3>
      <ul className="list-disc list-inside mb-4 text-gray-600">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const Info = () => {
  const skills = [
    { title: "Langages", skills: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "PHP", "Python", "Dart", "Mysql", "MongoDB"] },
    { title: "Frameworks", skills: ["Tailwind", "React", 'VueJS', "NodeJS", "ExpressJS", "React Native", "NextJS", "Laravel", "Symfony", "Flutter"] },
    { title: "Outils", skills: ["Visual Studio Code", "GitKraken", "GitHub", "Trello", "Figma", "Discord", "Linux", "Docker", "Postman", "Notion", "Slack"] },
    { title: "Hard Skills", skills: ["Programmation orientée objet", "Base de données", "Algorithmie", "Api REST"] },
    { title: "Soft Skills", skills: ["Travail d'équipe", "Autonomie", "Curiosité", "Adaptabilité"] },
    { title: "Hobbies", skills: ["Jeux vidéos", "Animes/Mangas", "Programmation"] },
  ];

  return (
    <div className=" p-10 flex justify-center h-full" style={{ maxHeight: "80vh" }}>
    <div className="grid gap-10 md:grid-cols-4">
        <div className="border-2 border-gray-300 p-5 rounded-xl bg-white shadow-lg md:col-span-2">
          <h1 className="text-4xl font-bold mb-2 text-gray-700">Kezon Lacheteau</h1>
          <h2 className="font-bold mb-4 text-gray-600">Développeur Fullstack</h2>
          <div className="flex flex-col md:flex-row md:gap-20 text-gray-600">
            <div>
              <p className="mb-4">age: 20 ans</p>
              <p className="mb-4">ville: Lyon</p>
            </div>

            <div>
              <p className="mb-4">email: kezon.lacheteau@epitech.eu</p>
              <p className="mb-4">téléphone: 06 99 82 91 71</p>
            </div>

            <p className="mb-4">
              <a href="https://www.linkedin.com/in/kezon-lacheteau-911656216/" target="_blank" rel="noopener noreferrer">
                <Image src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" width={30} height={30} title="Lien vers mon linkedin" />
              </a>
            </p>
          </div>
        </div>

        {skills.map(({ title, skills }) => (
          <SkillSection key={title} title={title} skills={skills} />
        ))}
      </div>
    </div>
  );
};