import { GetServerSideProps, NextPage } from "next";
import Breadcrumbs, {
  CrumbItem,
} from "../../components/breadcrumbs/Breadcrumbs";
import db from "../../data/db.json";
type BreadcrumbData = {
  text: string;
  url: string;
};

type Props = {
  breadcrumbs: BreadcrumbData[];
  courseTitle: string;
};

const CoursePage: NextPage<Props> = (props) => {
  const breadCrumbsData: CrumbItem[] = props.breadcrumbs.map((c) => {
    return {
      label: c.text,
      path: c.url,
    };
  });
  return (
    <div className="container mx-auto">
      <div className="my-4">
        <Breadcrumbs items={breadCrumbsData} />
        <h1 className="text-4xl my-2">{props.courseTitle}</h1>
      </div>
    </div>
  );
};

export default CoursePage;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug;
  const data = db.find((page) => page.slug === slug);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      breadcrumbs: data.breadcrumbs,
      courseTitle: data.courseTitle,
    },
  };
};
