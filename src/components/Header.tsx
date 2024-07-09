import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { RiShoppingCartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: 60}}>
      <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                style={{width: 500}}
                placeholder='Search a product'
                className='m-auto'
                />
            </Navbar.Text>
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle variant='success'>
                        <RiShoppingCartFill color='white' fontSize='25px' />
                        <Badge bg='none'>{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>
                        <span style={{padding:10}}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
