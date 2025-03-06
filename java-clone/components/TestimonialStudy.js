export default function TestimonialStudy() {
  const studyData = [
    {
      index: 0,
      video: "/assets/videos/testimonial-video-1.mp4",
      heading:
        "SEO Case Study: https://properties.lefigaro.com/luxe/real-estate/real-estate-agency-france/ by Techanic Infotech",
      head1: "Client:",
      para1:
        " https://properties.lefigaro.com/luxe/real-estate/real-estate-agency-france/, France premier real estate platform.",
      head2: "Objective:",
      para2:
        " To significantly increase website visibility and rank it at the top of Google search results for competitive real estate keywords.",
      childheading1: "Challenges:",
      challenges: [
        "Low organic visibility.",
        "Fierce competition from local real estate websites.",
        "Limited engagement due to lack of optimized content.",
      ],
      childheading2: "Our Approach:",
      approach: [
        "On-Page SEO: We optimized content, meta tags, and alt texts across the website to boost keyword relevance.",
        "Content Creation: Crafted engaging, localized content focused on the France property market.",
        "Technical SEO: Enhanced site speed, mobile responsiveness, and overall user experience for better search engine rankings.",
        "Backlink Building: Established authoritative backlinks through partnerships with industry websites to improve domain authority.",
        "Local SEO: Optimized Google My Business profiles and location-based listings for better local search performance.",
      ],
      resultsHeading: "Results:",
      results: [
        "Top Google Rankings: Within 6 months, https://properties.lefigaro.com/luxe/real-estate/real-estate-agency-france/ ranked on the first page of Google for competitive real estate keywords, securing the top spot for many.",
        "80% Increase in Organic Traffic: A marked increase in site traffic due to improved visibility.",
        "Increased Leads: Higher rankings directly contributed to more property inquiries and conversions.",
      ],
      gradient: "180deg, #FFD85F 0%, #FBBE79 100%",
    },
    {
      video: "/assets/videos/testimonial-video-2.mp4",
      heading:
        "SEO Case Study: https://www.realestateagency.com/ by Techanic Infotech",
      head1: "Objective: ",
      para1:
        "Boost visibility for luxury real estate, attract global buyers, and improve organic traffic.",
      childheading1: "Challenges:",
      challenges: [
        "Competing in a crowded luxury market.",
        "Low international reach and traffic.",
      ],
      childheading2: "Our Approach:",
      approach: [
        "Keyword Optimization: Targeted both Italian and international luxury real estate keywords.",
        "Content Marketing: Created high-quality content to showcase luxury properties and market insights.",
        "Multilingual SEO: Optimized the English site version to attract international buyers.",
        "Backlinking: Built authoritative links from global real estate platforms.",
      ],
      resultsHeading: "Results:",
      results: [
        "65% Traffic Increase: Significant growth in organic traffic, especially from international users.",
        "Top Google Rankings: Achieved first-page results for competitive keywords.",
      ],
      para3:
        "Techanic Infotech's SEO efforts successfully increased https://www.realestateagency.com/’s visibility in global luxury real estate markets.",
      gradient: "166.11deg, #84B54D -9.55%, #F6B973 104.95%",
    },
    {
      image: "/assets/john-haus.jpeg",
      heading: "SEO Case Study: hausandhaus.com by Techanic Infotech",
      head1: "Client: ",
      para1:
        "hausandhaus.com, a top real estate agency in Dubai, specializing in luxury property sales, rentals, and management services.",
      head2: "Objective: ",
      para2:
        "Objective: Increase organic traffic, boost visibility for high-value property listings, and attract international investors and renters.",
      childheading1: "Challenges:",
      challenges: [
        "Highly competitive Dubai real estate market.",
        "Need for global reach targeting high-net-worth individuals and property investors.",
      ],
      childheading2: "Our Approach:",
      approach: [
        "Comprehensive Keyword Research: Focused on high-traffic keywords like “luxury villas in Dubai” and “buy property in Dubai” to attract international and local investors.",
        "Content Optimization: Developed high-quality, localized content and optimized property descriptions, meta tags, and blogs to target luxury real estate buyers.",
        "Backlink Strategy: Secured backlinks from reputable real estate and finance publications to build authority and improve search rankings.",
        "Technical SEO: Enhanced site speed, mobile responsiveness, and navigation for an optimal user experience.",
        "Local and International SEO: Optimized content for both local Dubai residents and international buyers, focusing on target markets in Europe, Asia, and the Middle East.",
      ],
      resultsHeading: "Results:",
      results: [
        "70% Increase in Organic Traffic: Significant growth in both local and international visitors to the site.",
        "Top Google Rankings: Achieved first-page rankings for competitive real estate keywords.",
        "Higher Lead Generation: Improved visibility led to a noticeable increase in property inquiries from global buyers and investors.",
      ],
      para3:
        "With Techanic Infotech’s strategic SEO efforts, hausandhaus.com became a top destination for luxury real estate in Dubai, reaching both local and international clients effectively.",
      gradient: "180deg, #EF604C 0%, #FFFBD6 100%",
    },
  ];
  const makeLinksClickable = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g; // Regex to detect URLs
    return text.split(urlPattern).map((part, index) =>
      urlPattern.test(part) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black  hover:text-blue-700 hover:underline"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };
  return (
    <div className="pt-[120px] pb-[40px] px-[20px] xl:px-[100px] grid gap-6 w-full overflow-x-auto">
    {studyData.map((study, index) => (
      <div
        key={index}
        className="py-8 px-4 sm:px-8 md:px-20 rounded-xl flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-x-auto"
        style={{ background: `linear-gradient(${study.gradient})` }}
      >
        {/* Video or Image Section */}
        <div className="w-auto mx-auto">
          {study.video ? (
            <video controls className="max-w-full">
              <source src={study.video} type="video/mp4" />
            </video>
          ) : study.image ? (
            <img src={study.image} alt={`Case Study ${index + 1}`} className="max-w-full" />
          ) : null}
        </div>
  
        {/* Content Section */}
        <div className="child-text flex flex-col gap-4 sm:gap-6 md:gap-8 ">
          <h2 className="text-base sm:text-lg md:text-xl break-words">
            {makeLinksClickable(study.heading)}
          </h2>
  
          <div className="page-text flex flex-col gap-2 items-start break-words">
            {study.head1 && <h3 >{study.head1}</h3>}
            {study.para1 && (
              <p >
                {makeLinksClickable(study.para1)}
              </p>
            )}
          </div>
  
          <div className="page-text flex flex-col gap-2 items-start break-words">
            {study.head2 && <h3 >{study.head2}</h3>}
            {study.para2 && (
              <p >
                {study.para2}
              </p>
            )}
          </div>
  
          {/* Challenges Section */}
          <div className="page-text">
            <h3 >{study.childheading1}</h3>
            <ul className="list-disc pl-4">
              {study.challenges.map((challenge, idx) => (
                <li key={idx} >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Approach Section */}
          <div className="page-text">
            <h3 >{study.childheading2}</h3>
            <ol className="list-decimal pl-4">
              {study.approach.map((approachItem, idx) => (
                <li key={idx} >
                  {approachItem}
                </li>
              ))}
            </ol>
          </div>
  
          {/* Results Section */}
          <div className="page-text break-words">
            <h3 >{study.resultsHeading}</h3>
            <ul className="list-disc pl-4">
              {study.results.map((result, idx) => (
                <li key={idx} >
                  {result}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Additional Paragraph */}
          {study.para3 && (
            <p >
              {makeLinksClickable(study.para3)}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
  
  );
}
