import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
    const intersectingIds = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersectingIds.add(entry.target.id)
          else intersectingIds.delete(entry.target.id)
        })

        const activationLine = window.innerHeight * 0.305
        const activeElement = elements
          .filter((element) => intersectingIds.has(element.id))
          .find((element) => {
            const { top, bottom } = element.getBoundingClientRect()
            return top <= activationLine && bottom > activationLine
          })

        setActiveSection(activeElement?.id ?? '')
      },
      { rootMargin: '-30% 0px -69% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
