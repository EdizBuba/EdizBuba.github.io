import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
    let observer: IntersectionObserver | undefined

    const observeSections = () => {
      observer?.disconnect()
      const intersectingIds = new Set<string>()
      const viewportHeight = document.documentElement.clientHeight
      const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
      const scrollMargin = Math.max(0, ...elements.map((element) =>
        parseFloat(getComputedStyle(element).scrollMarginTop) || 0,
      ))
      // Keep the 1%-high band below the landing position of sticky-header anchors.
      // IntersectionObserver percentage margins are width-relative, so use pixels.
      const bandHeight = Math.max(1, Math.round(viewportHeight * 0.01))
      const bandTop = Math.min(
        viewportHeight - bandHeight,
        Math.max(Math.round(viewportHeight * 0.3), scrollPadding + scrollMargin + 1),
      )
      const bottomMargin = viewportHeight - bandTop - bandHeight

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) intersectingIds.add(entry.target.id)
            else intersectingIds.delete(entry.target.id)
          })

          // Prefer the incoming section when two sections touch the narrow band.
          // Retain all intersections: callbacks only contain entries that changed.
          const activeId = sectionIds.filter((id) => intersectingIds.has(id)).pop()
          setActiveSection(activeId ?? '')
        },
        { rootMargin: `-${bandTop}px 0px -${bottomMargin}px 0px`, threshold: 0 },
      )

      elements.forEach((element) => observer?.observe(element))
    }

    observeSections()
    window.addEventListener('resize', observeSections)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', observeSections)
    }
  }, [sectionIds])

  return activeSection
}
