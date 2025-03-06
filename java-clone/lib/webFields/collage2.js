"use client";
import { useState } from "react";

import Image from "next/image";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import "./collage.css";
export default function WebCollage({ p1, p2, p3, p4, p5, p6, p7, p8, p9 }) {
  const [showRetail, setShowRetail] = useState(false);
  const [showRestaurant, setShowRestaurant] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const [showEstate, setShowEstate] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showSchool, setShowSchool] = useState(false);
  const [showLogistic, setShowLogistic] = useState(false);
  const [showFintech, setShowFintech] = useState(false);
  const [showTravel, setShowTravel] = useState(false);
  return (
    <>
      {/*........................................large screens......................................*/}
      <div className="XLdiv flex flex-col justify-between w-[1420px] h-auto mx-auto">
        <div
          id="firstDiv"
          className="flex items-start justify-start  w-[1420px] h-[330px] gap-[20px] mx-auto"
        >
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative overflow-hidden w-[700px] h-[330px] rounded-lg"
              onMouseEnter={() => setShowRetail(true)}
              onMouseLeave={() => setShowRetail(false)}
            >
              <Image
                src="collageImages/ecommerce-retail.jpeg"
                className="w-full h-auto object-cover rounded-lg lg:transition-transform lg:duration-300 lg:hover:scale-105 pb-[16px] gap-[48px]"
                alt="ecommerce"
                objectFit="cover"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                  E-Commerce & Retail
                </div>
                {showRetail && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>{p1}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex w-[700px] h-[330px] gap-[20px]">
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[340px] h-[330px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowRestaurant(true)}
                onMouseLeave={() => setShowRestaurant(false)}
              >
                <Image
                  src="collageImages/restaurent.jpg"
                  className="absolute top-0 left-0 w-full h-full object-cover lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80"
                  width={302}
                  height={300}
                  alt="restaurent"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Restaurant
                  </div>
                  {showRestaurant && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[340px] h-[330px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowMedia(true)}
                onMouseLeave={() => setShowMedia(false)}
              >
                <Image
                  src="collageImages/social-media.webp"
                  className="lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 w-full h-full "
                  width={302}
                  height={300}
                  alt="social-media"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Media & Entertainment
                  </div>
                  {showMedia && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p3}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="secondDiv"
          className="flex justify-start  w-[1420px] h-auto gap-[20px] mt-5 mx-auto"
        >
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative w-[345px] h-[700px] overflow-hidden rounded-lg"
              onMouseEnter={() => setShowEstate(true)}
              onMouseLeave={() => setShowEstate(false)}
            >
              <Image
                src="collageImages/real-estate.png"
                className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                width={302}
                height={520}
                alt="real-estate"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                  Real Estate
                </div>
                {showEstate && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>{p4}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            id="innerDiv"
            className="flex flex-col w-[345px] h-[600px] gap-[20px] "
          >
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[345x] h-[350px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowHealth(true)}
                onMouseLeave={() => setShowHealth(false)}
              >
                <Image
                  src="collageImages/health-image.jpeg"
                  className=" h-full w-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                  width={302}
                  height={300}
                  alt="health-image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Healthcare
                  </div>
                  {showHealth && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p5}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-auto h-[330px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowSchool(true)}
                onMouseLeave={() => setShowSchool(false)}
              >
                <CustomImage
                  publicImage="/assets/education-image.png"
                  className="w-full h-[100%]  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                  width=""
                  // height="400px"
                  rounded="rounded-none"
                  alt="e-learning"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    School Management
                  </div>
                  {showSchool && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p6}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-[720px] h-[600px]">
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[700px] h-[350px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowLogistic(true)}
                onMouseLeave={() => setShowLogistic(false)}
              >
                <Image
                  src="collageImages/logistics.jpg"
                  className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 gap-[48px]"
                  width={628}
                  height={300}
                  alt="logistics"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Logistics & Transport
                  </div>
                  {showLogistic && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p7}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-[20px]  w-[700px] h-[350px]">
              <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
                <div
                  className="relative w-[340px] h-[330px] overflow-hidden rounded-lg"
                  onMouseEnter={() => setShowFintech(true)}
                  onMouseLeave={() => setShowFintech(false)}
                >
                  <CustomImage
                    publicImage="/assets/fintech-image.png"
                    className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                    width="100%"
                    height="100%"
                    rounded="rounded-none"
                    alt="fintech"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                      Fintech
                    </div>
                    {showFintech && (
                      <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                        <p>{p8}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
                <div
                  className="relative w-[340px] h-[330px] overflow-hidden rounded-lg"
                  onMouseEnter={() => setShowTravel(true)}
                  onMouseLeave={() => setShowTravel(false)}
                >
                  <CustomImage
                    publicImage="/assets/travel-image.png"
                    className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                    width="100%"
                    height="100%"
                    rounded="rounded-none"
                    alt="travel"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                      Travel & Hospitality
                    </div>
                    {showTravel && (
                      <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                        <p>{p9}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*........................................xl large screens......................................*/}
      <div className="XLdiv1 flex flex-col w-[1220px] h-[939px] gap-[56px] mx-auto">
        <div
          id="firstDiv"
          className="flex items-start justify-start  w-[1220px] h-[300px] gap-[20px] "
        >
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative overflow-hidden w-[580px] h-[300px] rounded-lg "
              onMouseEnter={() => setShowRetail(true)}
              onMouseLeave={() => setShowRetail(false)}
            >
              <Image
                src="collageImages/ecommerce-retail.jpeg"
                alt="ecommerce"
                className=" w-full h-auto 
                object-cover rounded-lg transition-transform duration-300 hover:scale-105
                 pb-[16px] gap-[48px]"
                width={600}
                height={300}
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                  E-Commerce & Retail
                </div>
                {showRetail && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>{p1}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-[580px] h-[300px] gap-[20px]">
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[280px] h-[300px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowRestaurant(true)}
                onMouseLeave={() => setShowRestaurant(false)}
              >
                <Image
                  src="collageImages/restaurent.jpg"
                  className="imageShadow  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 w-full h-full"
                  width={302}
                  height={300}
                  alt="restaurent"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Restaurant
                  </div>
                  {showRestaurant && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[280px] h-[300px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowMedia(true)}
                onMouseLeave={() => setShowMedia(false)}
              >
                <Image
                  src="collageImages/social-media.webp"
                  className="  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 w-full h-full "
                  width={302}
                  height={300}
                  alt="social-media"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Media & Entertainment
                  </div>
                  {showMedia && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p3}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="secondDiv"
          className="flex justify-start  w-[1220px]  h-[526px] gap-[20px] mt-6"
        >
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative w-[280px] h-[526px] overflow-hidden rounded-lg"
              onMouseEnter={() => setShowEstate(true)}
              onMouseLeave={() => setShowEstate(false)}
            >
              <Image
                src="collageImages/real-estate.png"
                className="  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                width={302}
                height={526}
                alt="real-estate"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                  Real Estate
                </div>
                {showEstate && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>{p4}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            id="innerDiv"
            className="flex flex-col w-[302px] h-[526px] gap-[20px] "
          >
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[280px] h-[300px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowHealth(true)}
                onMouseLeave={() => setShowHealth(false)}
              >
                <Image
                  src="collageImages/health-image.jpeg"
                  className="lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 w-full h-full"
                  width={302}
                  height={300}
                  alt="health-image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Healthcare
                  </div>
                  {showHealth && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p5}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[280px] h-[202px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowSchool(true)}
                onMouseLeave={() => setShowSchool(false)}
              >
                <CustomImage
                  publicImage="/assets/education-image.png"
                  className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                  width="100%"
                  height="100%"
                  alt="e-learning"
                  rounded="rounded-none"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    School Management
                  </div>
                  {showSchool && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p6}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] h-[526px] w-[628px]">
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[580px] h-[300px] overflow-hidden rounded-lg"
                onMouseEnter={() => setShowLogistic(true)}
                onMouseLeave={() => setShowLogistic(false)}
              >
                <Image
                  src="collageImages/logistics.jpg"
                  className="  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                  width={628}
                  height={300}
                  alt="logistics"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Logistics & Transport
                  </div>
                  {showLogistic && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p7}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-[24px]  w-[628px] h-[202px]">
              <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
                <div
                  className="relative w-[280px] h-[202px]  overflow-hidden rounded-lg"
                  onMouseEnter={() => setShowFintech(true)}
                  onMouseLeave={() => setShowFintech(false)}
                >
                  <CustomImage
                    publicImage="/assets/fintech-image.png"
                    className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                    width="100%"
                    height="100%"
                    alt="fintech"
                    rounded="rounded-none"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                      Fintech
                    </div>
                    {showFintech && (
                      <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                        <p>{p8}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
                <div
                  className="relative w-[280px] h-[202px] overflow-hidden rounded-lg"
                  onMouseEnter={() => setShowTravel(true)}
                  onMouseLeave={() => setShowTravel(false)}
                >
                  <CustomImage
                    publicImage="/assets/travel-image.png"
                    className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                    width="100%"
                    height="100%"
                    alt="travel"
                    rounded="rounded-none"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                      Travel & Hospitality
                    </div>
                    {showTravel && (
                      <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                        <p>{p9}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ............................for lg and xl screens................... */}
      <div
        className="largediv flex flex-row  justify-center gap-[36px] w-[950px] 
      h-auto mx-auto"
      >
        <div
          id="firstDiv"
          className="flex items-start justify-start  gap-[20px] w-[950px] h-[200px]"
        >
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative overflow-hidden w-[450px] h-[200px] rounded-lg"
              onMouseEnter={() => setShowRetail(true)}
              onMouseLeave={() => setShowRetail(false)}
            >
              <Image
                src="collageImages/ecommerce-retail.jpeg"
                className="w-full h-full transition-transform duration-300 transform"
                objectFit="cover"
                alt="ecommerce"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                  E-Commerce & Retail
                </div>
                {showRetail && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>{p1}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative flex justify-center w-[215px] h-[200px] rounded-lg overflow-hidden "
              onMouseEnter={() => setShowRestaurant(true)}
              onMouseLeave={() => setShowRestaurant(false)}
            >
              <Image
                src="collageImages/restaurent.jpg"
                className="w-full h-full lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80  "
                id="restId"
                width={200}
                height={200}
                alt="restaurent"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                  Restaurant
                </div>
                {showRestaurant && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>{p2}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative w-[215px] h-[200px] rounded-lg overflow-hidden "
              onMouseEnter={() => setShowMedia(true)}
              onMouseLeave={() => setShowMedia(false)}
            >
              <Image
                src="collageImages/social-media.webp"
                className="lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80  w-full h-full"
                id="mediaId"
                width={200}
                height={200}
                alt="social-media"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 p-2">
                  Media & Entertainment
                </div>
                {showMedia && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>
                      Helping ambitious companies deliver new-age entertainment
                      to their user, with media and entertainment solutions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          id="secondDiv"
          className="flex items-start justify-start gap-[16px] w-[950px] h-[420px] mt-4 "
        >
          <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
            <div
              className="relative flex flex-col rounded-lg overflow-hidden  w-[220px] 
          h-[385px] "
              onMouseEnter={() => setShowEstate(true)}
              onMouseLeave={() => setShowEstate(false)}
            >
              <Image
                src="collageImages/real-estate.png"
                className="w-full h-full transition-transform duration-300 
              transform lg:hover:scale-105 lg:hover:opacity-80 "
                id="estateId"
                width={200}
                height={300}
                alt="real-estate"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                  Real Estate
                </div>
                {showEstate && (
                  <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                    <p>{p4}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            id="innerDiv"
            className="flex flex-col w-[225px] h-[420px] gap-[16px]"
          >
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[215px] h-[200px] rounded-lg overflow-hidden "
                onMouseEnter={() => setShowHealth(true)}
                onMouseLeave={() => setShowHealth(false)}
              >
                <Image
                  src="collageImages/health-image.jpeg"
                  className="w-full h-full lg:transition-transform lg:duration-300 lg:hover:scale-105
                hover:opacity-80 "
                  id="healthId"
                  width={210}
                  height={200}
                  alt="health-image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Healthcare
                  </div>
                  {showHealth && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p5}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative w-[215px] h-[170px] rounded-lg overflow-hidden "
                onMouseEnter={() => setShowSchool(true)}
                onMouseLeave={() => setShowSchool(false)}
              >
                <CustomImage
                  publicImage="/assets/education-image.png"
                  className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                  width="100%"
                  height="100%"
                  alt="e-learning"
                  rounded="rounded-none"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    School Management
                  </div>
                  {showSchool && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p6}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[500px] h-[370px] gap-[16px]">
            <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
              <div
                className="relative flex flex-col w-[450px] h-[200px] rounded-lg overflow-hidden "
                onMouseEnter={() => setShowLogistic(true)}
                onMouseLeave={() => setShowLogistic(false)}
              >
                <Image
                  src="collageImages/logistics.jpg"
                  className="w-full h-full transition-transform duration-300
                 transform lg:hover:scale-105 lg:hover:opacity-80 "
                  id="logId"
                  alt="logistics"
                  width={200}
                  height={200}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                  <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                    Logistics & Transport
                  </div>
                  {showLogistic && (
                    <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                      <p>{p7}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[16px]">
              <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
                <div
                  className="relative w-[220px] h-[170px] rounded-lg overflow-hidden "
                  onMouseEnter={() => setShowFintech(true)}
                  onMouseLeave={() => setShowFintech(false)}
                >
                  <CustomImage
                    publicImage="/assets/fintech-image.png"
                    className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                    width="100%"
                    height="100%"
                    alt="fintech"
                    rounded="rounded-none"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                      Fintech
                    </div>
                    {showFintech && (
                      <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                        <p>{p8}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative lg:hover:scale-105 lg:hover:opacity-80">
                <div
                  className="relative w-[220px] h-[170px] rounded-lg overflow-hidden "
                  onMouseEnter={() => setShowTravel(true)}
                  onMouseLeave={() => setShowTravel(false)}
                >
                  <CustomImage
                    publicImage="/assets/travel-image.png"
                    className="w-full h-full  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
                    width="100%"
                    height="100%"
                    alt="travel"
                    rounded="rounded-none"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <div className="text-white text-center text-xl font-bold bg-opacity-50 py-2">
                      Travel & Hospitality
                    </div>
                    {showTravel && (
                      <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                        <p>{p9}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for small screens */}
      <div className="smallcoldiv flex flex-col gap-[10px] justify-center w-full h-auto mx-auto">
        {/* E-Commerce & Retail */}
        <div className="grid grid-cols-2 gap-[10px]">
          {" "}
          <div className="relative flex flex-col w-full rounded-lg overflow-hidden">
            <Image
              src="collageImages/ecommerce-retail.jpeg"
              className="lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 w-full  rounded"
              alt="Retail"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                E-Commerce & Retail
              </div>
              {/* {showRetail && (
                <div className="text-center text-white text-[0.625rem] md:text-base py-2 leading-[18.4px] px-3">
                  <p>
                    Develop an ecommerce app like Amazon or something unique. In
                    either case, we are here to help you.
                  </p>
                </div>
              )} */}
            </div>
          </div>
          <div className="relative w-auto h-auto  rounded-lg overflow-hidden ">
            <CustomImage
              publicImage="/assets/health-care.png"
              className="lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80"
              alt="Healthcare"
              width="100%"
              height="100%"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                Healthcare
              </div>
              {/* {showHealth && (
                  <div className="text-center text-white text-[0.625rem] md:text-base py-2 leading-[18.4px] px-3">
                    <p>
                      Healthcare App Development services from experienced and
                      professional mobile app developers are at your fingertips.
                    </p>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        {/* Other images in a single column */}
        <div className="grid grid-cols-2 gap-[10px]">
          {/* Healthcare */}

          <div className="relative rounded-lg overflow-hidden">
            <CustomImage
              publicImage="/assets/education-image-1.png"
              className="  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
              width="100%"
              height="100%"
              alt="e-learning"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                School Management
              </div>
              {/* {showSchool && (
                  <div className="text-center text-white text-[0.625rem] md:text-base py-2 leading-[18.4px] px-3">
                    <p>
                      Enter the Edtech future with School Management and an
                      advanced learning management system from a tech-savvy
                      brand.
                    </p>
                  </div>
                )} */}
            </div>
          </div>

          <div className="relative  rounded-lg overflow-hidden w-auto h-auto">
            <CustomImage
              publicImage="/assets/restaurent-image.png"
              width="100%"
              height="100%"
              alt="Restaurant"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                Restaurant
              </div>
              {/* {showTravel && (
                  <div className="text-center text-white text-[0.625rem] md:text-base py-2 leading-[18.4px] px-3">
                    <p>
                      Develop travel and hospitality solutions with experienced
                      team of developers and designers at Techanic Infotech.
                    </p>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[10px]">
          {/* Healthcare */}

          {/* School Management */}

          <div className="relative  rounded-lg overflow-hidden">
            <CustomImage
              publicImage="/assets/logistic-image.png"
              className=" lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
              width="100%"
              height="100%"
              alt=" Logistics & Transport"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                Logistics & Transport
              </div>
              {/* {showSchool && (
                  <div className="text-center text-white text-[0.625rem] md:text-base py-2 leading-[18.4px] px-3">
                    <p>
                      Enter the Edtech future with School Management and an
                      advanced learning management system from a tech-savvy
                      brand.
                    </p>
                  </div>
                )} */}
            </div>
          </div>

          {/* Travel & Hospitality */}

          <div className="relative rounded-lg overflow-hidden ">
            <CustomImage
              publicImage="/assets/media-image.png"
              className=" lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
              width="100%"
              height="100%"
              alt="Media & Entertainment"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                Media & Entertainment
              </div>
              {/* {showTravel && (
                  <div className="text-center text-white text-[0.625rem] md:text-base py-2 leading-[18.4px] px-3">
                    <p>
                      Develop travel and hospitality solutions with experienced
                      team of developers and designers at Techanic Infotech.
                    </p>
                  </div>
                )} */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[10px]">
          {/* Healthcare */}

          <div className="relative rounded-lg overflow-hidden ">
            <CustomImage
              publicImage="/assets/fintech.png"
              className="  lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
              width="100%"
              height="100%"
              rounded="rounded-none"
              alt="fintech"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                Fintech
              </div>
              {/* {showFintech && (
                      <div className="text-center text-white text-base py-2 leading-[18.4px] px-3">
                        <p>{p8}</p>
                      </div>
                    )} */}
            </div>
          </div>

          {/* School Management */}

          <div className="relative  rounded-lg overflow-hidden ">
            <CustomImage
              publicImage="/assets/travel.png"
              className=" lg:transition-transform lg:duration-300 lg:hover:scale-105 lg:hover:opacity-80 "
              width="100%"
              height="100%"
              alt="travel"
              rounded="rounded-none"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
              <div className="text-white text-center text-sm md:text-xl font-medium bg-opacity-50 py-2">
                Travel & Hospitality
              </div>
              {/* {showTravel && (
                  <div className="text-center text-white text-[0.625rem] md:text-base py-2 leading-[18.4px] px-3">
                    <p>
                      Develop travel and hospitality solutions with experienced
                      team of developers and designers at Techanic Infotech.
                    </p>
                  </div>
                )} */}
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </>
  );
}
