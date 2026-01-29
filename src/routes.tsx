import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const { HomePage } = await import("./pages/HomePage");
      return { Component: HomePage };
    }
  },
  {
    path: "/products",
    lazy: async () => {
      const { default: ProductsPage } = await import("./pages/ProductsPage");
      return { Component: ProductsPage };
    }
  },
  {
    path: "/upskilling-agents",
    lazy: async () => {
      const { UpskillingProAgentsPage } = await import(
        "./pages/UpskillingProAgentsPage"
      );
      return { Component: UpskillingProAgentsPage };
    }
  },
  {
    path: "/support-ticket-management",
    lazy: async () => {
      const { SmartTicketSchedulingPage } = await import(
        "./pages/SmartTicketSchedulingPage"
      );
      return { Component: SmartTicketSchedulingPage };
    }
  },
  {
    path: "/product-development",
    lazy: async () => {
      const { ProductDevelopmentPage } = await import(
        "./pages/ProductDevelopmentPage"
      );
      return { Component: ProductDevelopmentPage };
    }
  },
  {
    path: "/research",
    lazy: async () => {
      const { ResearchPageStudy1 } = await import("./pages/ResearchPageStudy1");
      return { Component: ResearchPageStudy1 };
    }
  },
  {
    path: "/use-cases",
    lazy: async () => {
      const { UseCasesPage } = await import("./pages/UseCasesPage");
      return { Component: UseCasesPage };
    }
  },
  {
    path: "/case-study-1",
    lazy: async () => {
      const { CaseStudy1Page } = await import("./pages/CaseStudy1Page");
      return { Component: CaseStudy1Page };
    }
  },
  {
    path: "/case-study-2",
    lazy: async () => {
      const { CaseStudy2Page } = await import("./pages/CaseStudy2Page");
      return { Component: CaseStudy2Page };
    }
  },
  {
    path: "/case-study-3",
    lazy: async () => {
      const { CaseStudy3Page } = await import("./pages/CaseStudy3Page");
      return { Component: CaseStudy3Page };
    }
  }
];
