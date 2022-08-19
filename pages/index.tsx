import { Container, Title } from "@mantine/core";
import type { GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import WebLayout from "@/components/layouts/web-layout/WebLayout";

const Home: NextPage = () => {
  return (
    <WebLayout>
      <Container size="xl" py={60}>
        <Title size={42} align="center">
          Hari Kesehatan National 2022
        </Title>
      </Container>
    </WebLayout>
  );
};

export default Home;

export const getStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
