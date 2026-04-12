import { ExternalLink } from "lucide-react";

const personalProjects = [
  {
    title: "JP4U ERP",
    description: "A web-application for a proxy-buying proxy-shipping company. For the admins: inventory management, invoice generator, shipping label generator with JP Post API, scrape function for Mercari and Yahoo related sites. For the user: Your own inventory management and shipment request",
    image: "public/JP4UApp.png",
    tags: ["Rails", "LLM", "Stimulus", "Bootstrap"],
    link: "https://www.jp4u.online/",
    Github: "https://github.com/leonardkenji/jp4u",
  },
  {
  title: "Pokeclo",
  description: "A digital closet app where you can manage your clothing, build outfits, use to prove new clothes with your current clothes when at the shop before buy it",
  image: "public/POKECLO.png",
  tags: ["Rails", "LLM", "Stimulus", "Bootstrap"],
  link: "https://www.pokeclo.online/",
  Github: "https://github.com/GerthIII/pokeclo",
},
{
  title: "Poke Adventure Planner",
  description: "A web-application with a built in AI feature to help you build Pokemon teams for teh main games.",
  image: "public/PokeAdventure.png",
  tags: ["Rails", "LLM", "Stimulus", "Bootstrap"],
  link: "https://www.poke-adventure-planner.site/",
  Github: "https://github.com/GerthIII/pokemon-adventure-planner",
},
{
  title: "JDM Hunter",
  description: "A web-application where you can see all your favorite JDM for sale in japanese online car sales web site in one single place.",
  image: "public/NSX.png",
  tags: [""],
  link: "",
  Github: "",
}]

export const Projects = () => {
  return <section id="projects" className="py-4 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="animate-fade-in container mx-auto px-6 text-center">
        <p className="text-2xl font-bold mb-5">My Projects</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {personalProjects.map((project,index) => (
          <div key={index} className="rounded-2xl overflow-hidden">
            {/* image  */}
            <div className="relative overflow-hidden aspect-video">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover "/>
            </div>
            {/* Content  */}
            <div>
              <div className="px-2 pt-2">
                <p className="text-primary text-2xl font-bold">{project.title}</p>
              </div>
              <div className="p-2 text-xs">
                <p>{project.description}</p>
              </div>
              <div className="p-2 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <div key={index} className="bg-primary text-background rounded-full px-4 py2 text-sm">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="p-2 flex gap-3">
                <a href={project.Github} className="flex items-center gap-1"> GitHub <ExternalLink /></a>
                <a href={project.link} className="flex items-center gap-1"> Website <ExternalLink /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  </section>
};
