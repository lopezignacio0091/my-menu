import React from "react";
import { Container, Description, Title , Image, Section} from "./styles";

const products = [
  {
    id: 1,
    img:
      "https://st3.depositphotos.com/1031174/12758/i/600/depositphotos_127589374-stock-photo-roasted-coffee-beans.jpg",
    title: "Arabica Roast",
    description: "Praesents faucibu justo semper massa viverra luctu."
  },
  {
    id: 2,
    img:
      "https://cdn.shopify.com/s/files/1/0557/1965/7630/files/4.jpg?v=1617707314%27)",
    title: "Robusta Roast",
    description: "Fusce venenati intedum faucis fungle proin nunc."
  },
  {
    id: 3,
    img:
      "https://cdn.shopify.com/s/files/1/0557/1965/7630/files/5.jpg?v=1617707314')",
    title: "Kenya Beans",
    description: "Aenean hendrerit facilsi conva bean gravid suscipit."
  },
  {
    id: 4,
    img:
      "https://st3.depositphotos.com/1031174/12758/i/600/depositphotos_127589374-stock-photo-roasted-coffee-beans.jpg",
    title: "Mexican Beans",
    description: "Curabir semper lacu conseqat amet quam convalli."
  }
];



const SectionTop = () => {
  return (
      <Container>
        {products.map((p) => (
          <Section key={p?.id}>
            <div>
              <Image src={p.img} alt={p.title} />
            </div>
            <Title>{p.title}</Title>
            <Description>{p.description}</Description>
          </Section>
        ))}
      </Container>
  );
}
export default SectionTop;