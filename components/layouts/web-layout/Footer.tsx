import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
} from "@mantine/core";
import { BrandInstagram, BrandTwitter, BrandYoutube } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: "auto",
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function WebFooter() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        {/* TODO: Change with logo */}
        <Text weight={600}>HKN 2022</Text>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
