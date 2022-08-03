import React from "react";
import Product from "../product/Product";
import "./styles.css";

function Home() {
  return (
    <main>
      <div className="home-container">
        <img
          src="https://m.media-amazon.com/images/I/51Qkk7ASDGL._SX3000_.jpg"
          alt=""
          className="home-img"
        />

        <div className="product-row">
          <Product
            img={
              "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            }
            price={99.99}
            title={"Beats Audio"}
          />
          <Product
            img={
              "https://i5.walmartimages.com/asr/75457cce-01ec-4034-9b08-8ce46ef28eb1.54e554589c7c9735183b2def5118accc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            }
            price={155.89}
            title={"Homfa 41.7"}
          />
        </div>
        <div className="product-row">
          <Product
            img={
              "https://i5.walmartimages.com/asr/c4d1ee39-dfbd-430b-aaac-17da440a048d.3383d270103eaecf0b0847e265c7e14f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            }
            price={29.99}
            title={"Mini Fridge"}
          />
          <Product
            img={
              "https://i5.walmartimages.com/asr/667a85b0-527a-4155-bf14-916bbbad1a03.4c5531cff86e2713dfcc28c79113c2ef.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            }
            price={24.0}
            title={"Backpack"}
          />
          <Product
            img={
              "https://i5.walmartimages.com/asr/78986e35-986d-4b81-8652-b6d38412cd91.e68e4c67f5f0eb0681d43e723426511d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            }
            price={78.0}
            title={"FujiMax Camera"}
          />
        </div>
        <div className="product-row">
          <Product
            img={
              "https://i5.walmartimages.com/asr/5f477dea-ca4a-4ce2-be7a-e9b88a863d12.2450f7c88f193f54f9d47467ebec34a6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            }
            price={498.0}
            title={"Samsung Tv"}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
