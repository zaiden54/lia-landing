import { Description } from '../Description/Description';
import './Header.css';

export function Header() {
  return (
    <div className="header">
        <div className="header__container">
          <Description/>
        </div>
    </div>
  );
}
