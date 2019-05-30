import React from "react";
import Gallery from 'react-grid-gallery';

export default function Services() {
  const kitchen =
    [{
      src: "https://i.ibb.co/kMSszX2/10414452-519083084891841-580274069820085933-n.jpg",
      thumbnail: "https://i.ibb.co/kMSszX2/10414452-519083084891841-580274069820085933-n.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400,
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: "https://i.ibb.co/mHX6dCf/11951142-728320767301404-3726288375963335854-n.jpg",
      thumbnail: "https://i.ibb.co/mHX6dCf/11951142-728320767301404-3726288375963335854-n.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "https://i.ibb.co/r78xjFx/20190126-123334.jpg",
      thumbnail: "https://i.ibb.co/r78xjFx/20190126-123334.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400
    },
    {
      src: "https://i.ibb.co/jwJkyGV/FB-IMG-1546276829748.jpg",
      thumbnail: "https://i.ibb.co/jwJkyGV/FB-IMG-1546276829748.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400
    },
    {
      src: "https://i.ibb.co/hDvGVyz/FB-IMG-1547344419670.jpg",
      thumbnail: "https://i.ibb.co/hDvGVyz/FB-IMG-1547344419670.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 320
    },
    {
      src: "https://i.ibb.co/RNL66YQ/FB-IMG-1547655084549.jpg",
      thumbnail: "https://i.ibb.co/RNL66YQ/FB-IMG-1547655084549.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 320
    }]

  const railing =
    [{
      src: "https://i.ibb.co/PcdV236/2012-10-20-1.jpg",
      thumbnail: "https://i.ibb.co/PcdV236/2012-10-20-1.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400,
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: "https://i.ibb.co/3N4Zd3W/2012-10-20.jpg",
      thumbnail: "https://i.ibb.co/3N4Zd3W/2012-10-20.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "https://i.ibb.co/923XKbk/Photo0092-001.jpg",
      thumbnail: "https://i.ibb.co/923XKbk/Photo0092-001.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400
    },
    {
      src: "https://i.ibb.co/3dxfG7w/10304636-508364109297072-6763317863242665084-n.jpg",
      thumbnail: "https://i.ibb.co/3dxfG7w/10304636-508364109297072-6763317863242665084-n.jpg",
      thumbnailWidth: 600,
      thumbnailHeight: 400
    },
    {
      src: "https://i.ibb.co/kcBFyw8/10325399-496986123768204-3296584078294700935-n.jpg",
      thumbnail: "https://i.ibb.co/kcBFyw8/10325399-496986123768204-3296584078294700935-n.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 320
    },
    {
      src: "https://i.ibb.co/k0ZkkFZ/12011315-738266872973460-158228140708143594-n.jpg",
      thumbnail: "https://i.ibb.co/k0ZkkFZ/12011315-738266872973460-158228140708143594-n.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 320
    }]

  return (
    <div><div className="container">
      <div className="row">

        <div className="col-sm-6">

          <div className="clearfix"></div>
          <h1 className="text-center">Railings
              </h1>
          <p>With the backing of our capable workforce, we are affianced in the business of presenting to our clients an optimum grade consignment of Stainless Steel Railing. Obtainable with us in a number of sizes, these presented products are highly commended and applauded by our clients.
            <br></br>
            <b> Features:</b><br></br>
            Wonderful finish<br></br>
            Durable<br></br>
            Optimum quality
              </p>

        </div>

        <div class="col-sm-6 justify-content-end lm-1">
          <div style={{
            display: "block",
            minHeight: "1px",

            width: "100%",
            border: "1px solid #ddd",
            overflow: "auto"
          }}>
            <Gallery
              images={railing} enableImageSelection={false} />
          </div>
        </div>
      </div>

      <hr size="1"></hr>
      <div className="row">
        <div className="col-sm-6 mt-2">
          <div style={{
            display: "block",
            minHeight: "1px",
            height: "100%",
            width: "100%",
            border: "1px solid #ddd",
            overflow: "auto"
          }}> <Gallery
              images={kitchen} enableImageSelection={false} /> </div>
        </div>
        <div className="col-sm-6">
          <h1 className="text-center">Kitchen Trolley's</h1>
          <p>Keeping in view the ever varying desires of our clients, we are actively immersed in presenting an exceptional collection of Interior Kitchen Trolley. In conformism with the pre-defined standards, these are designed making use of best-in-class inputs in tune with the guidelines set by the market.          <br></br>
            <b> Features:</b><br></br>
            Excellent quality<br></br>
            Smooth finish<br></br>
            Contemporary designs
              </p>

        </div>
      </div>

      <hr size="1"></hr>


      <div className="row ">
        <div className="col-sm-6">


          <h1 className="text-center">Furniture</h1> <p>We manufacture and stock a range of residential furniture for your family. From Sofas to Chairs, Eaststyle furniture can fill your store with gorgeous residential furniture that you will love it.</p>
        </div>


        <div className="col-sm-6  ">
          <div style={{
            display: "block",
            minHeight: "1px",

            width: "100%",
            border: "1px solid #ddd",
            overflow: "auto"
          }}>
            <Gallery
              images={kitchen} enableImageSelection={false} />
          </div>
        </div>
      </div >
    </div>
    </div>

  );
}