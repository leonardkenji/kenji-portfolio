import { ExternalLink } from "lucide-react";

const personalExperience = [{
  title: "Japan4You LLC",
  position: "Co-founder and Head",
  description: "I am the co-founder and Representative of Japan4You. We are a Japan-based company specializing in proxy shopping and forwarding services, delivering products from Japan to customers overseas. Acting as a bridge between international customers and the Japanese market, we provide safe and seamless access to uniquely Japanese products such as fishing gear, figures, toys, collectibles, and hobby items.",
  入社日: "2024",
  退社: "Present",
  link: "https://www.jp4u.online/",
},
{
  title: "SAGT - Easy car RIDE",
  position: "Marketing Lead",
  description: "Marketing Lead for three Easy car RIDE branches in the Tokai area: Hamamatsu, Aichi, and Mie. Responsible for strategy and managing marketing efforts for Brazilian, Peruvian, and Filipino sales teams.",
  入社日: "2021",
  退社: "2025",
  link: "https://www.easycarride.com/",
},
{
  title: "Tokyo Supercars",
  position: "Marketing Specialist - Freelancer",
  description: "Creating and optimizing paid media campaigns to promote brand awareness and lead generation. Data analysis and insights reports for continuous improvement of social media content and digital marketing strategies.",
  入社日: "2022",
  退社: "2024",
  link: "https://www.tokyosupercars.com/",
},
{
  title: "UT Suriemu 株式会社 ",
  position: "Factory Dispatch Staff",
  description: "Production line staff for the Aisin Seiki in Hekinan and Toyota - Aichi",
  入社日: "2018",
  退社: "2021",
  link: "https://www.ut-g.co.jp/ut-suri-emu/top/",
},
{
  title: "Edelman PR ",
  position: "Associate Account Executive",
  description: "Developed data-driven strategies by analyzing KPIs, monitoring digital presence, and generating insights from social and owned media to optimize performance and communication.",
  入社日: "2014",
  退社: "2017",
  link: "https://www.edelman.com/br/pt-br",
}
]
export const Experience = () => {
  return <section id="experience" className="relative overflow-hidden px-4 py-4">
    <div className="container mx-auto px-6 relative z-10">
      <div className="animate-fade-in container mx-auto px-6 text-center">
        <p className="text-2xl font-bold mb-5">Professional Background</p>
      </div>
    </div>
    <div className="mx-auto max-w-4xl rounded-3xl bg-primary-foreground px-6 py-5">
      <div className="animate-fade-in leading-loose text-justify">
        <div className="grid grid-cols-1 gap-8">
          {personalExperience.map((experience, index) => (
            <div key={index}>
              <div>
                <span className="text-primary font-bold"> {experience.position} </span>
              </div>
              <div className="p-1">
                <a href={experience.link} className="flex gap-2"> {experience.title} <ExternalLink /> </a>
              </div>
              <div className="p-1 text-xs">
                <p> {`${experience.入社日} - ${experience.退社}`} </p>
              </div>
              <div className="p-1 text-xs">
                <p> {experience.description} </p>
              </div>
           </div>
          ))}

        </div>
      </div>
    </div>
  </section>
};
