import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Pursuing Excellence in Software Engineering. 
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Measure</motion.b> twice
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Cut</motion.b> once.
          </h1>
          <button>WHAT I REALLY DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          I develop dynamic, scalable web applications using the MERN stack—MongoDB, Express.js, React, and Node.js. This powerful combination ensures efficient, full-stack solutions with smooth integration and modern functionality.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning</h2>
          <p>
          I build intelligent systems using machine learning techniques, applying algorithms and data analysis to create predictive models and data-driven solutions. My work enhances decision-making through advanced analytics and automation.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
         <h2>Data Analysis</h2>
          <p>
           Proficient in data analysis, uncovering patterns and insights using SQL, Python, Jupyter Notebook, with expertise in visualization tools like Power BI and Google Dashboard.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX</h2>
          <p>
          I create engaging user interfaces and experiences with a focus on usability and design principles. My approach ensures intuitive, visually appealing solutions, enhancing user satisfaction even though I’m still refining my skills.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
