import Link from 'next/link';
import Login from './_components/Login';
import Ticket from './_components/Ticket';
import { redirect } from 'next/navigation';
import { getSession, login, logout, fetchLogin } from '@/lib';


export async function loginAction(formData: FormData){
            "use server";
            await login(formData);
            redirect('/');
}

export async function logoutAction(formData: FormData){
            'use server';
            await logout();
            redirect('/');
}





export default async function Home() {
      const session = await getSession();
      const data = await fetchLogin();

  return (
      <section>
        <Login action={loginAction}/>
        <pre>{JSON.stringify(session, null, 2)}</pre>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
  );
}
