import { Link } from 'react-router-dom';
import { Container } from './styles';

export function Header() {
    return (
        <Container className="content-flex">
            <nav className="wrapper">
                <Link to="/">Sobre</Link>
                <Link to="/todo">Minhas Listas</Link>
            </nav>
        </Container>
    )
}