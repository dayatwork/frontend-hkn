import React from "react";
import { Affix, Button, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowUp } from "tabler-icons-react";

import { WebHeader } from "./Header";
import { WebFooter } from "./Footer";
import { links } from "./links";

type Props = {
  children: React.ReactNode;
};

const WebLayout: React.FC<Props> = ({ children }) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <WebHeader links={links} />
      <main style={{ height: "100%" }}>{children}</main>
      <WebFooter />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowUp size={16} />}
              style={transitionStyles}
              styles={{
                root: {
                  paddingLeft: 8,
                },
              }}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  );
};

export default WebLayout;
