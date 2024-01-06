import React, { ReactElement, useEffect } from "react";

const AdsContainer = (): ReactElement => {
  useEffect(() => {
    setTimeout(() => {
      //condition to make sure script is only injected once
      if (!document.querySelector("#adsterra-social-bar-script")) {
        var script = document.createElement("script");
        let anchor = document.body;
        script.setAttribute("id", "adsterra-social-bar-script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute(
          "src",
          "//pl22032887.toprevenuegate.com/1d/03/73/1d037306667d3fb5457b3d1d732fcccb.js"
        );
        anchor?.appendChild(script);
      }
    }, 4 * 60 * 1000);
  }, []);

  return (
    <>
      <script
        async
        id="adsterra-native-banner-script"
        data-cfasync="false"
        src="//pl22032787.toprevenuegate.com/fa3cfa7883c33f66e179d8a6a460fdc8/invoke.js"
      ></script>
      <div id="container-fa3cfa7883c33f66e179d8a6a460fdc8"></div>
    </>
  );
};

export default AdsContainer;
