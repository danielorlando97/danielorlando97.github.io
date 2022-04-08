const e = "&eacute";
const a = "&aacute";
const o = "&oacute";
const n = "&ntilde";
function getData() {
  return {
    Name: {
      first: "DANIEL ORLANDO",
      last: "ORLANDO ORTIZ",
    },
    Left: {
      Summary: `Junios-Intermedial FullStack Developer con grandes ganas y capacidades de aprender. 
     Con experiencia laboral en varios frameworks de JS y TS, patrones de dis${e}${n}o Clean, DDD, FP y 
     conocimentos (acad${e}micos y autodid${a}ctas) en C#, Python, Go, Haskell`,
      Training: [
        {
          when: `Sept 2017 - Present`,
          name: `Ciencias De La Computaci${o}n`,
          where: "Matcom, Universidad De La Habana",
        },
        {
          when: `Mar 2022 - Present`,
          name: `Curso Optativo HyperLedger Fabric`,
          where: "Matcom, Universidad De La Habana",
        },
      ],
      Languages: [
        {
          name: `Espa${n}ol`,
          level: 5,
          levelName: "Native",
        },
        {
          name: "Ingles",
          level: 2,
          levelName: "Limited",
        },
      ],
      GitHub: [
        "https://github.com/danielorlando97",
        "https://github.com/matcom-school",
      ],
      AboutMe: `Junios-Intermedial FullStack Developer con grandes ganas y
      capacidades de aprender, tecnologias, patrones y lenguajes nuevos.
      Con conocimientos en varios lenguajes y framework (mayormente
      relacionados con IS y TS). Más inclinado por la rama BackEnd que
      FrontEnd, e interesado por el mundo de las Aplicaciones Distribuidas,
      Microservicios, Blockchain .….. Serio y responsable en el trabajo, y
      aficionado al studio y aplicación de los distintos patrones de diseño
      (Clean, DDD, FP, Factory, ...), en búsqueda de la mayor productividad,
      extensibilidad, expresividad y claridad del código`,
      Experience: [
        {
          job: "Backend Developer",
          when: "Sept 2021 - Current",
          enterprise: "Guajiritos SRL",
          where: "Ciudad De La Habana, La Habana",
          description: `En el año 2021 comienza mi experiencia laboral en la primera MyPyme
          de Cuba, Guajiritos SRL, mientras curso 4to año de Ciencia de la
          Computación, en la facultad Matcom, de la Universidad de la Habana.
          Al comenzar en la empresa me presentó como FullStack Development
          (en Nest]S y React]S) y se me categoriza como Junior Development. A
          lo largo de mi tapa inicial en la empresa contribuyo en varios
          proyectos de la empresa; tanto en nuevos desarrollos, como en
          soporte y refactorización de softwares en produción, demostrando
          habilidades en NestS, Microservices, Sql, Docker y adquiriendo otras
          nuevas como Express]S, Angular]S, ElasticSearch, MongoDb. Seis
          meses después, se me coloca al frente de uno de los proyecto
          principal de la empresa como Backend Development (en Express]S y
          Sequelize, tecnologías de las que solo conocía el lenguaje, JavaScript),
          alcanzando un rango de Intermediate Development.`,
          gitHub: "private repo",
        },
      ],
    },
    Right: {
      Contract: {
        Address: "Luyano, Ciudad De La Habana La Habana",
        Phone: "+5353029854",
        links: [
          {
            Whatsapp: "wa.me/5353029854",
            Email: "danielorlandoortizpacheco@gmail.com",
          },
        ],
      },
      Skills: [
        {
          name: "General Develoment Skills:",
          skills: [
            "Programming Languages: IS, TS, C#, Python, Haskell",
            "Functional Programming",
            "Domain Driver Design",
            "Object Oriented Programmins",
            "Version Control Systems: Git, Github, GitLab",
            "Agile/Scrum Methodology",
            "Teamwork and Collaboration",
            "Project Management",
          ],
        },
        {
          name: "BackEnd Develoment Skills:",
          skills: [
            "Databases: SQL Server, MongoDB, Postgresql",
            "API Design and Development",
            "Data Structures and Algorithms",
            "Multithreaded Software Applications",
            "JS Frameworks: Express]S, Nest]S",
          ],
        },
        {
          name: "FrontEnd Develoment Skills:",
          skills: [
            "CSS, HTML",
            "JS Frameworks: React|S, AngularIS",
            "Responsive Web Design",
            "Software Components and Libraries",
          ],
        },
      ],
    },
  };
}
