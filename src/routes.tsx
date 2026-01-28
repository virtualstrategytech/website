import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const { HomePage } = await import("./pages/HomePage");
      return { Component: HomePage };
    },
  },
  {
    path: "/products",
    lazy: async () => {
      const { default: ProductsPage } = await import("./pages/ProductsPage"); // Changed import to default
      return {
        Component: () => (
          <ProductsPage
            onBackToHome={() => {
              window.location.pathname = "/";
            }}
            onNavigate={(path: string) => {
              window.location.pathname = path;
            }}
          />
        ),
      };
    },
  },
  {
    path: "/solutions",
    lazy: async () => {
      const { SolutionsPage } = await import("./pages/SolutionsPage");
      return {
        Component: () => (
          <SolutionsPage
            onBackToHome={() => {
              window.location.pathname = "/";
            }}
            onNavigateToProducts={() => {
              window.location.pathname = "/products";
            }}
          />
        ),
      };
    },
  },
  {
    path: "/upskilling-agents",
    lazy: async () => {
      const { UpskillingProAgentsPage } = await import(
        "./pages/UpskillingProAgentsPage"
      );
      return {
        Component: () => (
          <UpskillingProAgentsPage
            onBackToHome={() => {
              window.location.pathname = "/";
            }}
            onOpenModal={() => {}}
          />
        ),
      };
    },
  },
  {
    path: "/support-ticket-management",
    lazy: async () => {
      const { default: SmartTicketSchedulingPage } = await import(
        "./pages/SmartTicketSchedulingPage"
      );
      return {
        Component: () => (
          <SmartTicketSchedulingPage
            onBackToHome={() => {
              window.location.pathname = "/";
            }}
            onOpenModal={() => {}}
          />
        ),
      };
    },
  },
  {
    path: "/use-cases",
    lazy: async () => {
      const { UseCasesPage } = await import("./pages/UseCasesPage");
      return {
        Component: () => (
          <UseCasesPage
            onBackToHome={() => {
              window.location.pathname = "/";
            }}
            onNavigateToCaseStudy1={() => {
              window.location.pathname = "/";
            }}
            onNavigateToCaseStudy2={() => {
              window.location.pathname = "/";
            }}
            onNavigateToCaseStudy3={() => {
              window.location.pathname = "/";
            }}
            onNavigateToResearchStudy={() => {
              window.location.pathname = "/research";
            }}
          />
        ),
      };
    },
  },
  {
    path: "/product-development",
    lazy: async () => {
      const { ProductDevelopmentPage } = await import(
        "./pages/ProductDevelopmentPage"
      );
      return {
        Component: () => (
          <ProductDevelopmentPage
            onBackToHome={() => {
              window.location.pathname = "/";
            }}
            onOpenModal={() => {}}
          />
        ),
      };
    },
  },
  {
    path: "/research",
    lazy: async () => {
      const { ResearchPageStudy1 } = await import("./pages/ResearchPageStudy1");
      return {
        Component: () => (
          <ResearchPageStudy1
            onBackToHome={() => {
              window.location.pathname = "/";
            }}
          />
        ),
      };
    },
  },
];
