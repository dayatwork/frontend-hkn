import {
  Box,
  Button,
  createStyles,
  Divider,
  Paper,
  Transition,
} from "@mantine/core";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import { links } from "./links";
import { MobileLinksGroup } from "./MobileLinksGroup";

type MobileNavProps = {
  opened: boolean;
};

const HEADER_HEIGHT = 56;

const useStyles = createStyles((theme) => ({
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

  tagline: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    fontSize: theme.fontSizes.md,
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  sublink: {
    display: "block",
    lineHeight: 1,
    padding: "16px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    "&:hover, &:focus": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 100,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const MobileNav = ({ opened }: MobileNavProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation("common");
  const { push, pathname } = useRouter();

  const mobileLinks = links.map((item) => (
    <MobileLinksGroup
      mini={false}
      {...item}
      key={item.label}
      active={pathname === item.link}
      initiallyOpened={false}
    />
  ));

  return (
    <Transition transition="scale-y" duration={200} mounted={opened}>
      {(styles) => (
        <Paper className={classes.dropdown} withBorder style={styles}>
          {mobileLinks}
          <Divider mt="sm" />
          <Box p="md">
            <Button
              variant="light"
              fullWidth
              onClick={() => push("/register/visitor")}
            >
              {t("register-as-visitor")}
            </Button>

            <Button mt="sm" fullWidth onClick={() => push("/login")}>
              {t("login")}
            </Button>
          </Box>
        </Paper>
      )}
    </Transition>
  );
};

export default MobileNav;
