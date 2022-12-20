import Button from '../../components/utility/Button';
import Card from '../../components/utility/Card';
import Container from '../../components/utility/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (
    <Container>
      <div className="mt-10 mb-6">
        <Card>
          <form className="px-10 py-10">
            <h3 className="text-center text-2xl font-bold mb-10">Admin Login</h3>
            <input type="email" placeholder="Email" required />
            <div className="relative flex items-center">
              <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Password" required />
              {password.length > 0 && (
                <button type="button" className="absolute right-3 top-2 font-semibold" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              )}
            </div>

            <Button>
              <p className="p-1 font-semibold">Login</p>
            </Button>
          </form>
        </Card>
      </div>
      <Card>
        <p className="px-10 py-5 text-center">
          Don't have an account ?{' '}
          <span className="text-[#0095F6] hover:text-[#1C77FF]">
            <Link to="/register">Sign up </Link>
          </span>
        </p>
      </Card>
    </Container>
  );
};

export default Login;
