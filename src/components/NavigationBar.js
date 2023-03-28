import { Link, useNavigate } from "react-router-dom"
import { React, useContext } from 'react'
import { AppContext } from "../App.js"
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/images/full/logo.png'
import '../assets/css/style.css'
import { BsFillHouseFill, BsFillPersonFill, BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const NavigationBar = () => {
    const Context = useContext(AppContext);
    let navigasi = useNavigate();
    return (
        <Navbar bg="light" expand="lg" className='border-top border-5 border-primary bg-body shadow-sm rounded fixed-top'>
            <Container>
                <Navbar.Brand href="#home">
                    <Link to='/'>
                        <img
                            alt=""
                            src={logo}
                            width="300"
                            className="align-top"
                        />{' '}
                    </Link>
                </Navbar.Brand>
                <div style={{
                    marginLeft: '300px'
                }}></div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-0"
                        style={{
                            maxHeight: '100px'
                        }}
                        navbarScroll
                    >
                        <Nav.Link className='me-2'>
                            <Link to='/' className="menu">
                                <BsFillHouseFill /> Beranda
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='me-2' >
                            <Link to='/profil' className="menu"><BsFillPersonFill /> Profil
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='me-2'>
                            <Link to='/program' className="menu"><BsFillJournalBookmarkFill /> Program
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='me-2'>
                            <Link to='/kontak' className="menu"><MdOutlinePermContactCalendar /> Kontak
                            </Link>
                        </Nav.Link>
                        <Nav.Link className='me-2'>
                            {
                                Context.user ? (
                                    <div className="dropdown">
                                        <button className="btn btn-primary dropdown-toggle rounded-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                           {Context.user.username}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/paneladmin">Edit Halaman</Link></li>
                                            <li><Link className="dropdown-item" to="/gantipassword">Ganti Password</Link></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><Link className="dropdown-item" to="#" onClick={
                                                () => {
                                                    Context.setUser(null);
                                                    navigasi('/');
                                                }
                                            }>Logout</Link></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <Link to='/login' className="menu" >
                                        <BiLogIn /> Login
                                    </Link>
                                )
                            }

                        </Nav.Link>

                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar