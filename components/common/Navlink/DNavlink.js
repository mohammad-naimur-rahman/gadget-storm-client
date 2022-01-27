import { useRouter } from 'next/router'
import Link from 'next/link'

function DNavlink({ href, exact = false, children, ...props }) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += ' d-active'
  }

  return (
    <Link href={href}>
      <a className="d-link" {...props}>
        {children}
      </a>
    </Link>
  )
}

export default DNavlink
