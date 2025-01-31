import { FC } from "react"
import { ExperienceItem } from "../components/ExperienceItem"

interface ExperienceProps {
  translations: {
    experience: {
      title: string
      items: Array<{
        title: string
        company: string
        companyLogoKey: string
        period: string
        description: string
        technologies: Array<{
          name: string
          logo: string
        }>
      }>
    }
  }
}

export const Experience: FC<ExperienceProps> = ({ translations }) => {
  return (
    <section id="experience" className="py-20 px-4 md:px-10 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{translations.experience.title}</h2>
      <div className="relative">
        {/* Línea roja vertical, visible solo en md y superiores */}
        <div className="hidden md:block absolute left-[23px] h-full w-[2px] bg-red-600 top-[9px]"></div>
        <div className="space-y-8 md:space-y-16">
          {translations.experience.items.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

