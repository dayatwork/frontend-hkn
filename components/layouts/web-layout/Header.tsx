import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Text,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ChevronDown } from "tabler-icons-react";
import { LanguagePicker } from "./LanguangePicker";
import MobileNav from "./MobileNav";

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
    borderBottom: 0,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function WebHeader({ links }: HeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { t } = useTranslation("common");

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{t(item.label)}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{t(link.label)}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link href={link.link} key={link.label} passHref>
        <a className={classes.link}>{t(link.label)}</a>
      </Link>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          {/* TODO: Change with logo */}
          <Text weight={600} color="#fff">
            HKN 2022
          </Text>
          <Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <LanguagePicker />
            <Link href="/login" passHref>
              <Button component="a" color="orange">
                Login
              </Button>
            </Link>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
          <MobileNav opened={opened} />
        </div>
      </Container>
    </Header>
  );
}
