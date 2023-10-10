import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Loader from 'components/Loader';
export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>

      <footer></footer>
    </>
  );
};
