import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bug from '../../assets/bug.png'
import manual from '../../assets/manual.jpg'
import test from '../../assets/testcases.png'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BentoGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const gridItems = gridRef.current.querySelectorAll(".grid-item");

      gridItems.forEach((item, _index) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  return (
    <div className="bg-[#f6f5f3] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ">
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight  text-gray-950 sm:text-5xl">
          Everything You Need for Manual Testing
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

          {/* Grid Item 1 - Test Scenarios */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-[#f4e6fd] lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">
                  Test Scenarios
                </p>
                <p className="mt-2 max-w-lg text-lg/6 text-gray-800 max-lg:text-center">
                  Explore a comprehensive library of test scenarios for web, mobile, and API testing. Perfect for beginners and experts alike.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src={manual}
                    alt="Test Scenarios"
                  />
                  
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>

          {/* Grid Item 2 - Bug Reporting */}
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-[#f1fde7] max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">
                  Bug Reporting
                </p>
                <p className="mt-2 max-w-lg text-lg/5 text-gray-800 max-lg:text-center">
                  Learn how to write effective bug reports with clear steps, expected results, and actual results.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src={bug}
                  alt="Bug Reporting"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>

          {/* Grid Item 3 - Test Cases */}
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-[#fde7e7]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Test Cases
                </p>
                <p className="mt-2 max-w-lg text-lg/5 text-gray-800 max-lg:text-center">
                  Discover best practices for writing clear, concise, and reusable test cases.
                </p>
              </div>
              <div className="@container flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src={test}
                  alt="Test Cases"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>

          {/* Grid Item 4 - Tools & Resources */}
          <div className="relative lg:row-span-2">
  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
      <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
        Tools & Resources
      </p>
      <p className="mt-2 max-w-lg text-lg/6 text-gray-800 max-lg:text-center">
        Explore a curated list of tools and resources for manual testers, including bug trackers, test management tools, and more.
      </p>
    </div>
    <div className="relative min-h-[30rem] w-full grow">
      <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
          <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
              Jira
            </div>
            <div className="border-r border-gray-600/10 px-4 py-2">TestRail</div>
            <div className="border-r border-gray-600/10 px-4 py-2">Postman</div>
          </div>
        </div>
        <div className="px-6 pt-6 pb-14">
          <p className="text-white text-sm/6 mb-4">
            <strong>Jira</strong> is a powerful bug tracking and project management tool. It helps testers log, track, and prioritize bugs efficiently.
          </p>
          <p className="text-white text-sm/6 mb-4">
            <strong>TestRail</strong> is a test case management tool that allows testers to organize test cases, track test execution, and generate detailed reports.
          </p>
          <p className="text-white text-sm/6 mb-4">
            <strong>Postman</strong> is an API testing tool that simplifies the process of testing APIs by providing a user-friendly interface for sending requests and analyzing responses.
          </p>
          <p className="text-white text-sm/6">
            Other useful tools include:
            <ul className="list-disc list-inside mt-2">
              <li><strong>Trello</strong> for task management and collaboration.</li>
              <li><strong>Bugzilla</strong> for open-source bug tracking.</li>
              <li><strong>SoapUI</strong> for advanced API testing.</li>
              <li><strong>BrowserStack</strong> for cross-browser testing.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
</div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;