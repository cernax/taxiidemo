import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext'
import { Collapse, Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faSignOutAlt, faUsers, faChartBar, faCog, faClipboardList, faBuildingColumns, faTicket, faGear, faFileLines, faLaptop } from '@fortawesome/free-solid-svg-icons';
import './Sidenav.css'

const Sidenav = () => {
    const { logout } = useAuth();
    const [open, setOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    const handleLogout = () => {
      logout();
      <Navigate to="/" /> 
    };

    const updateDimensions = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    React.useEffect(() => {
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
          <Collapse in={open}>
            <div id="sidenav-collapse" className="sidenav bg-light">
              <Nav className="flex-column">
                <Link to="/dashboard" className="nav-link">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  {!isMobile && <span> Dashboard</span>}
                </Link>
                <Link to="/ingresar-carrera" className="nav-link">
                  <FontAwesomeIcon icon={faClipboardList} />
                  {!isMobile && <span> Ingresar Carrera - falta</span>}
                </Link>
                <Link to="/usuarios" className="nav-link">
                  <FontAwesomeIcon icon={faUsers} />
                  {!isMobile && <span> Usuarios</span>}
                </Link>
                <Link to="/permisos" className="nav-link">
                  <FontAwesomeIcon icon={faCog} />
                  {!isMobile && <span> Permisos</span>}
                </Link>
                <Link to="/mis-ventas" className="nav-link">
                  <FontAwesomeIcon icon={faChartBar} />
                  {!isMobile && <span> Mis Ventas</span>}
                </Link>
                <Link to="/cuentas-banco" className="nav-link">
                  <FontAwesomeIcon icon={faBuildingColumns} />
                  {!isMobile && <span> Cuentas de Banco</span>}
                </Link>
                <Link to="/tickets" className="nav-link">
                  <FontAwesomeIcon icon={faTicket} />
                  {!isMobile && <span> Tickets</span>}
                </Link>
                <Link to="/tickets" className="nav-link">
                  <FontAwesomeIcon icon={faTicket} />
                  {!isMobile && <span> Tickets por anular - falta</span>}
                </Link>   
                <Link to="/tickets" className="nav-link">
                  <FontAwesomeIcon icon={faTicket} />
                  {!isMobile && <span> asignacion de tickets - falta</span>}
                </Link>   
                <Link to="/reportes" className="nav-link">
                  <FontAwesomeIcon icon={faFileLines} />
                  {!isMobile && <span> reportes</span>}
                </Link>   
                <Link to="/tickets" className="nav-link">
                  <FontAwesomeIcon icon={faLaptop} />
                  {!isMobile && <span> pasar de nomina a escaneado - falta</span>}
                </Link>       
                <Link to="/configuracion" className="nav-link">
                  <FontAwesomeIcon icon={faGear} />
                  {!isMobile && <span> Configuración</span>}
                </Link>
                <Link className="nav-link" onClick={handleLogout} >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  {!isMobile && <span> Logout</span>}
                </Link>
              </Nav>
            </div>
          </Collapse>
    );
  };
  
export default Sidenav;