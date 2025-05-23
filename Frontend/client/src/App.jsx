import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <nav className="text-center">
        <h1 className="mb-4">Response headers workshop</h1>
        <div>
          <Link className="btn btn-primary mx-2" to="/blog">
            Blog
          </Link>
          <Link className="btn btn-secondary mx-2" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
