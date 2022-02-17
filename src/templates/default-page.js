import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import GitHubSVG from "../svg/github.svg";
import LinkedInSVG from "../svg/linkedin.svg";
import TwitterSVG from "../svg/twitter.svg";

const socialLinks = [
  {
    Component: GitHubSVG,
    href: "https://github.com/irangarcia",
    title: "GitHub",
  },
  {
    Component: TwitterSVG,
    href: "https://twitter.com/irangarciaz",
    title: "Twitter",
  },
  {
    Component: LinkedInSVG,
    href: "https://www.linkedin.com/in/irangarciaj",
    title: "LinkedIn",
  },
];

function DefaultPageTemplate({ pageContext: { page } }) {
  return (
    <div>
      <div className="pt-6 pb-8 space-y-2 md:space-y-5 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:leading-14">
          {page.title}
        </h1>
        {page.subtitle && (
          <p className="text-lg leading-7 text-gray-500">{page.subtitle}</p>
        )}
      </div>
      <div className="text-center">
        <ul className="inline-flex space-x-6">
          {socialLinks.map(({ Component, href, title }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                className="block text-gray-400 hover:text-gray-600 p-1 text-xs"
                rel="noopener noreferrer"
                title={title}
              >
                <Component className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-16 lg:pb-20">
        <div className="prose max-w-none pt-10 text-md pb-8">
          <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
        </div>
      </div>
    </div>
  );
}

export default DefaultPageTemplate;
