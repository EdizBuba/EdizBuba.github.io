import { ArrowUp } from 'lucide-react'
import type { Copy } from '../../i18n/types'

interface FooterProps {
  copy: Copy['footer']
}

export function Footer({ copy }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Ediz Buba</p>
        <p>{copy.builtWith}</p>
        <a href="#top">{copy.backToTop}<ArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
