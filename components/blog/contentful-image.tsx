import Image from "next/image";

// https://nextjs.org/docs/api-reference/next/image#loader
const nextImageLoader = async ({ src, width, quality }) => {
  // "use server";
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = async (props) => {
  return <Image alt={props.alt} {...props} loader={nextImageLoader} />;
};

export default ContentfulImage;
