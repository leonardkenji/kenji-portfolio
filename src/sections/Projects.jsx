const personalProjects = [{
  title: "Pokeclo",
  description: "A digital closet app where you can manage your clothing, combine, use to prove new clothes with your current clothes when at the shop before buy it",
  image: "public/ask-the-duck.png",
  tags: ["Rails", "LLM", "Stimulus"],
  link: "",
  Github: "",
},
{
  title: "Pokemon Adventure",
  description: "Lorem Ipsum",
  image: "public/ask-the-duck.png",
  tags: ["Rails", "LLM", "Stimulus"],
  link: "",
  Github: "",
},
{
  title: "JP4U ERP",
  description: "Lorem Ipsum",
  image: "public/ask-the-duck.png",
  tags: ["Rails", "LLM", "Stimulus"],
  link: "",
  Github: "",
},
{
  title: "JDM Hunter",
  description: "Lorem Ipsum",
  image: "public/ask-the-duck.png",
  tags: ["Rails", "LLM", "Stimulus"],
  link: "",
  Github: "",
}]

export const Projects = () => {
  return <section id="projects" className="py-10 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="animate-fade-in container mx-auto px-6 text-center">
        <p className="text-2xl">Technologies I work with</p>
      </div>
      <div className=" grid md:grid-cols-2 gap-8">
        {personalProjects.map((project,index) => (
          <div key={index} className="rounded-2xl overflow-hidden">
            {/* image  */}
            <div className="relative overflow-hidden aspect-video">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover "/>
            </div>
            {/* Content  */}
            <div>
              <div className="my-2 p-2">
                <p>{project.title}</p>
              </div>
              <div className="my-2 p-2">
                <p>{project.description}</p>
              </div>
              <div className="my-2 p-2">
                {project.tags.map((tag, index) => (
                  <div key={index}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="container flex gap-3">
                <a href={project.Github}> GitHub Repo</a>
                <a href={project.link}> Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </section>
};
