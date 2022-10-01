import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{ backgroundColor: "#d0bfff" }}
    >
      <div className="container">
        <h1 className="hero__title">
          {/* {siteConfig.title} */}
          <img src="/img/mozi-string.png" />
        </h1>
        {/* <p
          className="hero__subtitle"
          style={{ color: "white", fontWeight: 700 }}
        >
          DONE IS BETTER THAN PERFECT
        </p> */}
        <div
          className={(clsx("hero__buttons"), styles.buttons)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{
              display: "block",
              marginBottom: "1rem",
              width: "15rem",
              backgroundColor: "#7359fe",
              border: "none",
              color: "#d0bfff",
            }}
          >
            How to MOZI
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/blog"
            style={{
              display: "block",
              width: "15rem",
              backgroundColor: "#7359fe",
              border: "none",
              color: "#d0bfff",
            }}
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      // title={`How to ${siteConfig.title}`}
      title={`How to MOZI`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
