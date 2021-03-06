const e = "&eacute";
const a = "&aacute";
const o = "&oacute";
const u = "&uacute";
const i = "&iacute";
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
      AboutMe: `^Junios-Intermedial FullStack Developer^ con grandes ganas y
      capacidades de aprender, tecnolog${i}as, patrones y lenguajes nuevos.
      Con conocimientos en varios lenguajes y framework (mayormente
      relacionados con JS y TS). Interesado por el mundo de las ^Aplicaciones Distribuidas^,
      ^Microservicios^, ^Blockchain^, ^IA, ML y AutoML^, .... Serio y responsable en el trabajo, y
      aficionado al estudio y aplicaci${o}n de los distintos patrones de dise${n}o
      (^Clean^, ^DDD^, ^FP^, ^Factory^, ...), en b${u}squeda de la mayor productividad,
      extensibilidad, expresividad y claridad del c${o}digo`,
      Experience: [
        {
          job: "Backend Developer",
          when: "Sept 2021 - Actualidad",
          enterprise: "Guajiritos SRL",
          where: "Ciudad De La Habana, La Habana",
          description: `En el a${n}o 2021 comienza mi experiencia laboral en la primera MyPyme
          de Cuba, Guajiritos SRL, mientras curso 4to a${n}o de Ciencia de la
          Computaci${o}n, en la facultad Matcom, de la Universidad de la Habana.
          Al comenzar en la empresa me present${o} como ^FullStack Development^
          (en ^NestJS^ y ^ReactJS^) y se me categoriza como ^Junior Development^. A
          lo largo de mi tapa inicial en la empresa contribuyo en varios
          proyectos de la empresa; tanto en nuevos desarrollos, como en
          soporte y refactorizaci${o}n de softwares en produci${o}n, demostrando
          habilidades en ^NestJS, Microservices, Sql, Docker^ y adquiriendo otras
          nuevas como ^ExpressJS, AngularJS, ElasticSearch, MongoDb^. Seis
          meses despu${e}s, se me coloca al frente de uno de los proyecto
          principal de la empresa como ^Backend Development^ (en ^ExpressJS^ y
          ^Sequelize^, tecnolog${i}as de las que solo conoc${i}a el lenguaje, JavaScript),
          alcanzando un rango de ^Intermediate Development^.`,
          gitHub: "private repo",
        },
      ],
    },
    Right: {
      Image: "",
      Contact: [
        { name: "Address", text: "Luyano, Ciudad De La Habana La Habana" },
        { name: "Phone", text: "+5353029854" },
        { name: "WhatsApp", text: "wa.me/5353029854", link: true },
        {
          name: "Email",
          text: "danielorlandoortizpacheco@gmail.com",
          link: true,
        },
      ],
      Skills: [
        {
          name: "General Development Skills:",
          skills: [
            "Programming Languages: IS, TS, C#, Python, Haskell, Go",
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
          name: "Data Science Development Skills:",
          skills: [],
        },
        {
          name: "BackEnd Development Skills:",
          skills: [
            "Databases: MySQL, MongoDB, Postgresql",
            "API Design and Development",
            "Data Structures and Algorithms",
            "Multithreaded Software Applications",
            "JS Frameworks: ExpressJS, NestJS",
          ],
        },
        {
          name: "FrontEnd Development Skills:",
          skills: [
            "CSS, HTML",
            "JS Frameworks: ReactJS, AngularJS",
            "Responsive Web Design",
            "Software Components and Libraries",
          ],
        },
      ],
    },
  };
}
