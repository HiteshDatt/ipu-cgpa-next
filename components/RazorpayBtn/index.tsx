import React, { ReactElement, useEffect } from "react";

const RazorpayBtn = (): ReactElement => {
  useEffect(() => {
    if (
      document.querySelectorAll('[script-id="razorpay-script"]')?.length === 0
    ) {
      //condition to make sure script is only injected once
      var script = document.createElement("script");
      let anchor = document.getElementById("razorpay-btn");
      script.setAttribute("script-id", "razorpay-script");
      script.setAttribute(
        "src",
        "https://checkout.razorpay.com/v1/payment-button.js"
      );
      script.async = true;
      script.setAttribute("data-payment_button_id", "pl_Jw2oiIx9FBw0CR");
      anchor?.appendChild(script);
    }
    return () => {
      //clean up
      script?.remove();
    };
  }, []);

  return (
    <>
      <form id="razorpay-btn"></form>
    </>
  );
};

export default RazorpayBtn;
