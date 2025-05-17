import "./Disclosures.css"

import { useEffect, useRef, useState } from 'react';
import { Pane } from 'tweakpane';

const Disclosures=()=>{
  const [config, setConfig] = useState({
    theme: 'system'
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);
  const paneRef = useRef(null);

  const items = [
    {
      title: "The Craft",
      description: "Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.",
      svgPath: "M6 3h12l4 6-10 13L2 9Z M11 3 8 9l4 13 4-13-3-6 M2 9h20",
      imgSrc: "https://picsum.photos/720/720?random=12"
    },
    {
      title: "CSS Animation",
      description: "Master CSS animations from your very first set of @keyframes right through to things no one else ever teaches you.",
      svgPath: "M7 3v18 M3 7.5h4 M3 12h18 M3 16.5h4 M17 3v18 M17 7.5h4 M17 16.5h4",
      svgRect: "M3 3h18v18H3z",
      imgSrc: "https://picsum.photos/720/720?random=17"
    },
    {
      title: "SVG Filters",
      description: "Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.",
      svgPath: "M22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
      imgSrc: "https://picsum.photos/720/720?random=19"
    },
    {
      title: "Scroll Animation",
      description: "Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.",
      svgPath: "M19 17V5a2 2 0 0 0-2-2H4 M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      imgSrc: "https://picsum.photos/720/720?random=42"
    },
    {
      title: "Taming Canvas",
      description: "Grasp how to tame the pixel playground and when to do so. Whilst building with 'Performance Driven Development'.",
      svgPath: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      svgCircles: [
        { cx: "13.5", cy: "6.5", r: ".5" },
        { cx: "17.5", cy: "10.5", r: ".5" },
        { cx: "8.5", cy: "7.5", r: ".5" },
        { cx: "6.5", cy: "12.5", r: ".5" }
      ],
      imgSrc: "https://picsum.photos/720/720?random=128"
    },
    {
      title: "Layout Tricks",
      description: "Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.",
      svgPath: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72 m14 7 3 3 M5 6v4 M19 14v4 M10 2v2 M7 8H3 M21 16h-4 M11 3H9",
      imgSrc: "https://picsum.photos/720/720?random=56"
    },
    {
      title: "Mastering Time",
      description: "It's not all just easings and compositions. Time plays a crucial part in various UI patterns that might not seem obvious at first.",
      svgPath: "M5 22h14 M5 2h14 M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22 M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
      imgSrc: "https://picsum.photos/720/720?random=39"
    }
  ];

 

  useEffect(() => {
    // Set up grid columns based on active index
    const cols = items.map((_, i) => i === activeIndex ? '10fr' : '1fr').join(' ');
    if (listRef.current) {
      listRef.current.style.setProperty('grid-template-columns', cols);
    }
  }, [activeIndex, items]);

  const handleItemInteraction = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="body-disclosures z-10 glass p-5 my-10 w-[650px] lg:w-[40%]">
        <div className="app flex flex-wrap justify-center">
          <div className="w-full text-center p-3 rounded-full my-10 raleway bg-[#1f1e20] ">
            <h2 className="fluid archivo-black-regular text-bold rounded-full glass text-4xl">UPDATES</h2>
          </div>
          <ul ref={listRef} className="ul-disclosure">
            {items.map((item, index) => (
              <li
                className="mylist-disclosure"
                key={index}
                data-active={index === activeIndex}
                onClick={() => handleItemInteraction(index)}
                onPointerMove={() => handleItemInteraction(index)}
              >
                <article className="article-disclosure">
                  <h3 className="h3-map-disclosures">{item.title}</h3>
                  <p className="paragraph-disclosure">{item.description}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className="svg-disclosure"
                  >
                    {item.svgRect && <rect x="3" y="3" width="18" height="18" rx="2" />}
                    {item.svgCircles && item.svgCircles.map((circle, i) => (
                      <circle key={i} cx={circle.cx} cy={circle.cy} r={circle.r} fill="currentColor" />
                    ))}
                    <path d={item.svgPath} />
                  </svg>
                  <a href="#" className="link-disclosures">
                    <span>Watch now</span>
                  </a>
                  <img src={item.imgSrc} alt="" />
                </article>
              </li>
            ))}
          </ul>
          
        </div>
    </div>
  );
}

export default Disclosures;