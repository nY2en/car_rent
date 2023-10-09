import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Section } from './SharedLayout.styled';
import Header from 'components/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Section>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Section>
        </main>

        <footer></footer>
      </Container>
    </>
  );
};
