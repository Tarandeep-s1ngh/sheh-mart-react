import { favicon } from "../assets";
import { confettiCanvas } from "./confettiCanvas";
import { triggerToast } from "./toastTrigger";

const loadScript = async (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = url;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
const displayRazorpay = async (price, onsuccess) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    console.error("Razorpay SDK failed to load, check you connection", "error");
    return;
  }

  const { userDetails } = JSON.parse(localStorage.getItem("ECOMAUTH"));

  const options = {
    key: "rzp_test_oIwa8DemzzetnV",
    amount: price * 100,
    currency: "INR",
    name: "Sheh Mart",
    description: "Thank you for shopping with us",
    image: favicon,
    handler: function (response) {
      confettiCanvas();

      triggerToast("success", "Order Placed succefully 🎉");
      onsuccess();
    },
    prefill: {
      name: userDetails.firstName + " " + userDetails.lastName,
      email: userDetails.email,
      contact: "9833445762",
    },
    theme: {
      color: "#ec7043",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export { displayRazorpay };
