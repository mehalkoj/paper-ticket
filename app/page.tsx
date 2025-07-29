import Link from 'next/link'
import Login from './_components/Login';

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen">
        <Login />
      </div>

      <div className="">
        {/* Ticket Box, Each ticket will be a component genereated from tickets in db */}

        </div>


    </section>
  );
}
