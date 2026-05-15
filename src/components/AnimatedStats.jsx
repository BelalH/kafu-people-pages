import { useEffect, useState } from "react";
import { FaGlobe, FaTasks, FaAward, FaUsers } from "react-icons/fa";

const AnimatedStats = () => {
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    team: 0,
  });

  const targetStats = {
    clients: 24,
    projects: 65,
    experience: 5,
    team: 5,
  };

  const animateNumbers = () => {
    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);

    const incrementValues = Object.keys(targetStats).reduce(
      (increments, key) => {
        increments[key] = targetStats[key] / totalFrames;
        return increments;
      },
      {},
    );

    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      setStats((prevStats) => {
        const updatedStats = { ...prevStats };
        Object.keys(targetStats).forEach((key) => {
          updatedStats[key] = Math.min(
            prevStats[key] + incrementValues[key],
            targetStats[key],
          );
        });
        return updatedStats;
      });

      if (currentFrame >= totalFrames) {
        clearInterval(interval);
      }
    }, duration / totalFrames);
  };

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (!statsSection) return;
      const rect = statsSection.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        animateNumbers();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { key: "clients", icon: FaGlobe, label: "Trusted Clients" },
    { key: "projects", icon: FaTasks, label: "Projects Completed" },
    { key: "experience", icon: FaAward, label: "Years of Experience" },
    { key: "team", icon: FaUsers, label: "Professional Team" },
  ];

  return (
    <div
      id="stats-section"
      className="w-full bg-primary py-12 font-inter text-cWhite text-center"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {items.map(({ key, icon: Icon, label }) => (
          <div key={key} className="flex flex-col items-center">
            <Icon size={40} className="mb-4 text-primary-light opacity-90" />
            <h3 className="text-3xl md:text-[42px] font-bold">
              {Math.round(stats[key])}+
            </h3>
            <p className="text-sm md:text-base text-slate-200">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStats;
