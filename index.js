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
          name: "Español",
          level: 5,
          levelName: "Native",
        },
        {
          name: "Ingles",
          level: 2,
          levelName: "Limited",
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
    },
  };
}
