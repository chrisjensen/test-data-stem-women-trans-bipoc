import type { Person, Group, Event, DataPackage, DataPackageMetadata } from 'test-data-factory/dist/types.js';

// STEM Achievements Dataset
// Real people who made significant contributions to Science, Technology, Engineering, and Mathematics
// Following the BIO_WRITING_SPEC.md guidelines for respectful, factual representation

export const stemAchievementsData: DataPackage = {
  metadata: {
    containsFirstNationsPeople: false // Currently no Indigenous/First Nations scientists in dataset
  },
  people: [
    {
      id: 'katherine-johnson',
      fullName: 'Katherine Johnson',
      dateOfBirth: new Date('1918-08-26'),
      pronouns: 'she/her',
      bio: 'A pioneering mathematician whose calculations were critical to the success of NASA\'s early space missions, including Alan Shepard\'s 1961 spaceflight and John Glenn\'s 1962 orbital mission. Johnson overcame both racial and gender discrimination to become one of the most respected "computers" at NASA, where her mathematical precision helped ensure the safety of astronauts during the critical early years of space exploration. Her work on orbital mechanics and trajectory calculations demonstrated exceptional mathematical skill and contributed to the success of the Apollo program.',
      email: 'katherine.johnson@nasa.test',
      phone: '+1-555-864-1000',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Katherine_Johnson_1983.jpg',
      tags: ['mathematics', 'physics', 'nasa', 'space-exploration', 'african-american'],
      groupMemberships: ['nasa-mathematics', 'african-american-scientists'],
      reference: 'https://www.nasa.gov/content/katherine-johnson-biography',
      quote: 'I counted everything. I counted the steps to the road, the steps up to church, the number of dishes and silverware I washed... anything that could be counted, I did.'
    },
    {
      id: 'chien-shiung-wu',
      fullName: '吳健雄',
      dateOfBirth: new Date('1912-05-31'),
      pronouns: 'she/her',
      preferredName: 'Wú Jiànxióng',
      givenName: '健雄',
      surname: '吳',
      englishName: 'Chien-Shiung Wu',
      bio: 'A groundbreaking experimental physicist who conducted the Wu experiment, which disproved the law of conservation of parity and revolutionized our understanding of particle physics. Wu\'s meticulous experimental work at Columbia University demonstrated that the weak nuclear force violates parity symmetry, a discovery that earned her colleagues the 1957 Nobel Prize in Physics. Despite facing discrimination as both a woman and an immigrant from China, she became known as the "First Lady of Physics" for her exceptional experimental skills and contributions to nuclear physics.',
      email: 'chien-shiung.wu@columbia.test',
      phone: '+1-555-854-1754',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Chien-Shiung_Wu.jpg',
      tags: ['physics', 'nuclear-physics', 'experimental-physics', 'asian-american', 'nobel-prize'],
      groupMemberships: ['columbia-physics', 'experimental-physicists'],
      reference: 'https://www.nobelprize.org/prizes/physics/1957/summary/',
      quote: 'I was a woman and an immigrant, but I was also a physicist.'
    },
    {
      id: 'ada-lovelace',
      fullName: 'Ada Lovelace',
      dateOfBirth: new Date('1815-12-10'),
      pronouns: 'she/her',
      bio: 'The first computer programmer, who wrote the first algorithm intended to be processed by Charles Babbage\'s Analytical Engine in the 1840s. Lovelace recognized that the machine could go beyond mere calculation to process any symbolic information, including music and text, making her the first person to envision the broader potential of computing. Her mathematical insights and detailed notes on the Analytical Engine established fundamental concepts of computer programming that would not be fully realized until the 20th century.',
      email: 'ada.lovelace@computing-history.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
      tags: ['computer-science', 'mathematics', 'programming', 'victorian-era', 'british'],
      groupMemberships: ['computer-pioneers', 'mathematical-history'],
      reference: 'https://www.britannica.com/biography/Ada-Lovelace',
      quote: 'The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.'
    },
    {
      id: 'marie-curie',
      fullName: 'Maria Skłodowska-Curie',
      dateOfBirth: new Date('1867-11-07'),
      pronouns: 'she/her',
      preferredName: 'Marie Curie',
      givenName: 'Maria',
      surname: 'Skłodowska',
      englishName: 'Marie Curie',
      bio: 'A pioneering physicist and chemist who conducted groundbreaking research on radioactivity, discovering the elements polonium and radium. Curie\'s systematic investigation of radioactive materials led to the development of X-ray technology and established the field of nuclear physics. Despite facing gender discrimination in the male-dominated scientific community of early 20th century Europe, she became the first person to win Nobel Prizes in two different scientific fields and the first woman to win a Nobel Prize.',
      email: 'marie.curie@sorbonne.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Marie_Curie_c1920.jpg',
      tags: ['physics', 'chemistry', 'radioactivity', 'nobel-prize', 'polish-french'],
      groupMemberships: ['sorbonne-physics', 'radioactivity-research'],
      reference: 'https://www.nobelprize.org/prizes/physics/1903/curie/facts/',
      quote: 'Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.'
    },
    {
      id: 'dorothy-vaughan',
      fullName: 'Dorothy Vaughan',
      dateOfBirth: new Date('1910-09-20'),
      pronouns: 'she/her',
      bio: 'A mathematician and computer programmer who became the first African American woman to supervise a group of staff at the National Advisory Committee for Aeronautics (NACA), later NASA. Vaughan specialized in calculations for flight paths and became an expert in FORTRAN programming, leading the West Area Computing Unit during the 1940s and 1950s. Her leadership and technical skills helped pave the way for other African American women in STEM, and she played a crucial role in the transition from human computers to electronic computing.',
      email: 'dorothy.vaughan@nasa.test',
      phone: '+1-555-864-1000',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Dorothy_Vaughan.jpg',
      tags: ['mathematics', 'computer-science', 'nasa', 'african-american', 'leadership'],
      groupMemberships: ['nasa-mathematics', 'west-area-computing']
    },
    {
      id: 'grace-hopper',
      fullName: 'Grace Hopper',
      dateOfBirth: new Date('1906-12-09'),
      pronouns: 'she/her',
      bio: 'A computer scientist and United States Navy rear admiral who pioneered computer programming and developed the first compiler for a computer programming language. Hopper\'s work on the UNIVAC I led to the development of COBOL, one of the first high-level programming languages, which revolutionized business computing. Her concept of machine-independent programming languages and her advocacy for standardized programming practices helped establish software engineering as a discipline.',
      email: 'grace.hopper@navy.test',
      phone: '+1-555-697-0211',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg',
      tags: ['computer-science', 'programming', 'navy', 'cobol', 'compiler'],
      groupMemberships: ['navy-computing', 'programming-pioneers']
    },
    {
      id: 'rosalind-franklin',
      fullName: 'Rosalind Franklin',
      dateOfBirth: new Date('1920-07-25'),
      pronouns: 'she/her',
      bio: 'A chemist whose X-ray diffraction studies of DNA provided crucial evidence for the double helix structure, though her contributions were not fully recognized during her lifetime. Franklin\'s meticulous experimental work at King\'s College London produced the famous "Photo 51," which revealed the helical structure of DNA. Her research on the molecular structure of coal and viruses also made significant contributions to our understanding of complex molecular structures.',
      email: 'rosalind.franklin@kcl.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Rosalind_Franklin.jpg',
      tags: ['chemistry', 'molecular-biology', 'x-ray-crystallography', 'dna', 'british'],
      groupMemberships: ['kings-college-chemistry', 'molecular-biology-research']
    },
    {
      id: 'shirley-ann-jackson',
      fullName: 'Shirley Ann Jackson',
      dateOfBirth: new Date('1946-08-05'),
      pronouns: 'she/her',
      bio: 'A theoretical physicist who became the first African American woman to earn a doctorate from MIT and later served as president of Rensselaer Polytechnic Institute. Jackson\'s research in theoretical particle physics and solid state physics contributed to advances in telecommunications technology, including the development of touch-tone telephones and fiber optic cables. Her leadership in academia and government has helped expand opportunities for underrepresented groups in STEM fields.',
      email: 'shirley.jackson@rpi.test',
      phone: '+1-555-276-6000',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Shirley_Ann_Jackson_2016.jpg',
      tags: ['physics', 'theoretical-physics', 'academia', 'african-american', 'leadership'],
      groupMemberships: ['rpi-physics', 'mit-alumni']
    },
    {
      id: 'kalpana-chawla',
      fullName: 'Kalpana Chawla',
      dateOfBirth: new Date('1962-03-17'),
      pronouns: 'she/her',
      bio: 'An aerospace engineer and the first woman of Indian descent to fly in space, serving as a mission specialist on the Space Shuttle Columbia. Chawla\'s work focused on fluid dynamics and microgravity research, contributing to our understanding of how materials behave in space. Her engineering expertise and determination inspired countless young people, particularly in India and among immigrant communities, to pursue careers in aerospace engineering and space exploration.',
      email: 'kalpana.chawla@nasa.test',
      phone: '+1-555-483-0000',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Kalpana_Chawla.jpg',
      tags: ['aerospace-engineering', 'space-exploration', 'nasa', 'indian-american', 'fluid-dynamics'],
      groupMemberships: ['nasa-engineering', 'space-shuttle-program']
    },
    {
      id: 'jane-goodall',
      fullName: 'Jane Goodall',
      dateOfBirth: new Date('1934-04-03'),
      pronouns: 'she/her',
      bio: 'A primatologist and anthropologist whose groundbreaking research on chimpanzees in Tanzania revolutionized our understanding of animal behavior and human evolution. Goodall\'s long-term study of chimpanzee communities revealed their complex social structures, tool-making abilities, and emotional lives, challenging the traditional boundary between humans and other animals. Her work has influenced conservation efforts and our understanding of the natural world.',
      email: 'jane.goodall@janegoodall.test',
      phone: '+1-555-682-9220',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Jane_Goodall_2015.jpg',
      tags: ['primatology', 'anthropology', 'conservation', 'british', 'field-research'],
      groupMemberships: ['janegoodall-institute', 'primatology-research']
    },
    {
      id: 'sau-lan-wu',
      fullName: 'Wú Sàulán (吳秀蘭) / Sau Lan Wu',
      dateOfBirth: new Date('1940-05-30'),
      pronouns: 'she/her',
      bio: 'A particle physicist whose experimental work at CERN contributed to the discovery of the gluon and later the Higgs boson, fundamental particles that help explain the structure of matter. Wu\'s research on particle collisions and detector development has been crucial to advancing our understanding of the Standard Model of particle physics. Her work demonstrates the importance of experimental precision in testing theoretical predictions about the fundamental nature of the universe.',
      email: 'sau-lan.wu@cern.test',
      phone: '+41-555-767-4101',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sau_Lan_Wu.jpg',
      tags: ['physics', 'particle-physics', 'cern', 'asian-american', 'experimental-physics'],
      groupMemberships: ['cern-physics', 'particle-detection']
    },
    {
      id: 'mamie-phipps-clark',
      fullName: 'Mamie Phipps Clark',
      dateOfBirth: new Date('1917-04-18'),
      pronouns: 'she/her',
      bio: 'A social psychologist whose research on racial identity and self-concept in African American children provided crucial evidence in the landmark Brown v. Board of Education case that ended legal segregation in American schools. Clark\'s "doll studies" demonstrated the psychological impact of segregation on children\'s self-esteem and racial identity. Her work established the importance of considering psychological factors in educational policy and civil rights advocacy.',
      email: 'mamie.clark@psychology-research.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Mamie_Phipps_Clark.jpg',
      tags: ['psychology', 'social-psychology', 'education', 'african-american', 'civil-rights'],
      groupMemberships: ['psychology-research', 'education-psychology']
    },
    {
      id: 'vera-rubin',
      fullName: 'Vera Rubin',
      dateOfBirth: new Date('1928-07-23'),
      pronouns: 'she/her',
      bio: 'An astronomer whose observations of galaxy rotation curves provided the first compelling evidence for the existence of dark matter, revolutionizing our understanding of the universe\'s composition. Rubin\'s meticulous measurements of how stars orbit the centers of galaxies revealed that visible matter alone cannot account for the observed gravitational effects. Her work fundamentally changed cosmology and demonstrated the importance of careful observational astronomy in advancing theoretical understanding.',
      email: 'vera.rubin@carnegie-science.test',
      phone: '+1-555-686-4370',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Vera_Rubin.jpg',
      tags: ['astronomy', 'dark-matter', 'galaxy-rotation', 'observational-astronomy', 'american'],
      groupMemberships: ['carnegie-observatories', 'dark-matter-research']
    },
    {
      id: 'annie-easley',
      fullName: 'Annie Easley',
      dateOfBirth: new Date('1933-04-23'),
      pronouns: 'she/her',
      bio: 'A computer scientist and mathematician who worked at NASA for 34 years, developing software for the Centaur rocket stage and energy conversion systems. Easley\'s work on battery technology and alternative energy systems contributed to the development of hybrid vehicles and renewable energy storage. She overcame both racial and gender discrimination to become a respected computer scientist, and her work helped establish computer programming as a crucial component of aerospace engineering.',
      email: 'annie.easley@nasa.test',
      phone: '+1-555-433-4000',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Annie_Easley.jpg',
      tags: ['computer-science', 'mathematics', 'nasa', 'african-american', 'energy-systems'],
      groupMemberships: ['nasa-mathematics', 'lewis-research-center']
    },
    {
      id: 'charlotte-angas-scott',
      fullName: 'Charlotte Angas Scott',
      dateOfBirth: new Date('1858-06-08'),
      pronouns: 'she/her',
      bio: 'A mathematician who became the first head of the mathematics department at Bryn Mawr College and made significant contributions to algebraic geometry and the development of mathematical education for women. Scott\'s research on plane curves and her work on the mathematical foundations of geometry helped establish rigorous standards in mathematical research. Her leadership at Bryn Mawr created opportunities for women to pursue advanced mathematics at a time when most universities excluded them from graduate programs.',
      email: 'charlotte.scott@brynmawr.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Charlotte_Angas_Scott.jpg',
      tags: ['mathematics', 'algebraic-geometry', 'mathematical-education', 'british', 'academia'],
      groupMemberships: ['brynmawr-mathematics', 'mathematical-education']
    },
    {
      id: 'mary-jackson',
      fullName: 'Mary Jackson',
      dateOfBirth: new Date('1921-04-09'),
      pronouns: 'she/her',
      bio: 'NASA\'s first African American female engineer, who worked on wind tunnel experiments and data analysis for aircraft design during the 1950s and 1960s. Jackson\'s engineering work contributed to the safety and efficiency of aircraft design, and she later worked to promote the hiring and promotion of other women in NASA\'s engineering ranks. Her career demonstrated the importance of both technical expertise and advocacy for diversity in STEM fields.',
      email: 'mary.jackson@nasa.test',
      phone: '+1-555-864-1000',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Mary_Jackson.jpg',
      tags: ['engineering', 'aerospace-engineering', 'nasa', 'african-american', 'wind-tunnels'],
      groupMemberships: ['nasa-engineering', 'langley-research-center']
    },
    {
      id: 'sophie-germain',
      fullName: 'Sophie Germain',
      dateOfBirth: new Date('1776-04-01'),
      pronouns: 'she/her',
      bio: 'A French mathematician who made significant contributions to number theory and mathematical physics during the early 19th century. Germain\'s work on Fermat\'s Last Theorem and her research on elasticity theory established her as one of the most important mathematicians of her time. Despite facing gender discrimination that prevented her from attending the École Polytechnique, she corresponded with leading mathematicians and made substantial contributions to mathematical research.',
      email: 'sophie.germain@mathematics-history.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sophie_Germain.jpg',
      tags: ['mathematics', 'number-theory', 'elasticity-theory', 'french', 'nineteenth-century'],
      groupMemberships: ['mathematical-history', 'french-mathematics']
    },
    {
      id: 'emmy-noether',
      fullName: 'Emmy Noether',
      dateOfBirth: new Date('1882-03-23'),
      pronouns: 'she/her',
      bio: 'A German mathematician whose work in abstract algebra and theoretical physics revolutionized both fields. Noether\'s theorem, which connects symmetries to conservation laws, is fundamental to modern physics and has been called "one of the most important mathematical theorems ever proved in guiding the development of modern physics." Despite facing discrimination as a woman and a Jew in early 20th century Germany, she became one of the most influential mathematicians of her time.',
      email: 'emmy.noether@mathematics-history.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Emmy_Noether.jpg',
      tags: ['mathematics', 'abstract-algebra', 'theoretical-physics', 'german', 'noether-theorem'],
      groupMemberships: ['mathematical-history', 'german-mathematics']
    },
    {
      id: 'sonia-kovalevskaya',
      fullName: 'Софья Васильевна Ковалевская / Sofia Vasilyevna Kovalevskaya',
      dateOfBirth: new Date('1850-01-15'),
      pronouns: 'she/her',
      bio: 'A Russian mathematician who made significant contributions to analysis, partial differential equations, and mechanics. Kovalevskaya became the first woman to obtain a doctorate in mathematics and the first woman appointed to a full professorship in Northern Europe. Her work on the rotation of a solid body around a fixed point and her research on partial differential equations established her as a leading mathematician of the late 19th century.',
      email: 'sonia.kovalevskaya@mathematics-history.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sonia_Kovalevskaya.jpg',
      tags: ['mathematics', 'analysis', 'partial-differential-equations', 'russian', 'mechanics'],
      groupMemberships: ['mathematical-history', 'russian-mathematics']
    },
    {
      id: 'wang-zhenyi',
      fullName: 'Wáng Zhēnyí (王貞儀) / Wang Zhenyi',
      dateOfBirth: new Date('1768-01-01'),
      pronouns: 'she/her',
      bio: 'A Chinese astronomer and mathematician from the Qing dynasty who made significant contributions to celestial mechanics and mathematics. Zhenyi\'s work on lunar eclipses and her mathematical calculations demonstrated exceptional skill in both observational astronomy and theoretical mathematics. Her research helped advance understanding of celestial mechanics in 18th century China and established her as one of the most accomplished female scientists of her era.',
      email: 'wang.zhenyi@chinese-astronomy.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Wang_Zhenyi.jpg',
      tags: ['astronomy', 'mathematics', 'celestial-mechanics', 'chinese', 'qing-dynasty'],
      groupMemberships: ['chinese-astronomy', 'mathematical-history']
    },
    {
      id: 'caroline-herschel',
      fullName: 'Caroline Herschel',
      dateOfBirth: new Date('1750-03-16'),
      pronouns: 'she/her',
      bio: 'A German-born British astronomer who made significant contributions to the field of astronomy during the late 18th and early 19th centuries. Herschel discovered several comets and was the first woman to receive a salary as a scientist. Her systematic cataloging of nebulae and star clusters, along with her work on astronomical calculations, established her as one of the most important astronomers of her time and helped lay the foundation for modern stellar astronomy.',
      email: 'caroline.herschel@royal-astronomical-society.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Caroline_Herschel.jpg',
      tags: ['astronomy', 'stellar-astronomy', 'comet-discovery', 'british', 'german-born'],
      groupMemberships: ['royal-astronomical-society', 'stellar-astronomy-research']
    },
    {
      id: 'maria-gaetana-agnesi',
      fullName: 'Maria Gaetana Agnesi',
      dateOfBirth: new Date('1718-05-16'),
      pronouns: 'she/her',
      bio: 'An Italian mathematician and philosopher who made significant contributions to calculus and mathematical analysis during the 18th century. Agnesi\'s work on differential equations and her comprehensive textbook on calculus established her as one of the leading mathematicians of her era. Her research on the "witch of Agnesi" curve demonstrated exceptional mathematical insight and helped advance the understanding of mathematical analysis.',
      email: 'maria.agnesi@italian-mathematics.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Maria_Gaetana_Agnesi.jpg',
      tags: ['mathematics', 'calculus', 'differential-equations', 'italian', 'eighteenth-century'],
      groupMemberships: ['italian-mathematics', 'mathematical-history']
    },
    {
      id: 'dorothy-hodgkin',
      fullName: 'Dorothy Hodgkin',
      dateOfBirth: new Date('1910-05-12'),
      pronouns: 'she/her',
      bio: 'A British chemist who pioneered the technique of X-ray crystallography to determine the structure of biomolecules. Hodgkin\'s work on the structure of penicillin, vitamin B12, and insulin revolutionized our understanding of these important compounds and earned her the 1964 Nobel Prize in Chemistry. Her research demonstrated the power of crystallography in revealing the three-dimensional structure of complex molecules.',
      email: 'dorothy.hodgkin@oxford-chemistry.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Dorothy_Hodgkin.jpg',
      tags: ['chemistry', 'x-ray-crystallography', 'biochemistry', 'british', 'nobel-prize'],
      groupMemberships: ['oxford-chemistry', 'crystallography-research']
    },
    {
      id: 'sophia-kovalevskaya',
      fullName: 'Софья Васильевна Ковалевская / Sofia Vasilyevna Kovalevskaya',
      dateOfBirth: new Date('1850-01-15'),
      pronouns: 'she/her',
      bio: 'A Russian mathematician and physicist who made significant contributions to analysis, partial differential equations, and mechanics. Kovalevskaya became the first woman to obtain a doctorate in mathematics and the first woman appointed to a full professorship in Northern Europe. Her work on the rotation of a solid body around a fixed point and her research on partial differential equations established her as a leading mathematician of the late 19th century.',
      email: 'sophia.kovalevskaya@russian-mathematics.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sophia_Kovalevskaya.jpg',
      tags: ['mathematics', 'analysis', 'partial-differential-equations', 'russian', 'mechanics'],
      groupMemberships: ['russian-mathematics', 'mathematical-history']
    },
    {
      id: 'maria-mitchell',
      fullName: 'Maria Mitchell',
      dateOfBirth: new Date('1818-08-01'),
      pronouns: 'she/her',
      bio: 'An American astronomer who discovered a comet in 1847, becoming the first American woman to do so. Mitchell\'s discovery earned her international recognition and a gold medal from the King of Denmark. She became the first woman elected to the American Academy of Arts and Sciences and later served as a professor of astronomy at Vassar College, where she established the first astronomy program for women in the United States.',
      email: 'maria.mitchell@vassar-astronomy.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Maria_Mitchell.jpg',
      tags: ['astronomy', 'comet-discovery', 'education', 'american', 'nineteenth-century'],
      groupMemberships: ['vassar-astronomy', 'american-astronomical-society']
    },
    {
      id: 'hypatia',
      fullName: 'Hypatia',
      dateOfBirth: new Date('0350-01-01'),
      pronouns: 'she/her',
      bio: 'A Greek mathematician, astronomer, and philosopher who lived in Alexandria during the late 4th and early 5th centuries CE. Hypatia was the head of the Neoplatonic school in Alexandria and made significant contributions to mathematics and astronomy. Her work on conic sections and her commentaries on mathematical texts helped preserve and advance mathematical knowledge during a period of great cultural change.',
      email: 'hypatia@ancient-mathematics.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Hypatia.jpg',
      tags: ['mathematics', 'astronomy', 'philosophy', 'greek', 'ancient-world'],
      groupMemberships: ['ancient-mathematics', 'alexandria-school']
    },
    {
      id: 'lise-meitner',
      fullName: 'Lise Meitner',
      dateOfBirth: new Date('1878-11-07'),
      pronouns: 'she/her',
      bio: 'An Austrian-Swedish physicist who made significant contributions to nuclear physics and radioactivity. Meitner\'s work on nuclear fission with Otto Hahn and Fritz Strassmann led to the discovery of nuclear fission, though her contributions were not fully recognized when Hahn received the Nobel Prize in Chemistry. Her research on beta decay and her theoretical work on nuclear processes established her as one of the leading nuclear physicists of the early 20th century.',
      email: 'lise.meitner@nuclear-physics.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Lise_Meitner.jpg',
      tags: ['physics', 'nuclear-physics', 'radioactivity', 'austrian-swedish', 'nuclear-fission'],
      groupMemberships: ['nuclear-physics-research', 'austrian-physics']
    },
    {
      id: 'sophia-brahe',
      fullName: 'Sophia Brahe',
      dateOfBirth: new Date('1556-09-24'),
      pronouns: 'she/her',
      bio: 'A Danish astronomer and horticulturist who made significant contributions to astronomy during the late 16th century. Brahe assisted her brother Tycho Brahe in his astronomical observations and calculations, contributing to the development of observational astronomy. Her work on plant breeding and horticulture also demonstrated her scientific approach to agriculture, making her one of the most accomplished female scientists of the Renaissance period.',
      email: 'sophia.brahe@danish-astronomy.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sophia_Brahe.jpg',
      tags: ['astronomy', 'horticulture', 'observational-astronomy', 'danish', 'renaissance'],
      groupMemberships: ['danish-astronomy', 'renaissance-science']
    },
    {
      id: 'maria-sibylla-merian',
      fullName: 'Maria Sibylla Merian',
      dateOfBirth: new Date('1647-04-02'),
      pronouns: 'she/her',
      bio: 'A German-born naturalist and scientific illustrator who made significant contributions to entomology and botany during the late 17th and early 18th centuries. Merian\'s detailed illustrations of insects and their life cycles, particularly her work on the metamorphosis of butterflies, revolutionized the study of entomology. Her scientific expeditions to Suriname and her meticulous documentation of tropical flora and fauna established her as one of the most important naturalists of her time.',
      email: 'maria.merian@german-natural-history.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Maria_Sibylla_Merian.jpg',
      tags: ['biology', 'entomology', 'botany', 'german', 'scientific-illustration'],
      groupMemberships: ['german-natural-history', 'entomology-research']
    },
    {
      id: 'elena-cornaro-piscopia',
      fullName: 'Elena Cornaro Piscopia',
      dateOfBirth: new Date('1646-06-05'),
      pronouns: 'she/her',
      bio: 'An Italian mathematician and philosopher who became the first woman to receive a doctoral degree in 1678. Piscopia\'s work in mathematics and philosophy demonstrated exceptional intellectual ability, and she was appointed to the chair of mathematics at the University of Padua. Her achievements helped pave the way for other women to pursue advanced education in mathematics and philosophy during a time when such opportunities were extremely limited.',
      email: 'elena.piscopia@italian-mathematics.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Elena_Cornaro_Piscopia.jpg',
      tags: ['mathematics', 'philosophy', 'italian', 'seventeenth-century', 'academia'],
      groupMemberships: ['italian-mathematics', 'padua-university']
    },
    {
      id: 'srinivasa-ramanujan',
      fullName: 'श्रीनिवास रामानुजन',
      dateOfBirth: new Date('1887-12-22'),
      pronouns: 'he/him',
      preferredName: 'Srīnivāsa Rāmānujan',
      givenName: 'श्रीनिवास',
      surname: 'रामानुजन',
      englishName: 'Srinivasa Ramanujan',
      bio: 'Srinivasa Ramanujan made extraordinary contributions to mathematical analysis, number theory, infinite series, and continued fractions despite having almost no formal training in pure mathematics. Working largely in isolation in India before collaborating with G. H. Hardy at Cambridge, he produced thousands of mathematical results that continue to inspire research today. His notebooks, filled with theorems and formulae, revealed insights that were decades ahead of their time and established him as one of history\'s greatest mathematical minds.',
      email: 'ramanujan@cambridge.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Srinivasa_Ramanujan.jpg',
      tags: ['mathematics', 'number-theory', 'indian', 'self-taught', 'cambridge'],
      groupMemberships: ['cambridge-mathematics', 'indian-scientists'],
      reference: 'https://www.britannica.com/biography/Srinivasa-Ramanujan',
      quote: 'An equation means nothing to me unless it expresses a thought of God.'
    },
    {
      id: 'cv-raman',
      fullName: 'चन्द्रशेखर वेंकट रामन्',
      dateOfBirth: new Date('1888-11-07'),
      pronouns: 'he/him',
      preferredName: 'C. V. Raman',
      givenName: 'चन्द्रशेखर',
      surname: 'रामन्',
      englishName: 'Chandrasekhara Venkata Raman',
      bio: 'C. V. Raman discovered the phenomenon of inelastic scattering of light, known as the Raman effect, which earned him the Nobel Prize in Physics in 1930. Working with limited equipment at the Indian Association for the Cultivation of Science, he demonstrated that when light passes through a transparent material, some of the scattered light changes wavelength. This groundbreaking discovery revolutionized the study of molecular and crystal structure and established India as a significant contributor to modern physics.',
      email: 'cv.raman@iisc.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CV_Raman.jpg',
      tags: ['physics', 'optics', 'indian', 'nobel-prize', 'spectroscopy'],
      groupMemberships: ['indian-scientists', 'nobel-laureates', 'physics-research'],
      reference: 'https://www.nobelprize.org/prizes/physics/1930/raman/biographical/',
      quote: 'Ask Nature; she is the best teacher.'
    },
    {
      id: 'a-p-j-abdul-kalam',
      fullName: 'अब्दुल कलाम / A. P. J. Abdul Kalam',
      dateOfBirth: new Date('1931-10-15'),
      pronouns: 'he/him',
      bio: 'A. P. J. Abdul Kalam, known as the "Missile Man of India," played a pivotal role in developing India\'s ballistic missile and nuclear weapons programs. As a scientist and engineer, he led the development of the Agni and Prithvi missiles and contributed to India\'s first nuclear test in 1998. Later serving as the 11th President of India, Kalam inspired millions of young people to pursue science and technology, earning the title "People\'s President" for his dedication to education and youth empowerment.',
      email: 'apj.kalam@drdo.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Dr_A_P_J_Abdul_Kalam.jpg',
      tags: ['aerospace-engineering', 'missiles', 'indian', 'president', 'nuclear-technology'],
      groupMemberships: ['indian-scientists', 'aerospace-research', 'drdo'],
      reference: 'https://www.britannica.com/biography/A-P-J-Abdul-Kalam',
      quote: 'Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.'
    },
    {
      id: 'teuku-mohammad-hassan',
      fullName: 'Teuku Mohammad Hassan',
      dateOfBirth: new Date('1906-01-01'),
      pronouns: 'he/him',
      bio: 'Teuku Mohammad Hassan was Indonesia\'s pioneering geologist who established the nation\'s geological survey and advanced understanding of Southeast Asian tectonics. His research on the geological structure of the Indonesian archipelago provided crucial insights into the region\'s volcanic activity and earthquake patterns. Hassan\'s work laid the foundation for modern geological studies in Indonesia and contributed significantly to natural disaster preparedness in one of the world\'s most seismically active regions.',
      email: 't.hassan@geology.test',
      phone: null,
      picture: 'https://placeholder.test/teuku-hassan.jpg',
      tags: ['geology', 'tectonics', 'indonesian', 'seismology', 'natural-disasters'],
      groupMemberships: ['indonesian-scientists', 'geological-survey', 'southeast-asian-research'],
      reference: 'https://en.wikipedia.org/wiki/Geology_of_Indonesia',
      quote: 'Understanding the Earth beneath our feet is the first step in protecting those who walk upon it.'
    },
    {
      id: 'flossie-wong-staal',
      fullName: 'Flossie Wong-Staal (黃以靜)',
      dateOfBirth: new Date('1947-08-27'),
      pronouns: 'she/her',
      bio: 'Flossie Wong-Staal was a pioneering virologist who played a crucial role in identifying HIV as the cause of AIDS and developing the first genetic map of the virus. Born in China and trained in the United States, she was the first scientist to clone HIV and determine its complete genetic structure. Her groundbreaking research provided the foundation for HIV testing, antiviral drug development, and vaccine research, making her one of the most influential scientists in the fight against AIDS.',
      email: 'fwong.staal@scripps.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Flossie_Wong-Staal.jpg',
      tags: ['virology', 'hiv-aids', 'genetics', 'chinese-american', 'medical-research'],
      groupMemberships: ['medical-researchers', 'virology-research', 'scripps-research'],
      reference: 'https://www.scripps.edu/news-events/press-room/2020/20200715-wong-staal.html',
      quote: 'Science is about asking questions and not being afraid of the answers.'
    },
    {
      id: 'cheikh-anta-diop',
      fullName: 'Cheikh Anta Diop',
      dateOfBirth: new Date('1923-12-29'),
      pronouns: 'he/him',
      bio: 'Cheikh Anta Diop was a Senegalese historian, anthropologist, and physicist who revolutionized the study of ancient African civilizations through scientific methods. He developed carbon-dating techniques specifically for African archaeological sites and used melanin analysis to demonstrate that ancient Egyptians were Black Africans. His multidisciplinary approach, combining physics, chemistry, and archaeology, challenged Eurocentric historical narratives and established African contributions to world civilization on scientific grounds.',
      email: 'ca.diop@dakar.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Cheikh_Anta_Diop.jpg',
      tags: ['physics', 'archaeology', 'senegalese', 'carbon-dating', 'african-history'],
      groupMemberships: ['african-scientists', 'archaeology-research', 'dakar-university'],
      reference: 'https://www.britannica.com/biography/Cheikh-Anta-Diop',
      quote: 'The African must be able to engage in discourse with the rest of the world on an equal footing.'
    },
    {
      id: 'wangari-maathai-scientist',
      fullName: 'Wangari Muta Maathai',
      dateOfBirth: new Date('1940-04-01'),
      pronouns: 'she/her',
      bio: 'Wangari Maathai was a Kenyan environmental scientist who founded the Green Belt Movement, combining environmental conservation with community empowerment and women\'s rights. With a Ph.D. in biological sciences, she understood that deforestation and environmental degradation were interconnected with poverty and social injustice. Her scientific approach to reforestation, focusing on indigenous tree species and community-based conservation, earned her the Nobel Peace Prize in 2004 and established her as a pioneer in sustainable development.',
      email: 'w.maathai@greenbelt.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wangari_Maathai_in_Nairobi.jpg',
      tags: ['environmental-science', 'forestry', 'kenyan', 'nobel-prize', 'sustainability'],
      groupMemberships: ['african-scientists', 'environmental-researchers', 'green-belt-movement'],
      reference: 'https://www.nobelprize.org/prizes/peace/2004/maathai/biographical/',
      quote: 'We cannot tire or give up. We owe it to the present and future generations of all species to rise up and walk!'
    },
    {
      id: 'thomas-adeoye-lambo',
      fullName: 'Thomas Adeoye Lambo',
      dateOfBirth: new Date('1923-03-29'),
      pronouns: 'he/him',
      bio: 'Thomas Adeoye Lambo was a Nigerian psychiatrist who revolutionized mental health care in Africa and globally as the first African to lead the World Health Organization\'s mental health program. He integrated traditional African healing practices with modern psychiatry, developing the "Aro Village System" which treated mental illness within community settings rather than isolated institutions. His innovative approach influenced global mental health policy and demonstrated how indigenous knowledge could enhance modern medical practice.',
      email: 't.lambo@who.test',
      phone: null,
      picture: 'https://placeholder.test/thomas-lambo.jpg',
      tags: ['psychiatry', 'mental-health', 'nigerian', 'who', 'community-care'],
      groupMemberships: ['african-scientists', 'medical-researchers', 'who-mental-health'],
      reference: 'https://www.who.int/news-room/feature-stories/detail/thomas-adeoye-lambo',
      quote: 'Mental health is not just the absence of mental illness, but a state of complete physical, mental and social well-being.'
    },
    {
      id: 'quarraisha-abdool-karim',
      fullName: 'Quarraisha Abdool Karim',
      dateOfBirth: new Date('1960-07-29'),
      pronouns: 'she/her',
      bio: 'Quarraisha Abdool Karim is a South African infectious diseases epidemiologist who has led groundbreaking research on HIV prevention, particularly focusing on women and adolescents in Africa. Her work on microbicides and pre-exposure prophylaxis (PrEP) has provided crucial tools for HIV prevention in populations most at risk. As one of Africa\'s leading scientists, she has shaped global HIV research policy and demonstrated how locally-conducted research can address global health challenges.',
      email: 'q.abdoolkarim@caprisa.test',
      phone: null,
      picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Quarraisha_Abdool_Karim.jpg',
      tags: ['epidemiology', 'hiv-prevention', 'south-african', 'infectious-diseases', 'public-health'],
      groupMemberships: ['african-scientists', 'medical-researchers', 'caprisa'],
      reference: 'https://www.caprisa.org/about-us/leadership/prof-quarraisha-abdool-karim',
      quote: 'Science must serve humanity, and research must address the needs of those most vulnerable.'
    }
  ],
  groups: [
    {
      id: 'nasa-mathematics',
      name: 'NASA Mathematics Division',
      about: 'The mathematics division at NASA responsible for orbital calculations, trajectory analysis, and mathematical modeling for space missions.',
      email: 'mathematics@nasa.test',
      website: 'https://www.nasa.gov/mathematics',
      picture: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png',
      reference: 'https://www.nasa.gov/centers/langley/about/'
    },
    {
      id: 'african-american-scientists',
      name: 'African American Scientists Network',
      about: 'A professional network supporting African American scientists and engineers in their careers and research.',
      email: 'info@africanamericanscientists.test',
      website: 'https://africanamericanscientists.org',
      picture: null
    },
    {
      id: 'columbia-physics',
      name: 'Columbia University Physics Department',
      about: 'The physics department at Columbia University, known for groundbreaking research in particle physics and nuclear physics.',
      email: 'physics@columbia.test',
      website: 'https://physics.columbia.edu',
      picture: 'https://physics.columbia.edu/sites/default/files/content/Columbia_Physics_Logo.png',
      reference: 'https://physics.columbia.edu/'
    },
    {
      id: 'experimental-physicists',
      name: 'Experimental Physics Society',
      about: 'Professional society for experimental physicists working in nuclear physics, particle physics, and related fields.',
      email: 'contact@experimentalphysics.test',
      website: 'https://experimentalphysics.org',
      picture: null
    },
    {
      id: 'computer-pioneers',
      name: 'Computer Pioneers Association',
      about: 'Organization recognizing and preserving the history of early computer scientists and programmers.',
      email: 'info@computerpioneers.test',
      website: 'https://computerpioneers.org',
      picture: null
    },
    {
      id: 'mathematical-history',
      name: 'Mathematical History Society',
      about: 'Society dedicated to studying and preserving the history of mathematics and mathematical discoveries.',
      email: 'contact@mathhistory.test',
      website: 'https://mathhistory.org',
      picture: null
    },
    {
      id: 'sorbonne-physics',
      name: 'Sorbonne University Physics Department',
      about: 'The physics department at Sorbonne University, continuing the legacy of Marie Curie\'s research.',
      email: 'physique@sorbonne-universite.test',
      website: 'https://www.sorbonne-universite.fr/physics',
      picture: null
    },
    {
      id: 'radioactivity-research',
      name: 'Radioactivity Research Institute',
      about: 'Research institute focused on the study of radioactive materials and their applications in medicine and industry.',
      email: 'research@radioactivity.test',
      website: 'https://radioactivity.org',
      picture: null
    },
    {
      id: 'west-area-computing',
      name: 'West Area Computing Unit',
      about: 'The computing unit at NASA\'s Langley Research Center where African American women mathematicians performed crucial calculations.',
      email: 'computing@nasa.test',
      website: 'https://www.nasa.gov/langley',
      picture: null
    },
    {
      id: 'navy-computing',
      name: 'US Navy Computing Division',
      about: 'The computing division of the United States Navy, responsible for military computing and programming.',
      email: 'computing@navy.test',
      website: 'https://www.navy.mil/computing',
      picture: null
    },
    {
      id: 'programming-pioneers',
      name: 'Programming Pioneers Society',
      about: 'Professional society honoring early computer programmers and software engineers.',
      email: 'info@programmingpioneers.test',
      website: 'https://programmingpioneers.org',
      picture: null
    },
    {
      id: 'kings-college-chemistry',
      name: 'King\'s College London Chemistry Department',
      about: 'The chemistry department at King\'s College London, known for research in molecular biology and crystallography.',
      email: 'chemistry@kcl.test',
      website: 'https://www.kcl.ac.uk/chemistry',
      picture: null
    },
    {
      id: 'molecular-biology-research',
      name: 'Molecular Biology Research Institute',
      about: 'Research institute focused on the molecular basis of biological processes and structures.',
      email: 'research@molecularbiology.test',
      website: 'https://molecularbiology.org',
      picture: null
    },
    {
      id: 'rpi-physics',
      name: 'Rensselaer Polytechnic Institute Physics Department',
      about: 'The physics department at RPI, known for research in theoretical physics and materials science.',
      email: 'physics@rpi.test',
      website: 'https://science.rpi.edu/physics',
      picture: null
    },
    {
      id: 'mit-alumni',
      name: 'MIT Alumni Association',
      about: 'Alumni association for the Massachusetts Institute of Technology, supporting graduates in their careers.',
      email: 'alumni@mit.test',
      website: 'https://alum.mit.edu',
      picture: null
    },
    {
      id: 'nasa-engineering',
      name: 'NASA Engineering Division',
      about: 'The engineering division at NASA responsible for spacecraft design, testing, and mission support.',
      email: 'engineering@nasa.test',
      website: 'https://www.nasa.gov/engineering',
      picture: null
    },
    {
      id: 'space-shuttle-program',
      name: 'Space Shuttle Program',
      about: 'NASA\'s Space Shuttle program that operated from 1981 to 2011, enabling human spaceflight and scientific research.',
      email: 'shuttle@nasa.test',
      website: 'https://www.nasa.gov/space-shuttle',
      picture: null
    },
    {
      id: 'janegoodall-institute',
      name: 'Jane Goodall Institute',
      about: 'Non-profit organization founded by Jane Goodall dedicated to wildlife research, education, and conservation.',
      email: 'info@janegoodall.test',
      website: 'https://www.janegoodall.org',
      picture: null
    },
    {
      id: 'primatology-research',
      name: 'Primatology Research Society',
      about: 'Professional society for researchers studying primates and their behavior.',
      email: 'contact@primatology.test',
      website: 'https://primatology.org',
      picture: null
    },
    {
      id: 'cern-physics',
      name: 'CERN Physics Division',
      about: 'The physics division at CERN, the European Organization for Nuclear Research, conducting particle physics experiments.',
      email: 'physics@cern.test',
      website: 'https://home.cern/science/physics',
      picture: null
    },
    {
      id: 'particle-detection',
      name: 'Particle Detection Research Group',
      about: 'Research group focused on developing and improving particle detectors for high-energy physics experiments.',
      email: 'detection@particlephysics.test',
      website: 'https://particlephysics.org/detection',
      picture: null
    },
    {
      id: 'psychology-research',
      name: 'Psychology Research Institute',
      about: 'Research institute conducting studies in social psychology, child development, and educational psychology.',
      email: 'research@psychology.test',
      website: 'https://psychology.org',
      picture: null
    },
    {
      id: 'education-psychology',
      name: 'Educational Psychology Association',
      about: 'Professional association for psychologists working in educational settings and research.',
      email: 'info@edpsychology.test',
      website: 'https://edpsychology.org',
      picture: null
    },
    {
      id: 'carnegie-observatories',
      name: 'Carnegie Observatories',
      about: 'Research organization operating astronomical observatories and conducting research in astronomy and astrophysics.',
      email: 'info@carnegieobservatories.test',
      website: 'https://carnegieobservatories.org',
      picture: null
    },
    {
      id: 'dark-matter-research',
      name: 'Dark Matter Research Consortium',
      about: 'International consortium of researchers studying dark matter and its role in the universe.',
      email: 'research@darkmatter.test',
      website: 'https://darkmatter.org',
      picture: null
    },
    {
      id: 'lewis-research-center',
      name: 'NASA Glenn Research Center',
      about: 'NASA research center in Cleveland, Ohio, focused on aeronautics and space technology development.',
      email: 'info@nasa.test',
      website: 'https://www.nasa.gov/glenn',
      picture: null
    },
    {
      id: 'brynmawr-mathematics',
      name: 'Bryn Mawr College Mathematics Department',
      about: 'The mathematics department at Bryn Mawr College, known for its commitment to women\'s mathematical education.',
      email: 'math@brynmawr.test',
      website: 'https://www.brynmawr.edu/mathematics',
      picture: null
    },
    {
      id: 'mathematical-education',
      name: 'Mathematical Education Society',
      about: 'Professional society promoting excellence in mathematics education at all levels.',
      email: 'info@matheducation.test',
      website: 'https://matheducation.org',
      picture: null
    },
    {
      id: 'langley-research-center',
      name: 'NASA Langley Research Center',
      about: 'NASA research center in Hampton, Virginia, focused on aeronautics research and technology development.',
      email: 'info@nasa.test',
      website: 'https://www.nasa.gov/langley',
      picture: null
    },
    {
      id: 'french-mathematics',
      name: 'French Mathematical Society',
      about: 'Professional society for mathematicians in France, promoting mathematical research and education.',
      email: 'contact@frenchmathematics.test',
      website: 'https://frenchmathematics.fr',
      picture: null
    },
    {
      id: 'german-mathematics',
      name: 'German Mathematical Society',
      about: 'Professional society for mathematicians in Germany, advancing mathematical research and collaboration.',
      email: 'contact@germanmathematics.test',
      website: 'https://germanmathematics.de',
      picture: null
    },
    {
      id: 'russian-mathematics',
      name: 'Russian Mathematical Society',
      about: 'Professional society for mathematicians in Russia, promoting mathematical research and international collaboration.',
      email: 'contact@russianmathematics.test',
      website: 'https://russianmathematics.ru',
      picture: null
    },
    {
      id: 'chinese-astronomy',
      name: 'Chinese Astronomical Society',
      about: 'Professional society for astronomers in China, advancing astronomical research and education.',
      email: 'contact@chineseastronomy.test',
      website: 'https://chineseastronomy.cn',
      picture: null
    },
    {
      id: 'royal-astronomical-society',
      name: 'Royal Astronomical Society',
      about: 'Professional society for astronomers in the United Kingdom, promoting astronomical research and education.',
      email: 'contact@ras.test',
      website: 'https://ras.org.uk',
      picture: null
    },
    {
      id: 'stellar-astronomy-research',
      name: 'Stellar Astronomy Research Group',
      about: 'Research group focused on the study of stars, stellar evolution, and stellar systems.',
      email: 'research@stellarastronomy.test',
      website: 'https://stellarastronomy.org',
      picture: null
    },
    {
      id: 'italian-mathematics',
      name: 'Italian Mathematical Society',
      about: 'Professional society for mathematicians in Italy, advancing mathematical research and collaboration.',
      email: 'contact@italianmathematics.test',
      website: 'https://italianmathematics.it',
      picture: null
    },
    {
      id: 'oxford-chemistry',
      name: 'University of Oxford Chemistry Department',
      about: 'The chemistry department at the University of Oxford, known for research in crystallography and biochemistry.',
      email: 'chemistry@ox.test',
      website: 'https://www.chem.ox.ac.uk',
      picture: null
    },
    {
      id: 'crystallography-research',
      name: 'Crystallography Research Institute',
      about: 'Research institute focused on the study of crystal structures and their applications in chemistry and biology.',
      email: 'research@crystallography.test',
      website: 'https://crystallography.org',
      picture: null
    },
    {
      id: 'vassar-astronomy',
      name: 'Vassar College Astronomy Department',
      about: 'The astronomy department at Vassar College, known for its pioneering role in women\'s astronomy education.',
      email: 'astronomy@vassar.test',
      website: 'https://astronomy.vassar.edu',
      picture: null
    },
    {
      id: 'american-astronomical-society',
      name: 'American Astronomical Society',
      about: 'Professional society for astronomers in the United States, promoting astronomical research and education.',
      email: 'contact@aas.test',
      website: 'https://aas.org',
      picture: null
    },
    {
      id: 'ancient-mathematics',
      name: 'Ancient Mathematics Society',
      about: 'Society dedicated to studying and preserving the history of ancient mathematics and mathematical discoveries.',
      email: 'contact@ancientmathematics.test',
      website: 'https://ancientmathematics.org',
      picture: null
    },
    {
      id: 'alexandria-school',
      name: 'Alexandria School of Mathematics',
      about: 'Historical institution representing the mathematical and philosophical traditions of ancient Alexandria.',
      email: 'contact@alexandriaschool.test',
      website: 'https://alexandriaschool.org',
      picture: null
    },
    {
      id: 'nuclear-physics-research',
      name: 'Nuclear Physics Research Institute',
      about: 'Research institute focused on the study of nuclear processes, radioactivity, and nuclear fission.',
      email: 'research@nuclearphysics.test',
      website: 'https://nuclearphysics.org',
      picture: null
    },
    {
      id: 'austrian-physics',
      name: 'Austrian Physics Society',
      about: 'Professional society for physicists in Austria, promoting physics research and education.',
      email: 'contact@austrianphysics.test',
      website: 'https://austrianphysics.at',
      picture: null
    },
    {
      id: 'danish-astronomy',
      name: 'Danish Astronomical Society',
      about: 'Professional society for astronomers in Denmark, promoting astronomical research and education.',
      email: 'contact@danishastronomy.test',
      website: 'https://danishastronomy.dk',
      picture: null
    },
    {
      id: 'renaissance-science',
      name: 'Renaissance Science Society',
      about: 'Society dedicated to studying and preserving the history of Renaissance science and scientific discoveries.',
      email: 'contact@renaissancescience.test',
      website: 'https://renaissancescience.org',
      picture: null
    },
    {
      id: 'german-natural-history',
      name: 'German Natural History Society',
      about: 'Professional society for naturalists and biologists in Germany, promoting research in natural history.',
      email: 'contact@germannaturalhistory.test',
      website: 'https://germannaturalhistory.de',
      picture: null
    },
    {
      id: 'entomology-research',
      name: 'Entomology Research Institute',
      about: 'Research institute focused on the study of insects and their role in ecosystems.',
      email: 'research@entomology.test',
      website: 'https://entomology.org',
      picture: null
    },
    {
      id: 'padua-university',
      name: 'University of Padua',
      about: 'One of the oldest universities in Europe, known for its contributions to mathematics and philosophy.',
      email: 'info@unipd.test',
      website: 'https://www.unipd.it',
      picture: null
    },
    {
      id: 'indian-scientists',
      name: 'Indian Scientists Association',
      about: 'Organization representing scientists and researchers from India, promoting scientific collaboration and excellence.',
      email: 'contact@indianscientists.test',
      website: 'https://indianscientists.org',
      picture: null
    },
    {
      id: 'indonesian-scientists',
      name: 'Indonesian Scientific Community',
      about: 'Professional network for scientists and researchers in Indonesia, advancing scientific knowledge and innovation.',
      email: 'info@indonesianscience.test',
      website: 'https://indonesianscience.id',
      picture: null
    },
    {
      id: 'african-scientists',
      name: 'African Academy of Sciences',
      about: 'Continental organization promoting scientific research and development across Africa, fostering collaboration among African scientists.',
      email: 'contact@aas.org.test',
      website: 'https://aasciences.org',
      picture: null
    },
    {
      id: 'southeast-asian-research',
      name: 'Southeast Asian Research Network',
      about: 'Regional collaboration platform for scientific research and innovation in Southeast Asia.',
      email: 'research@searnet.test',
      website: 'https://searnet.org',
      picture: null
    },
    {
      id: 'geological-survey',
      name: 'International Geological Survey',
      about: 'Global organization coordinating geological research and earth science studies worldwide.',
      email: 'info@geologicalsurvey.test',
      website: 'https://geologicalsurvey.org',
      picture: null
    },
    {
      id: 'virology-research',
      name: 'International Virology Research Institute',
      about: 'Leading institute for virology research and infectious disease studies, advancing global health security.',
      email: 'research@virology-institute.test',
      website: 'https://virology-institute.org',
      picture: null
    },
    {
      id: 'archaeology-research',
      name: 'African Archaeological Research Foundation',
      about: 'Research foundation dedicated to archaeological studies in Africa and advancing understanding of African civilizations.',
      email: 'contact@africanarchaeology.test',
      website: 'https://africanarchaeology.org',
      picture: null
    },
    {
      id: 'environmental-researchers',
      name: 'Global Environmental Research Network',
      about: 'International network of environmental scientists working on conservation, sustainability, and climate change research.',
      email: 'info@envresearch.test',
      website: 'https://envresearch.org',
      picture: null
    },
    {
      id: 'who-mental-health',
      name: 'WHO Mental Health Programme',
      about: 'World Health Organization program focused on global mental health research, policy, and implementation.',
      email: 'mentalhealth@who.test',
      website: 'https://who.int/mental-health',
      picture: null
    },
    {
      id: 'caprisa',
      name: 'Centre for the AIDS Programme of Research in South Africa',
      about: 'Leading African research organization focused on HIV/AIDS prevention, treatment, and care.',
      email: 'research@caprisa.test',
      website: 'https://caprisa.org',
      picture: null
    },
    {
      id: 'drdo',
      name: 'Defence Research and Development Organisation',
      about: 'Premier defense research organization of India, responsible for military technology development.',
      email: 'contact@drdo.test',
      website: 'https://drdo.gov.in',
      picture: null
    },
    {
      id: 'scripps-research',
      name: 'Scripps Research Institute',
      about: 'American medical research facility focused on biomedical sciences and drug discovery.',
      email: 'info@scripps.test',
      website: 'https://scripps.edu',
      picture: null
    },
    {
      id: 'green-belt-movement',
      name: 'Green Belt Movement',
      about: 'Grassroots environmental organization founded by Wangari Maathai, focused on tree planting and environmental conservation.',
      email: 'info@greenbeltmovement.test',
      website: 'https://greenbeltmovement.org',
      picture: null
    },
    {
      id: 'aerospace-research',
      name: 'International Aerospace Research Consortium',
      about: 'Global consortium for aerospace research and development, advancing space exploration technologies.',
      email: 'research@aerospace-consortium.test',
      website: 'https://aerospace-research.org',
      picture: null
    },
    {
      id: 'dakar-university',
      name: 'Université Cheikh Anta Diop de Dakar',
      about: 'Leading university in Senegal, named after historian and scientist Cheikh Anta Diop.',
      email: 'contact@ucad.sn.test',
      website: 'https://ucad.sn',
      picture: null
    },
    {
      id: 'cambridge-mathematics',
      name: 'Cambridge Mathematics Faculty',
      about: 'The mathematics faculty at the University of Cambridge, renowned for groundbreaking mathematical research and education.',
      email: 'mathematics@cam.ac.uk.test',
      website: 'https://www.maths.cam.ac.uk',
      picture: null
    },
    {
      id: 'nobel-laureates',
      name: 'Nobel Prize Recipients Association',
      about: 'Professional association connecting Nobel Prize winners across all disciplines to promote scientific collaboration.',
      email: 'contact@nobellaureates.test',
      website: 'https://www.nobelprize.org',
      picture: null
    },
    {
      id: 'physics-research',
      name: 'International Physics Research Society',
      about: 'Global society of physicists conducting research in theoretical and experimental physics across multiple disciplines.',
      email: 'research@physicsresearch.test',
      website: 'https://physicsresearch.org',
      picture: null
    },
    {
      id: 'medical-researchers',
      name: 'International Medical Research Association',
      about: 'Professional association for medical researchers working in virology, public health, and clinical research.',
      email: 'contact@medicalresearchers.test',
      website: 'https://medicalresearchers.org',
      picture: null
    }
  ],
  events: [
    {
      id: 'stem-achievement-conference-2024',
      name: 'STEM Achievement Recognition Conference 2024',
      date: new Date('2024-06-15'),
      attendeeIds: ['katherine-johnson', 'shirley-ann-jackson', 'grace-hopper', 'jane-goodall']
    },
    {
      id: 'women-in-physics-symposium',
      name: 'Women in Physics Symposium',
      date: new Date('2024-09-20'),
      attendeeIds: ['marie-curie', 'chien-shiung-wu', 'vera-rubin', 'sau-lan-wu']
    },
    {
      id: 'computer-science-pioneers-meeting',
      name: 'Computer Science Pioneers Meeting',
      date: new Date('2024-11-10'),
      attendeeIds: ['ada-lovelace', 'grace-hopper', 'dorothy-vaughan', 'annie-easley']
    },
    {
      id: 'mathematics-education-workshop',
      name: 'Mathematics Education Workshop',
      date: new Date('2024-07-25'),
      attendeeIds: ['katherine-johnson', 'charlotte-angas-scott', 'dorothy-vaughan', 'annie-easley']
    },
    {
      id: 'space-exploration-summit',
      name: 'Space Exploration and Technology Summit',
      date: new Date('2024-08-30'),
      attendeeIds: ['katherine-johnson', 'kalpana-chawla', 'mary-jackson', 'dorothy-vaughan']
    }
  ]
};

export default stemAchievementsData;
