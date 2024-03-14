'use client'
import { AuthService } from '@/services/authService';
import { redirect, useRouter } from 'next/navigation';

function Page() {

  const auth = localStorage.getItem('auth_token');
  const api = AuthService();
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    if (auth){
      api.postLogout().then(res => {
        alert(res.data.msg);
        localStorage.removeItem('auth_token');
        router.push('/login');
      }).catch(error => {
        console.log(error);
        localStorage.removeItem('auth_token');
      })
    }
  }

  return (
    <>
    
    {
      auth ? 
      <div>
        <h2>Rutas privadas</h2>
        <p>Esto puedes verlo</p>
        <button onClick={handleLogout}>logout</button>
      </div> 
      : 
      redirect('/login')
    }
    </>
    
  )
}

export default Page