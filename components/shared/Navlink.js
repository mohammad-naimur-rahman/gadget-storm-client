import { useRouter } from 'next/router'
import Link from 'next/link'

function Navlink({ href, exact = false, children, ...props }) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    props.className += ' active'
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

export default Navlink
