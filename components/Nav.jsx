import Link from "next/link"

const links = [
  {
    path: '/',
    pathname: 'Home'
  },
  {
    path: '/',
    pathname: 'Find Hotel'
  },
  {
    path: '/',
    pathname: 'About'
  },
  {
    path: '/',
    pathname: 'Contact Us'
  },
]


const Nav = ({containerStyles, listStyles}) => {
  return (
    <Nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {
          links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.path}>
                  {link.pathname}
                </Link>
              </li>
            )  
          })
        }
      </ul>
    </Nav>
  )
}

export default Nav