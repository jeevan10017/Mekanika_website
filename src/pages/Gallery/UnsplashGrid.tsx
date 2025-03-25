import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Image } from "react-bootstrap";
import { X } from "lucide-react";
import { BackgroundBeamsWithCollision } from "../../components/ui/background-beams-with-collision.jsx";


// Helper function to dynamically import images
//@ts-ignore
const importAllImages = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map((key) => ({
    id: key, // Use the file name as an ID
    url: requireContext(key).default || requireContext(key),
  }));
};

// Dynamically import all image files from the folder
export const images = importAllImages(
  //@ts-ignore
  (require as __WebpackModuleApi.RequireFunction).context("../../components/event_Images", false, /\.(png|jpe?g|svg)$/)
);

function UnsplashGrid() {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <>
      <div className="container mx-auto sm:p-4 px-0">
        {/* Added styling for spacing between images */}
        <div className="columns-2 md:columns-3 2xl:columns-4 space-y-4">
          {images.map((item, index) => (
            <ImageItem
              key={index}
              item={item}
              index={index}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
      <Modal selected={selected} setSelected={setSelected} />
    </>
  );
}

function ImageItem({
  item,
  index,
  setSelected,
}: {
  item: { id: string; url: string };
  index: number;
  setSelected: (item: any) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.figure
      initial="hidden"
      animate={isInView && "visible"}
      ref={ref}
      className="inline-block group w-full rounded-md relative bg-black  cursor-pointer mb-2  "  
      onClick={() => setSelected(item)}
    >
      <motion.img
        layoutId={`card-${item.id}`}
        whileHover={{ scale: 1.025 }}
        src={item.url}
        className="w-full bg-base-100 shadow-xl image-full cursor-pointer rounded-md  "
        alt={`Event Image ${index + 1}`}
      />
    </motion.figure>
  );
}

function Modal({
  selected,
  setSelected,
}: {
  selected: { id: string; url: string } | null;
  setSelected: (value: null) => void;
}) {
  useEffect(() => {
    if (selected) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, setSelected]);

  if (!selected) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer overflow-y-scroll"
      >
        <BackgroundBeamsWithCollision from="Team" className="absolute inset-0 w-full h-full -z-10" />  
        <motion.div
          onClick={(e) => e.stopPropagation()}
          layoutId={`card-${selected.id}`}
          className="w-full max-w-[1000px] mx-auto my-8 bg-yellow-400/70 rounded-md "
        >
          <button
            className="absolute top-2 right-2 p-2 mix-blend-multiply"
            onClick={() => setSelected(null)}
          >
            <X />
          </button>
          <motion.div className="p-1 h-[70vh] rounded-md">
            <Image
              alt="Selected"
              src={selected.url}
              className="w-full h-full object-contain rounded-md bg-black "
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default UnsplashGrid;
