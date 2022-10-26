import React, { useMemo } from "react";
import { Container, Title } from "./styles";
import Links from "./components/Links";

const Footer = () => {
  const iframe = useMemo(
    () =>
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6708588345573!2d-58.42042268477011!3d-34.6124835804573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca5f4f04cf0b%3A0xaed8c283780c0d2c!2sUniversidad%20Lomas!5e0!3m2!1sen!2sar!4v1665084814582!5m2!1sen!2sar" width="200" height="150" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    []
  );

  return (
    <Container>
      <Title>GESTIONNAR.TI</Title>
      <Links
        title="Institucional"
        links={[
          { name: "Quienes somos", link: "/" },
          { name: "Como comprar", link: "/" },
          { name: "Envios", link: "/" },
          { name: "Factura A", link: "/" },
          { name: "Venta mayorista", link: "/" },
        ]}
      />
      <Links
        title="Legal"
        links={[
          { name: "Terminos y condiciones", link: "/" },
          { name: "Privacidad de datos", link: "/" },
          { name: "Envios", link: "/" },
          { name: "Arrepentimiento de compra", link: "/" },
          { name: "Venta mayorista", link: "/" },
        ]}
      />
      <Links
        title="Cliente"
        links={[
          { name: "Mi cuenta", link: "/" },
          { name: "Mis favoritos", link: "/" },
          { name: "Accesos", link: "/" },
        ]}
      />
      <div>
        <div dangerouslySetInnerHTML={{ __html: iframe }} />
      </div>
    </Container>
  );
};

export default Footer;
