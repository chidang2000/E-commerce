import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../../components/Helmet";
import Hero from "./Hero";
import Section, { SectionBody, SectionTitle } from "../../components/Section";
import heroSliderData from "../../assets/fake-data/hero-slider";
import productData from "../../assets/fake-data/products";

import policy from "../../assets/fake-data/policy";
import PolicyCard from "../../components/PolicyCard/PolicyCard";
import Grid from "../../components/Grid";
import ProductCard from "../../components/ProductCard/ProductCard";
import banner from "../../assets/images/banner.png";

const Home = () => {
  return (
    <Helmet title="Trang Chủ">
      <div className="home">
        {/* Hero Header */}
        <Hero data={heroSliderData}></Hero>

        {/* Section */}
        <Section>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={10}>
              {policy.map((item, i) => (
                <Link to="/policy" key={i}>
                  <PolicyCard
                    name={item.name}
                    desc={item.description}
                    icon={item.icon}
                  ></PolicyCard>
                </Link>
              ))}
            </Grid>
          </SectionBody>
        </Section>
        {/* Best Seller */}
        <Section>
          <SectionTitle>Sản phẩm bán chạy trong tuần</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={10}>
              {productData.getProducts(4).map((item, i) => (
                <ProductCard
                  key={i}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>

        {/* New Product */}
        <Section>
          <SectionTitle>Sản phẩm mới</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={10}>
              {productData.getProducts(8).map((item, i) => (
                <ProductCard
                  key={i}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>

        {/* Banner */}
        <Section>
          <SectionBody>
            <Link to="/catalog">
              <img src={banner} alt="" style={{ maxWidth: "100%" }} />
            </Link>
          </SectionBody>
        </Section>

        {/* popular product */}
        <Section>
          <SectionTitle>Sản phẩm phổ biến</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={10}>
              {productData.getProducts(12).map((item, i) => (
                <ProductCard
                  key={i}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={item.price}
                  slug={item.slug}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </div>
    </Helmet>
  );
};

export default Home;
