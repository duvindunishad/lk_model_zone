// app/gallery/[id]/page.tsx
import Image from "next/image";
import { ImageData, ImageProps } from "../../../../utils/types";
import cloudinary from "../../../../utils/cloudinary";

import Logo from "../Icons/Logo";
import Bridge from "../Icons/Bridge";

const fetchImages = async (photographerId: string) => {
  console.log(photographerId);
  const results = await cloudinary.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${photographerId}`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  return reducedResults;
};

const GalleryPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const imageUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720`;
  fetchImages(id);

  const images: ImageProps[] = await fetchImages(id);

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
        {/* info-card */}
        <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
          {/* brigde behind the text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="flex max-h-full max-w-full items-center justify-center">
              <Bridge />
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
          </div>
          <Logo />
          {/* card-title */}
          <h1 className="mb-4 mt-8 text-base font-bold uppercase tracking-widest">
            Image Gallery
          </h1>
          {/* card-description */}
          <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
            This Image Gallery app is built with Next.js for a fast, responsive
            frontend and Cloudinary for efficient image storage and management.
          </p>
          {/* CTA-Button */}
          <a
            className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
            href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application"
            target="_blank"
            rel="noreferrer"
          >
            Clone and Deploy
          </a>
        </div>
        {images.map((image) => (
          <div
            key={image.id}
            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              alt={`Photo ${image.public_id}`}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              src={`${imageUrl}/${image.public_id}.${image.format}`}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryPage;
