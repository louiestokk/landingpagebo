import React from "react";
import logo from "../assets/logo.svg";
const Products = () => {
  const categories = [
    {
      img: "https://images.ocast.com/eyJidWNrZXQiOiJuZXcub2Nhc3QuY29tIiwia2V5IjoiNjg5ODEvZXlKaWRXTnJaWFFpT2lKdVpYY3ViMk5oYzNRdVkyOXRJaXdpYTJWNUlqb2lOamN5TURrdlVqVnBaVzVtTFhoWVZsZHdSRFJSWkM1cWNHY2lmUT09LmpwZWciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjEwMH0sInJlc2l6ZSI6eyJ3aWR0aCI6MzgwLCJoZWlnaHQiOjIyNSwiZml0IjoiY292ZXIifX19",
      label: "Display annonsering",
    },
    {
      img: "https://images.ocast.com/eyJidWNrZXQiOiJuZXcub2Nhc3QuY29tIiwia2V5IjoiNjI4NDEvSGVtbmV0LUxvZ28uanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5IjoxMDB9LCJyZXNpemUiOnsid2lkdGgiOjM4MCwiaGVpZ2h0IjoyMjUsImZpdCI6ImNvdmVyIn19fQ==",
      label: "Mobilannonsering hos Bovision",
    },
    {
      img: "https://images.ocast.com/eyJidWNrZXQiOiJuZXcub2Nhc3QuY29tIiwia2V5IjoiNjcyMTEvVWpxNHBRVGhqNGJqUkpqNi5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjEwMH0sInJlc2l6ZSI6eyJ3aWR0aCI6MzgwLCJoZWlnaHQiOjIyNSwiZml0IjoiY292ZXIifX19",
      label: "Content Marketing / Native",
    },
    {
      img: "https://images.ocast.com/eyJidWNrZXQiOiJuZXcub2Nhc3QuY29tIiwia2V5IjoiNjcyMTIvVEhucGxDQU1CcWYwRlhJOC5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp7InF1YWxpdHkiOjEwMH0sInJlc2l6ZSI6eyJ3aWR0aCI6MzgwLCJoZWlnaHQiOjIyNSwiZml0IjoiY292ZXIifX19",
      label: "Annonsera bostad",
    },
  ];
  return (
    <div className="products-root">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #aacbef",
          height: "70px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        }}
      >
        <div style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
          <img
            src={logo}
            style={{ width: "130px", height: "32.5px" }}
            alt="bovision logo"
          />
        </div>
        <div style={{ marginRight: "1rem" }}>
          <div
            style={{
              background: "#0d5bae",
              width: "16px",
              height: "2px",
              marginBottom: "4px",
            }}
          ></div>{" "}
          <div
            style={{
              background: "#0d5bae",
              width: "16px",
              height: "2px",
              marginBottom: "4px",
            }}
          ></div>{" "}
          <div
            style={{
              background: "#0d5bae",
              width: "16px",
              height: "2px",
              marginBottom: "4px",
            }}
          ></div>
        </div>
      </section>
      <h1 style={{ padding: "1rem" }}>Annonsera hos Bovision</h1>
      {categories.map((el, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            width: "88%",
            borderBottom: "1px solid #c4dcf5",
            cursor: "pointer",
            marginLeft: "0.9rem",
            marginBottom: "1rem",
          }}
        >
          <img
            src={el.img}
            alt={el.label}
            className="item"
            style={{ marginBottom: "1rem" }}
          />
          <p
            style={{
              fontWeight: "bold",
              color: "#0d539c",
              marginLeft: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {el.label}
          </p>
        </div>
      ))}
      <div style={{ height: "100px" }}></div>

      <div className="bl-root">
        <h1
          style={{
            padding: "1rem",
            maxWidth: "200px",
            lineHeight: "40px",
          }}
        >
          Annonsera hos Bovision!
        </h1>
        {categories.map((el, index) => (
          <div key={index} className="bl-cont">
            <img src={el.img} alt={el.label} className="bl-img" />
            <h4
              style={{
                fontWeight: "bold",
                color: "#0d539c",
                marginLeft: "1rem",
              }}
            >
              {el.label}
            </h4>
          </div>
        ))}
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Products;
