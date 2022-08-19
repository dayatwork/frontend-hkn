import WebLayout from "@/components/layouts/web-layout/WebLayout";
import { Container, Title } from "@mantine/core";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <WebLayout>
      <Container size="xl" py={60}>
        <Title size={42} align="center">
          About Page
        </Title>
      </Container>
    </WebLayout>
  );
};

export default About;
