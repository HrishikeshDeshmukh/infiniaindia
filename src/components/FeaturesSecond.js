import React from "react";
import { features } from "../data";
const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[100px] ssm:-mt-12">
        
             {/* title */}
             <div className="flex-1 flex flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
        
        
        
          {/* images */}
          <div className="flex-1 ">
            <img src={image.type} alt="" className="img"/>
          </div>

     

          {/* items */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
