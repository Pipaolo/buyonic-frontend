import { Button, Divider, useBreakpoint, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useIsAdmin } from "../../utils/auth";
import SideNavigationItem from "./components/SideNavigationItem";
import {
  selectSideNavigation,
  toggleSideNavigation,
} from "./sideNavigationSlice";
import { SideNavigationRoute } from "./types";

const SideNavigationBar = () => {
  const { isVisible } = useAppSelector(selectSideNavigation);
  const dispatch = useAppDispatch();

  const { isAdmin } = useIsAdmin();
  const breakpoint = useBreakpoint();

  const adminRoutes = useMemo<SideNavigationRoute[]>(() => {
    const prefix = "/admin";
    return [
      {
        name: "Merchants",
        path: `${prefix}/users`,
        isActive: false,
      },
      {
        name: "Stores",
        path: `${prefix}/stores`,
        isActive: false,
      },
    ];
  }, []);

  const merchantRoutes = useMemo<SideNavigationRoute[]>(() => {
    return [
      {
        name: "Products",
        path: "/products",
        isActive: false,
      },
    ];
  }, []);

  const routes = useMemo<SideNavigationRoute[]>(() => {
    if (isAdmin) {
      return adminRoutes;
    }
    return merchantRoutes;
  }, [isAdmin, adminRoutes, merchantRoutes]);

  useEffect(() => {
    if (["sm", "base"].includes(breakpoint || "")) {
      dispatch(toggleSideNavigation(false));
    } else {
      // Show the side navigation bar on sizes higher than "sm" and "xs"
      dispatch(toggleSideNavigation(true));
    }
  }, [breakpoint, dispatch]);

  const renderNavigationItems = () => {
    return routes.map((route) => (
      <SideNavigationItem key={route.path} route={route} />
    ));
  };

  if (!isVisible) {
    return <div></div>;
  }

  return (
    <VStack h="full" bg="secondary" w={"drawer"}>
      <Divider h="appbar" />
      <VStack w="full" spacing={0}>
        {renderNavigationItems()}
      </VStack>
    </VStack>
  );
};

export default SideNavigationBar;
