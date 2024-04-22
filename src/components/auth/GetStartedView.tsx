import { motion } from "framer-motion";
import { CopyrightTag } from "./CopyrightTag";

const GetStartedView = ({
  setShowEmailAuth,
}: {
  setShowEmailAuth: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <div className="flex flex-row w-screen h-full sm:flex-col bg-background">
        <div className="sm:mt-0 md:w-[40%] m-auto flex flex-col justify-center items-center h-screen">
          <div className="flex items-center justify-center text-center">
            <div className="flex flex-col gap-4 md:w-fit m-10">
              <h1 className="text-2xl font-light md:text-3xl text-primary">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[#726BF2] to-[#FF8FFB] bg-clip-text text-transparent font-[400]">
                  Figr
                </span>
              </h1>
              <div className="my-3 w-inherit">
                <button
                  className="flex items-center justify-center w-full transition duration-300"
                  role="button"
                  aria-label="Get Started"
                  onClick={() => setShowEmailAuth(true)}
                >
                  <div className="flex items-center justify-center gap-2 group">
                    <h1 className="text-lg font-light bg-primary group-hover:bg-gradient-to-r from-[#726BF2] to-[#FF8FFB] bg-clip-text text-transparent transition-all duration-300">
                      Get Started
                    </h1>
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                        className="fill-primary group-hover:fill-[#726BF2] group-hover:translate-x-[5.2px] transition-all duration-300"
                      ></path>
                      <path
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="stroke-transparent group-hover:stroke-[#726BF2] group-hover:translate-x-[4px] transition-all duration-300 translate-x-[-5px]"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <CopyrightTag />
        </div>
      </div>
    </motion.div>
  );
};

export default GetStartedView;
