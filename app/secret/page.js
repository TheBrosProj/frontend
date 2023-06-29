// pages/index.jsx
'use client'
import { useAuth } from '@/lib/auth';


export default function Secret() {
  const auth = useAuth();
  return (
    <>
    {auth.user ? (
      <>logged in</>
    ): (
      <>not logged in</>
    )}
    </>
  );
}
