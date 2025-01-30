import { type FC, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ExperienceItemProps {
  experience: {
    title: string
    company: string
    companyLogoKey: string
    period: string
    description: string
    technologies: Array<{
      name: string
      logo: string
    }>
  }
  index: number
}

const COMPANY_LOGOS: { [key: string]: string } = {
  fuzati_logo: "/images/fuzati_logo.webp",
  gft_logo: "/images/gft_logo.webp",
  iswo_logo: "/images/iswo_logo.webp",
}

export const ExperienceItem: FC<ExperienceItemProps> = ({ experience, index }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.5,
            delay: index * 0.1,
          },
        },
        hidden: {
          opacity: 0,
          x: 100,
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.5,
          },
        },
      }}
      className="relative flex"
    >
      {/* Punto rojo, visible solo en md y superiores */}
      <div className="hidden md:block absolute left-0 md:left-2 w-8 h-8 bg-red-600 rounded-full mt-2"></div>
      <div className="w-full md:ml-20 rounded-[35px] p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <img
            src={COMPANY_LOGOS[experience.companyLogoKey] || ""}
            alt={experience.company}
            className="w-16 h-16 md:w-18 md:h-18 border border-red-300 rounded-lg overflow-hidden mb-3 md:mr-3"
            onError={(e) => console.log("Error loading image:", COMPANY_LOGOS[experience.companyLogoKey])}
          />
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">{experience.title}</h3>
            <p className="text-red-300 mb-2 md:mb-4">
              {experience.company} | {experience.period}
            </p>
          </div>
        </div>
        <p style={{ whiteSpace: "pre-line" }} className="mb-4">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology, index) => (
            <div key={index} className="flex items-center gap-2 px-3 py-1 border border-red-300 rounded-full">
              <span className="text-sm">{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}