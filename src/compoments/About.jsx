import React from "react";
import aboutImg from "../../public/images/Indonesia.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 px-4 md:px-8 lg:px-6 pt-20 max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h3 className="text-4xl font-bold mb-4 md:max-w-sm">
          Great Opportunity for Adventure & Travels
        </h3>
        <p className="mb-4 text-gray-700">
          Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
          odio sit massa. Sodales dictumst nec nibh pellentesque.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>
            Tempus euismod lacus mauris dignissim quis in ultrices. Magna nullam
            odio neque diam. Sociis erat at.
          </li>
          <li>
            Adipiscing ornare pellentesque mauris volutpat tortor vitae platea
            porta lacus. Lectus suspendisse nullam.
          </li>
          <li>
            Accumsan eget et turpis praesent lorem egestas enim elit bibendum.
            Risus at in.
          </li>
        </ul>
        <p className="text-gray-700">
          Amet consectetur. Vulputate commodo felis molestie risus ornare nulla
          amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant
          adipiscing risus natoque aliquet. Id bibendum nunc senectus semper
          tincidunt.
        </p>
        <div className="w-full flex md:justify-between md:items-center items-start md:gap-0 gap-6 md:flex-row flex-col mt-4">
          <button className=" px-4 py-2 font-semibold bg-secondary text-white rounded hover:bg-secondary-600 transition">
            Read More
          </button>
          <div className=" flex gap-5 items-center justify-end ">
            {/* avatar  */}
          <div className="avatar-group -space-x-5">
            <div className="avatar">
              <div className="w-10">
                <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-10">
                <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-10">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-10">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              </div>
            </div>
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-10">
                <span>+99</span>
              </div>
            </div>
          </div>
          {/* end avatar  */}

          <div className="">
            <p className="text-sm"><span className="font-semibold">25k+</span> Customer<br/>
in Worldwide.</p>
          </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src={aboutImg}
          alt="Popular Tour"
          className="w-full h-72 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
