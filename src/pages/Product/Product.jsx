import React, { useEffect } from "react";
import productData from "../../assets/fake-data/products";
import Helmet from "../../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../../components/Section";
import Grid from "../../components/Grid";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import ProductView from "../../components/ProductView/ProductView";

const Product = () => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relatedProduct = productData.getProducts(8);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám Phá Thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={10}>
            {relatedProduct.map((item, i) => (
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
    </Helmet>
  );
};

export default Product;
