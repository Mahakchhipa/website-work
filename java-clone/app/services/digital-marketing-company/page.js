import OurClients from "@/components/clients/page";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import CTAButtonDevelopment from "@/components/getStarted/CTABUttonDevelopment";
import VectorBanner from "@/components/VectorBanner";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import TechSuccess from "@/lib/colab/techSuccess";
import Ratings from "@/lib/reviews/reviews";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import NativeCards from "@/lib/secondpage/nativeapp/nativecards";
import WebTeam from "@/lib/secondpage/WebDevleopmentpage/webTeam";
import WebPages from "@/lib/webFields/webpages";
export const metadata = {
  // title: 'eLearning App Development Company',
  // description: 'Your page description.',
  robots: "noindex, nofollow",
};

export default function DigitalMarketingCompany() {
  return (
    <>
      <VectorBanner
        headingPart1="Digital "
        headingPart2="Marketing Company"
        paragraph="Boost your online business visibility and drive organic traffic with Techanic Infotech, the best SEO services company. As a leading firm, we offer the best SEO services solutions tailored to all-scale business needs. So, stay ahead of the competition with our proven SEO techniques."
        vectorImage="/assets/bannerimages/digital-marketing-vector-banner-image.svg"
        image="/assets/bannerimages/digital-marketing-image.webp"
        imagewidth="600px"
        itemsposition="center"
        justifyimage="center"
        btnContent="Contact Us"
        isGradient={true}
        btncolor="93.29deg, #0F53FF -48.03%, #4C4C4C 160.39%"
        btntext="white"
      />
      <OurClients
        headingpart1="Driving Trust, "
        headingpart2="Delivering Success"
      />
      <NativeCards
        heading="Working With The Best"
        // paragraph="Techanic Infotech is driving business success, generating online presence and value for the users with web development services backed by experience and innovation."
        gridClass="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-3"
        cardData={[
          {
            icon: "/assets/icons/increase-website-traffic-icon.svg",
            label: "Increases Website Traffic",
          },
          {
            icon: "/assets/icons/build-credibility-icon.svg",
            label: "Builds Credibility and Trust",
          },
          {
            icon: "/assets/icons/generate-leads-icon.svg",
            label: "Generates Leads and Sales",
          },
          {
            icon: "/assets/icons/cost-effective-marketing-icon.svg",
            label: "Cost-Effective Marketing",
          },
          {
            icon: "/assets/icons/engaging-target-icon.svg",
            label: "Engaging Target Audiences",
          },
          {
            icon: "/assets/icons/enhancing-brand-trust-icon.svg",
            label: "Enhancing Brand Trust",
          },
          {
            icon: "/assets/icons/driving-sustainable-growth-icon.svg",
            label: "Driving Sustainable Growth",
          },
        ]}
      />
      <ServicePagesCards
        headingPart1="Versatile Digital "
        headingPart2="Marketing Services"
        gridStyles="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8"
        paragraph="Empower your business with customized SEO solutions from Techanic Infotech, designed to maximize ROI and unlock long-term success in the digital space. Let us take your online visibility to the next level!"
        techcard={[
          {
            image: "/assets/icons/servicesIcons/local-seo-icon.png",
            title: " Local SEO",
            description:
              "Local SEO According to Statistics, around 64% of customers search for local businesses online. So, boost your local business's online presence with our specialized local SEO services. Be ready to dominate local search results, attract nearby customers, and increase foot traffic. Reach out to us now to improve your local visibility. Feel free to connect with our SEO agency now!",
          },
          {
            image: "/assets/icons/servicesIcons/on-page-seo-icon.png",
            title: "On-Page SEO",
            description:
              "Improve the functionality of your website with our professional on-page SEO services. Our knowledgeable and committed SEO specialists will perform keyword research, optimize your web pages, and improve your content and Meta tags. Improve user experience and search engine rankings to boost engagement and conversions.",
          },
          {
            image: "/assets/icons/servicesIcons/off-page-seo-icon.png",
            title: "Off-Page SEO",
            description:
              "The importance of off-page optimization is emphasized by our Coimbatore SEO service provider since it is essential to establishing brand reputation. Employ SEO specialists that can use industry knowledge through influencer outreach, link development, and successful social media marketing. Drop your needs for SEO services to our experts.",
          },
          {
            image: "/assets/icons/servicesIcons/techanical-seo-icon.png",
            title: "Technical SEO",
            description:
              "Use our expert technical SEO services to improve the functionality and exposure of your website. Our SEO specialists will carefully improve the technical elements of your website to guarantee effective search engine crawling and indexing. To rank higher and offer a smooth user experience, increase site performance, repair broken links, and incorporate structured data.",
          },
          {
            image: "/assets/icons/servicesIcons/ecommerce-seo-icon.png",
            title: "Ecommerce SEO",
            description:
              "Use specialized e-commerce SEO services to increase the success of your online store. To increase organic traffic and conversions, our SEO firm experts concentrate on improving product pages, descriptions, and user experience. To increase e-commerce income, we employ result-driven tactics including content optimization and keyword analysis.",
          },
          {
            image: "/assets/icons/servicesIcons/seo-audits-icon.png",
            title: "SEO Audits",
            description:
              "SEO audit services entail thorough evaluations of websites to find problems influencing their performance and visibility in search results. These SEO services examine things like keyword optimization, technological problems, and on-page SEO. The objective is to provide practical suggestions for raising a website's organic traffic and ranking. Select to engage one of our SEO specialists.",
          },
          {
            image: "/assets/icons/servicesIcons/content-marketing-icon.png",
            title: "Content Marketing",
            description:
              " Techanic Infotech’s content marketing services focus on making and sharing useful and interesting content to connect with the right audience. These services include planning content, creating it, and measuring how well it works on different platforms. The goal is to make more people aware of the brand, build trust, and encourage sales. ",
          },
          {
            image: "/assets/icons/servicesIcons/video-seo-icon.png",
            title: "Video SEO",
            description:
              "Easily improve your video content to boost your business's visibility and ranking with the top video SEO services with us. We help bring more visitors to your videos by finding the right keywords, improving their titles and descriptions, and promoting them effectively. Our goal is to get more people to watch your videos and connect with them. ",
          },
          {
            image: "/assets/icons/servicesIcons/reputation-management-icon.png",
            title: "Reputation Management",
            description:
              "We work on helping a brand or person look good online. Our SEO services work to create a good online image, handle negative comments, and improve trust in search results. We do this through various methods, like making content, managing reviews, watching social media, and responding to problems.",
          },
        ]}
      />
      <CTAButtonDevelopment
        heading="Partner with Techanic Infotech"
        paragraph="The leading digital marketing agency, to supercharge your business growth and online presence."
        useBackgroundImage={true}
        backimage="/assets/digital-marketing-cta-vector-banner-image.svg"
        showBorder={true}
        hovercolor="#000000"
        hovertext="white"
        image="/assets/web-development-cta-image-1.webp"
      />

      <WebTeam
        headingPart1="Our Team of Expert "
        headingPart2="Digital Marketers"
        heading3='Our Team of Expert Digital Marketers at Techanic Infotech
'
        paragraph="At Techanic Infotech, we provide comprehensive digital marketing solutions customized to your business goals. You can select your team from our talented professionals, ensuring the perfect fit for your marketing needs."
        teamList={[
          {
            text: "1. Business Analysts",
            paragraph:
              "Analyze market trends to align strategies with business objectives.",
          },
          {
            text: "2. Project Managers",
            paragraph:
              "Oversee campaign management and deliver results on time.",
          },
          {
            text: "3. SEO Specialists",
            paragraph: "Optimize your online presence for search engines.",
          },
          {
            text: "4. Content Marketers",
            paragraph:
              "Create compelling, high-value content for your audience.",
          },
          {
            text: "5. Social Media Experts",
            paragraph: "Build and manage a strong social media presence.",
          },
          {
            text: "6. PPC Specialists",
            paragraph: "Run targeted, effective paid campaigns.",
          },
          {
            text: "7. Email Marketing Experts",
            paragraph:
              "Drive engagement through personalized email strategies.",
          },
          {
            text: "8. Analytics Specialists",
            paragraph:
              "Measure and optimize performance for continuous improvement.",
          },
        ]}
      />
      <HiringDevelopers
        headingPart1="Hire Digital "
        headingPart2="Marketers in 24 Hours"
        paragraph1="Need to enhance your online presence? Hire expert digital marketers at Techanic Infotech within 24 hours. Our skilled professionals specialize in SEO, content marketing, social media management, and more to elevate your brand."
        image="/assets/hire-developers-service-page-image.webp"
        btntxt="white"
      />
      <Languages
        iconheight="70px"
        iconwidth="70px"
        bgColor="#EFF3FF"
        head="Technologies We Use In Digital Marketing
"
        para="Techanic InfoTech uses only the best and most renowned digital marketing technologies, that’s what makes us stand out.

"
        sections={[
          {
            image: "/assets/icons/seo-tech-stack-icon.png",
            label: "SEO ",
          },
          {
            image: "/assets/icons/smm-tech-stack-icon.png",
            label: "SMM ",
          },
          {
            image: "/assets/icons/ppc-tech-stack-icon.png",
            label: "PPC ",
          },
          {
            image: "/assets/icons/smo-tech-stack-icon.png",
            label: "SMO ",
          },

          {
            image: "/assets/icons/content-marketing-tech-stack-icon.png",
            label: "Content Marketing/Writing ",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/google-keyword-planner-icon.png",
            label: "Google Keyword Planner",
            section: "SEO ",
          },
          {
            image: "/assets/icons/semrush-icon.png",
            label: "SEMrush",
            section: "SEO ",
          },
          {
            image: "/assets/icons/ahrefs-icon.png",
            label: "Ahrefs",
            section: "SEO ",
          },
          {
            image: "/assets/icons/google-analytics-icon.png",
            label: "Google Analytics",
            section: "SEO ",
          },
          {
            image: "/assets/icons/google-search-console-icon.png",
            label: "Google Search Console",
            section: "SEO ",
          },
          {
            image: "/assets/icons/yoast-seo-icon.png",
            label: "Yoast SEO",
            section: "SEO ",
          },
          {
            image: "/assets/icons/hootsuite-icon.png",
            label: "Hootsuite",
            section: "SMM ",
          },
          {
            image: "/assets/icons/adobe-spark-icon.png",
            label: "Adobe Spark",
            section: "SMM ",
          },
          {
            image: "/assets/icons/figma-digital-icon.png",
            label: "Figma",
            section: "SMM ",
          },
          {
            image: "/assets/icons/fb-ad-manager-icon.png",
            label: "Facebook Ads Manager",
            section: "SMM ",
          },
          {
            image: "/assets/icons/yopto-icon.png",
            label: "Yotpo",
            section: "SMM ",
          },
          {
            image: "/assets/icons/animoto-icon.png",
            label: "Animoto",
            section: "SMM ",
          },
          {
            image: "/assets/icons/google-ads-icon.png",
            label: "Google Ads",
            section: "PPC ",
          },
          {
            image: "/assets/icons/meta-ads-icon.png",
            label: "Meta Ads",
            section: "PPC ",
          },
          {
            image: "/assets/icons/google-data-studio-icon.png",
            label: "Google Data Studio",
            section: "PPC ",
          },
          {
            image: "/assets/icons/spyfu-icon.png",
            label: "SpyFu",
            section: "PPC ",
          },
          {
            image: "/assets/icons/ppc-protect-icon.png",
            label: "PPC Protect",
            section: "PPC ",
          },
          {
            image: "/assets/icons/hubspot-icon.png",
            label: "HubSpot CRM",
            section: "PPC ",
          },

          {
            image: "/assets/icons/hootsuite-icon.png",
            label: "Hootsuite",
            section: "SMO ",
          },
          {
            image: "/assets/icons/piktochart-icon.png",
            label: "Piktochart",
            section: "SMO ",
          },
          {
            image: "/assets/icons/brandwatch-icon.png",
            label: "Brandwatch",
            section: "SMO ",
          },
          {
            image: "/assets/icons/google-analytics-icon.png",
            label: "Google Analytics (Social Reports)",
            section: "SMO ",
          },
          {
            image: "/assets/icons/rafflecopter-icon.png",
            label: "Rafflecopter",
            section: "SMO ",
          },
          {
            image: "/assets/icons/hashtagify-icon.png",
            label: "Hashtagify",
            section: "SMO ",
          },
          {
            image: "/assets/icons/yopto-icon.png",
            label: "Yotpo",
            section: "SMO ",
          },
          {
            image: "/assets/icons/social-audit-pro-icon.png",
            label: "Social Audit Pro",
            section: "SMO ",
          },
          {
            image: "/assets/icons/answer-public-icon.png", // Add the correct icon
            label: "AnswerThePublic",
            section: "Content Marketing/Writing ",
          },
          {
            image: "/assets/icons/buzzsumo-icon.png", // Add the correct icon
            label: "BuzzSumo",
            section: "Content Marketing/Writing ",
          },
          {
            image: "/assets/icons/google-trends-icon.png", // Add the correct icon
            label: "Google Trends",
            section: "Content Marketing/Writing ",
          },
          {
            image: "/assets/icons/grammerly-icon.png", // Add the correct icon
            label: "Grammarly",
            section: "Content Marketing/Writing ",
          },
          {
            image: "/assets/icons/monday.com-icon.png", // Add the correct icon
            label: "Monday.com",
            section: "Content Marketing/Writing ",
          },
          {
            image: "/assets/icons/hubspot-icon.png", // Add the correct icon
            label: "HubSpot Marketing Hub",
            section: "Content Marketing/Writing ",
          },
        ]}
      />
      <AppDevelop
        headingPart1="Our "
        headingPart2="Process"
        cards={[
          {
            image: "/assets/icons/client-need-icon.svg",
            title: "Understanding Client Needs",
            description:
              "Analyze client goals and current SEO performance to identify improvement areas and opportunities.",
          },
          {
            image: "/assets/icons/strategic-icon.svg",
            title: "Crafting a Strategic Plan",
            description:
              "Develop a customized SEO strategy outlining target keywords, content, and timelines for implementation.",
          },
          {
            image: "/assets/icons/design-prototype-icon.svg",
            title: "Optimizing Design and User Experience",
            description:
              "Enhance website structure, user experience, and content to align with SEO best practices effectively.",
          },
          {
            image: "/assets/icons/seo-tactics-icon.svg",
            title: "Executing SEO Tactics",
            description:
              "Implement on-page optimizations, create quality content, and build authoritative backlinks for better rankings.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Monitoring and Quality Assurance",
            description:
              "Continuously track keyword rankings, organic traffic, and user engagement for ongoing optimization and improvement.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Continuous Optimization and Support",
            description:
              "Provide regular updates and adjustments to the SEO strategy based on performance and algorithm changes.",
          },
        ]}
      />
            <WebPages
        heading="Future Ready Solution Across Industries"
        paragraph="To help the business deliver more value to its end-users and streamline business operations with digital solutions, we offer IT development services covering every industry and niche."
        p1="Develop an ecommerce app like Amazon or something unique. In either case, we are here to help you."
        p2="Enabling restaurant and food delivering business with digital solutions that streamline their business."
        p3="Helping ambitious companies deliver new-age entertainment to their user, with media and entertainment solutions."
        p4="Techanic InfoTech is equipping agents and companies with digital solutions, via Real Estate App development."
        p5="Healthcare App Development services from experienced and professional mobile app developers are at your fingertips."
        p6="Enter the Edtech future with School Management and an advanced learning management system from a tech-savvy brand."
        p7="Tap into the real potential of the modern supply chain with our data-driven logistics and transport app development services."
        p8="Fintech is the future and the future is now. Avail renowned fintech app development services and build your own digital solution."
        p9="Develop travel and hospitality solutions with experienced team of developers and designers at Techanic Infotech."
      />
            <TechSuccess
        headingPart1="Why"
        headingPart2="Choose Us?"
                bgColor="#EFF3FF"
        // paragraph="Wondering Why to Choose Techanic InfoTech for your next
        //  digital marketing project? Apart from years’ worth of experience and technical prowess,
        //   we have the right skill set as well as the creative approach required to deliver the 
        //   innovation in form of web apps, web design, and web projects."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"

      />
         <Ratings
        heading="Best Recognized By The Best"
        paragraph="Techanic InfoTech is recognized as one of the best web and app development companies in the industry by top tech critiques and platforms."
        items={[
          {
            src: "/assets/clutch-image.webp",

            alt: "clutchImg",
            para: "Clutch.co has recognized Techanic InfoTech as one of the best in the market. We have earned a 4.7 Star rating.",
          },
          {
            src: "/assets/good-firms-image.webp",

            alt: "firmsImg",
            para: "Techanic InfoTech is among the top names in GoodFirm's list of top mobile app development and web development firms.",
          },
          {
            src: "/assets/designrush-image.webp",

            alt: "designofrushImg",
            para: "With our software development and designing capacities, we have earned 4.8-star rating with a rank among top names.",
          },
          {
            src: "/assets/business-of-apps-image.webp",

            alt: "businessImg",
            para: "A top platform in the world of tech and app development, BusinessofApps gives Techanic InfoTech a 4.8-star rating.",
          },
          {
            src: "/assets/g2-image.webp",

            alt: "g2Img",
            para: "The well-known tech critique and review platform, G2 awards Techanic InfoTech with near perfect 4.9 star rating.",
          },
        ]}
        textcolor="#00008B"
      />
      <ClientTestimonials
        heading="Client Testimonials"
        cardBgColor="F1F5F9"
        paragraph="With a 93% Client Satisfaction Rate, Our Customer Has Nothing But Good Works and Praises To Say About Us. Here are some client testimonials."
        showImages={false}
      />
      <FrequentQuestions
        heading="
Frequently Asked Questions (FAQs)
"
        questions={[
          "Q1: How Can You Trust a Digital Marketing Company for Their Services?",
          "Q2: How do I hire a digital marketing agency?",
          "Q3: Do I need a digital marketing agency?",
          "Q4: What is local SEO in digital marketing?",
          "Q5: What are the benefits of using digital marketing services?",
          "Q6: Would my business benefit from Digital Marketing Services?",
          "Q7: How Can I Get The Services Started?",
          "Q8:  Do you have in-depth experience with content marketing?",
          "Q9: How much do you charge for your services?",
        ]}
        answers={[
          "A1: Not all digital marketing agencies are the same. Before hiring one, consider these key qualities: a strong online presence, excellent customer service, use of social proof on their website, testimonials or case studies that demonstrate results, and prompt responses to customer inquiries.",
          "A2: Identify your specific needs from a digital marketing agency and give us a call to discuss then. We’ll provide you with the best digital marketing packages tailored to your requirements. Together, we’ll set a budget that aligns with the services you need.",
          "A3: If you're looking to strengthen and establish your brand's online presence, partnering with a digital marketing agency is essential. Contact Techanic Infotech today for a consultation and let us guide you on your journey.",
          "A4: Local SEO is a search engine optimization strategy that enhances your business's visibility in local search results. It helps display your physical location on Google, making it easier for local customers to find you. It's one of the most effective ways to promote your business within your community.",
          "A5: Effective digital marketing offers numerous advantages, such as expanding reach and visibility through online channels. It allows you to target new audiences more cost-effectively than traditional marketing methods. Additionally, digital marketing provides a powerful platform to engage with both new and returning customers, building trust and strengthening brand relationships.",
          "A6: Every brand needs an online presence, but without effective marketing, it won't make an impact. To succeed, businesses require a comprehensive, ongoing digital marketing strategy supported by an experienced marketing team.",
          "A7: Identify a top digital marketing company in your area. Outline your requirements and discuss them with a digital marketing consultant. Before signing a contract, review their portfolio, past projects, results, delivery timelines, and available digital marketing packages. If you're satisfied with their work and reports, proceed; if not, consider terminating the service and exploring other digital marketing agencies.",
          "A8: SpiderWorks boasts a team of skilled content creators with extensive experience in the industry. We guarantee high-quality, search engine-optimized content designed to enhance your online presence.",
          "A9: We provide competitively priced packages for all our services. Since the cost of most services depends on your specific requirements, please contact us now to get a quote for the service you need.",
        ]}
      />
    </>
  );
}
