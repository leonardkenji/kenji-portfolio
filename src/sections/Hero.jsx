import { __unstable__loadDesignSystem } from "tailwindcss";

export const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">

    {/* black dots */}
    <div className= "absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => (
      <div className="absolute w-1 h-1 rounded-full opacity-20"
      style={{
        backgroundColor: "#000000",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `slow-drift 30s ease-in-out infinite`
      }}
    />
    ))}
    </div>
{/* Content */}
    <div>
      <h1>Leonardo Kenji Kawashita</h1>
    </div>
  </section>
};
