import Head from 'next/head'
import Link from 'next/link'
import { Container, Nav, NavItem } from 'reactstrap';
import { AuthConsumer } from '../components/Authentication/AuthProvider'
const Layout = ({ children, title = 'Welcome to Nextjs' }) => (
	<div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    </Head>
				<header>
					<Nav className="navbar navbar-dark bg-dark">
						<NavItem>
							<Link href='/'>
								<a className="navbar-brand">Home</a>
							</Link>
						</NavItem>
						 <NavItem className="ml-auto">
							 <Link href='/signin'>
								 <a className="nav-link">Sign In</a>
							 </Link>
						 </NavItem>
						<NavItem>
							<Link href='/signup'>
								<a className="nav-link"> Sign Up</a>
							</Link>
						</NavItem>
					</Nav>
				</header>

				<Container>
					{ children }
				</Container>


    <footer className="footer">
      {'Strapi footer'}
      <style jsx>{`
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
      `}
    </style>
    </footer>

  </div>

)
export default Layout
