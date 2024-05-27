import SocialMediaIcons from "@/components/SocialMediaIcons";
import { GlobalContext } from "@/context";
import axios from "axios";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = () => {
  const globalState = useContext(GlobalContext);
  const { selectedPage, setSelectedPage } = globalState;
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      <button
        onClick={async () => {
          const res = await axios.post(`http://127.0.0.1:8000/api/projects/`, {
            project_name: "Awesome Website Redesign",
            start_date: "2024-05-20",
            due_date: "2024-06-15",
            description:
              "This project aims to revamp the company website with a fresh look and improved user experience.",
          });
          console.log(res?.data);
        }}
      >
        Test
      </button>
      {/* Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        <div
          className="hidden md:flex relative before:absolute z-0 ml-20 before:-top-20 before:-left-20 before:rounded-t-[400px] 
          before:w-full before:max-w-[500px] before:h-full before:border-2 before:border-blue before:z-[-1]"
        >
          <img
            alt="profile"
            src="assets/wally.jpg"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[518px] max-h-[648px] rounded-t-full"
          />
        </div>
        <img
          alt="profile"
          src="assets/wally.jpg"
          width="518"
          height="648"
          className=" w-[400px] h-full md:hidden hover:filter hover:saturate-200 transition duration-500 z-10  max-w-[400px] rounded-t-full"
        />
      </div>
      <div className="z-30 basis-2/5 mt-12 md:mt-32 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start ">
            Zernie{" "}
            <span className=" xs:relative xs:text-[#191919] xs:font-semibold z-20 xs:before:content-brush before:transition before:duration-500 before:hover:filter before:hover:saturate-100 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] ">
              Reyes
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>
        {/* Call to action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue rounded-sm px-7 py-3 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Lets Talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
