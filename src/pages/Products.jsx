import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  // const history = useHistory();
  // history.push()
  // history.replace();
  // history.goBack();
  const navigate = useNavigate();
  navigate('path');
  navigate('path', { replace: true })
  navigate(1);
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <button onClick={() => navigate('p1')}>A Book</button>
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
