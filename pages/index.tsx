import type { NextPage } from "next";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Image from "next/image";
const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-2"> Welcome To NextJS Tailwind Starter</h1>
      <div className="my-2">
        <Breadcrumbs
          items={[
            {
              label: (
                <Image src="/home.svg" height={24} width={24} alt="home icon" />
              ),
              path: "/",
            },
            {
              label: "Development",
              path: "/courses/development",
            },
            {
              label: "Programming Languages",
              path: "/courses/development/programming-languages",
            },
            {
              label: "Python",
              path: "/topic/python",
            },
          ]}
        />

        <Breadcrumbs
          items={[
            {
              label: "Home",
              path: "/",
            },
            {
              label: "Development",
              path: "/courses/development",
            },
            {
              label: "Programming Languages",
              path: "/courses/development/programming-languages",
            },
            {
              label: "Python",
              path: "/topic/python",
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Home;
