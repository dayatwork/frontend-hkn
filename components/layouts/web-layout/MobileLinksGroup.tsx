import React, { useState } from "react";
import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  createStyles,
  Menu,
  Tooltip,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import {
  Icon as TablerIcon,
  ChevronLeft,
  ChevronRight,
} from "tabler-icons-react";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.md,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: "block",
    textDecoration: "none",
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.colors[theme.primaryColor][0],
    },
  },

  chevron: {
    transition: "transform 200ms ease",
  },
}));

interface LinksGroupProps {
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  mini: boolean;
  link?: string;
  active?: boolean;
}

export function MobileLinksGroup({
  label,
  initiallyOpened,
  links,
  link,
  active,
}: LinksGroupProps) {
  const { classes, theme, cx } = useStyles();
  const { t } = useTranslation("common");
  const { pathname } = useRouter();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;
  const items = (hasLinks ? links : []).map((link) => (
    // <Link key={link.label} href={link.link} passHref>
    //   <Text<"a"> component="a" className={classes.link}>
    //     {link.label}
    //   </Text>
    // </Link>
    <NextLink
      style={{ textDecoration: "none" }}
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.active]: pathname === link.link })}
    >
      {t(`${link.label}`)}
    </NextLink>
  ));

  return (
    <>
      {hasLinks ? (
        <>
          <UnstyledButton
            onClick={() => setOpened((o) => !o)}
            className={cx(classes.control, { [classes.active]: active })}
          >
            <Group position="apart" spacing={0}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box ml="md">{t(`${label}`)}</Box>
              </Box>
              {hasLinks && (
                <ChevronIcon
                  className={classes.chevron}
                  size={14}
                  style={{
                    transform: opened
                      ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                      : "none",
                  }}
                />
              )}
            </Group>
          </UnstyledButton>
          <Collapse in={opened}>{items}</Collapse>
        </>
      ) : (
        link && (
          <NextLink
            style={{ textDecoration: "none" }}
            href={link}
            className={cx(classes.control, { [classes.active]: active })}
          >
            {/* <UnstyledButton className={classes.control}> */}
            <Group position="apart" spacing={0}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box ml="md">{t(`${label}`)}</Box>
              </Box>
            </Group>
            {/* </UnstyledButton> */}
          </NextLink>
        )
      )}
    </>
  );
}
