import React from "react";
import ProjectItems from "./projectItems";
import computer from "../assets/computer.jpg";
import setup from "../assets/setup.jpg";
import productline from "../assets/product.jpg";
import tools from "../assets/tools.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1240px] m-auto px-4 py-16 sm:pl-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8"> 
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        porro repellat magni quos saepe debitis, eum corporis delectus, quo in
        suscipit assumenda voluptatem modi qui veritatis, voluptates eveniet
        neque nulla?
          </p>
          <div className="grid sm:grid-cols-2 gap-12">
              <ProjectItems img={setup} title="Setup App" />
              <ProjectItems img={tools} title="Tools App" />
              <ProjectItems img={computer} title="Computer App" />
              <ProjectItems img={productline} title="Productline App" />
          </div>
    </div>
  );
};

export default Projects;
